<template>
	<view class="container">
		<form @submit="formSubmit">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">产品名称</view>
					<input
						name="name"
						v-model="form.name"
						placeholder-class="tui-phcolor"
						class="tui-input"
						placeholder="请输入产品名称"
						maxlength="20"
						type="text"
					/>
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false"><view class="tui-title tui-top40">产品图片</view></tui-list-cell>
			<tui-list-cell :hover="false" :last="true">
				<view class="tui-upload-box">
					<view class="tui-upload-item" v-for="(item, index) in form.files" :key="index">
						<image :src="item.url" class="tui-upload-img" @tap="previewImage" mode="aspectFill" :id="item.url"></image>
						<view class="tui-upload-del">
							<tui-icon color="#ed3f14" :size="18" name="close-fill" :index="index" @click="deleteImage(item.id)"  v-if="type!=='detail'"></tui-icon>
						</view>
					</view>
					<view
						class="tui-upload-item tui-upload-add"
						v-if="form.files.length < 9 && type!=='detail'"
						hover-class="tui-opcity"
						:hover-stay-time="150"
						@tap="chooseImage"
					>
						<tui-icon name="plus"></tui-icon>
					</view>
				</view>
			</tui-list-cell>
			<view class="tui-btn-box">
				<button class="tui-button-primary" hover-class="tui-button-hover" formType="submit" type="primary" v-if="type !== 'detail'">提交</button>
			</view>
		</form>
	</view>
</template>
<script>
const form = require('@/components/common/tui-validation/tui-validation.js');
var { parseTime } = require('wx-tool');
import { mapState } from 'vuex';
export default {
	data() {
		return {
			form: {
				name: undefined,
				create_time: undefined,
				create_by: undefined,
				files: []
			},

			type: undefined,
			id: undefined
		};
	},
	computed: mapState(['nickName']),
	onLoad: function(params) {
		this.type = params.type;
		if (this.type==='detail' || this.type === 'edit') {
			this.id = params.id;
			this.getData(this.id);
		}
	},
	methods: {
		getData: function(id) {
			const db = wx.cloud.database({
				env: 'jnmc-ronxp'
			});
			db.collection('product')
				.doc(id)
				.get()
				.then(response => {
					const data = response.data;
					if (data) {
						this.form = {
							name: data.name,
							create_time: data.create_time,
							create_by: data.create_by,
							files: data.files
						};
					}
				});
		},
	
		formSubmit: function(e) {
			//表单规则
			let rules = [
				{
					name: 'name',
					rule: ['required', 'maxLength:20'],
					msg: ['请输入产品名称', '产品名称不能超过20个字']
				}
			];
			//进行表单检查
			let formData = e.detail.value;
			let checkRes = form.validation(formData, rules);
			if (!checkRes) {
				let db = wx.cloud.database({
					env: 'jnmc-ronxp'
				});
				
				if (this.type === 'edit') {
					db.collection('product')
						.doc(this.id)
						.update({
							data: this.form,
							success: res => {
								uni.showToast({
									title: '修改成功',
									icon: 'success',
									success: function() {
										setTimeout(function() {
											uni.switchTab({
												url: './index',
												success: function(e) {
													const page = getCurrentPages().pop();
													if (!page) return;
													page.onLoad();
												}
											});
										}, 1000);
									}
								});
							},
							fail: err => {
								console.log('修改成功', err);
							}
						});
				} else {
					this.form.create_time = parseTime(Date.parse(new Date()), '{y}-{m}-{d} {h}:{i}:{s}');
					this.form.create_by = this.nickName;
					db.collection('product').add({
						data: this.form,
						success: res => {
							uni.showToast({
								title: '添加成功',
								icon: 'success',
								success: function() {
									setTimeout(function() {
										uni.switchTab({
											url: './index',
											success: function(e) {
												const page = getCurrentPages().pop();
												if (!page) return;
												page.onLoad();
											}
										});
									}, 1000);
								}
							});
						},
						fail: err => {
							console.log('添加成功', err);
						}
					});
				}
			} else {
				uni.showToast({
					title: checkRes,
					icon: 'none'
				});
			}
		},
		chooseImage: function(e) {
			let that = this;
			if (that.form.files.length >= 9) {
				this.tui.toast('最多上传9张图片');
				return;
			}
			wx.chooseImage({
				count: 9 - that.form.files.length,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: function(res) {
					if (res.tempFilePaths) {
						let fileIDS = [];
						res.tempFilePaths.forEach(tempFilePath => {
							wx.cloud.uploadFile({
								cloudPath: 'product/' + new Date().getTime() + '-' + Math.floor(Math.random() * 1000),
								filePath: tempFilePath,
								success: response => {
									fileIDS.push(response.fileID);
									if (fileIDS.length == res.tempFilePaths.length) {
										wx.cloud.getTempFileURL({
											fileList: fileIDS,
											success: result => {
												if (result && result.fileList) {
													result.fileList.forEach(item => {
														that.form.files.push({ id: item.fileID, url: item.tempFileURL});
													});
												}
											},
											fail: err => {
												console.log(err);
											}
										});
									}
								},
								fail: err => {
									console.log(err);
								}
							});
						});
					}
				}
			});
		},
		previewImage: function(e) {
			uni.previewImage({
				current: e.currentTarget.id,
				urls: this.form.files.map(item => item.url)
			});
		},
		deleteImage: function(fileID) {
			wx.cloud.deleteFile({
				fileList: [fileID],
				success: res => {
					console.log(res);
					this.form.files.splice(this.form.files.findIndex(item => item.id === fileID), 1);
				},
				fail: err => {
					console.log(err);
				}
			});
		}
	}
};
</script>

<style>
@import '@/static/style/thorui.css';
.container {
	padding: 20rpx 0 50rpx 0;
}
.tui-line-cell {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}

.tui-title {
	line-height: 32rpx;
	min-width: 120rpx;
	flex-shrink: 0;
}

.tui-input {
	font-size: 32rpx;
	color: #333;
	padding-left: 20rpx;
	flex: 1;
}

.tui-btn-box {
	padding: 40rpx 50rpx;
	box-sizing: border-box;
}

.tui-upload-item {
	margin-right: 10px !important;
}
.tui-list-cell {
	padding: 10px 5px !important;
}
</style>
