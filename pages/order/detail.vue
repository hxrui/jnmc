<template>
	<view class="container">
		<form @submit="formSubmit">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">小区名称</view>
					<input
						name="community"
						v-model="form.community"
						placeholder-class="tui-phcolor"
						class="tui-input"
						placeholder="请输入小区名称"
						maxlength="50"
						type="text"
						:disabled="type === 'detail'"
					/>
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">户号</view>
					<input
						name="building"
						v-model="form.building"
						placeholder-class="tui-phcolor"
						class="tui-input"
						placeholder="请输入楼号"
						maxlength="10"
						type="text"
						:disabled="type === 'detail'"
					/>
					#
					<input
						name="unit"
						v-model="form.unit"
						placeholder-class="tui-phcolor"
						class="tui-input"
						placeholder="请输入单元"
						maxlength="10"
						type="text"
						:disabled="type === 'detail'"
					/>
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">联系人</view>
					<input
						name="contact"
						v-model="form.contact"
						placeholder-class="tui-phcolor"
						class="tui-input"
						placeholder="请输入联系人姓名"
						maxlength="50"
						type="text"
						:disabled="type === 'detail'"
					/>
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">电话号码</view>
					<input
						name="mobile"
						v-model="form.mobile"
						placeholder-class="tui-phcolor"
						class="tui-input"
						placeholder="请输入联系人电话号码"
						maxlength="50"
						type="text"
						:disabled="type === 'detail'"
					/>
					<tui-icon color="#00aa00" :size="18" name="voipphone" v-if="type === 'detail' && form.mobile !== ''" :index="index" @click="call"></tui-icon>
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">订金</view>
					<input
						name="deposit"
						v-model="form.deposit"
						placeholder-class="tui-phcolor"
						class="tui-input"
						placeholder="请输入金额,允许保留两位小数"
						maxlength="50"
						type="digit"
						:disabled="type === 'detail'"
					/>
					元
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title" style="min-width: 0;">状态</view>
					<radio-group class="radio-group" @change="statusChange">
						<label class="tui-radio" v-for="(item, index) in statusItems" :key="item.value">
							<radio :value="item.value" :checked="item.value === form.status ? true : item.checked" color="#5677fc" :disabled="type === 'detail'" />
							{{ item.name }}
						</label>
					</radio-group>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title" style="height: 50px;">备注</view>
					<textarea
						name="note"
						v-model="form.note"
						style="height: 50px;"
						class="tui-textarea"
						maxlength="500"
						placeholder-class="tui-phcolor-color"
						:disabled="type === 'detail'"
					/>
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false"><view class="tui-title tui-top40">订单图片</view></tui-list-cell>
			<tui-list-cell :hover="false" :last="true">
				<view class="tui-upload-box">
					<view class="tui-upload-item" v-for="(item, index) in form.files" :key="index">
						<image :src="item.url" class="tui-upload-img" @tap="previewImage" mode="aspectFill" :id="item.url"></image>
						<view class="tui-upload-del">
							<tui-icon color="#ed3f14" :size="18" name="close-fill" :index="index" @click="deleteImage(item.id)" v-if="type !== 'detail'"></tui-icon>
						</view>
					</view>
					<view
						class="tui-upload-item tui-upload-add"
						v-if="form.files.length < 9 && type !== 'detail'"
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
				community: undefined,
				building: undefined,
				unit: undefined,
				contact: undefined,
				mobile: undefined,
				deposit: undefined,
				status: 0,
				note: undefined,
				create_time: undefined,
				create_by: undefined,
				files: []
			},
			statusItems: [
				{
					name: '未开始',
					value: 0,
					checked: true
				},
				{
					name: '进行中',
					value: 1
				},
				{
					name: '完成未清帐',
					value: 2
				},
				{
					name: '已完成',
					value: 3
				}
			],

			type: undefined,
			id: undefined
		};
	},
	computed: mapState(['nickName', 'avatarUrl']),
	onLoad: function(params) {
		this.type = params.type;
		if (this.type === 'detail' || this.type === 'edit') {
			this.id = params.id;
			this.getData(this.id);
		}
	},
	methods: {
		getData: function(id) {
			const db = wx.cloud.database({
				env: 'jnmc-ronxp'
			});
			db.collection('order')
				.doc(id)
				.get()
				.then(response => {
					const data = response.data;
					if (data) {
						this.form = {
							community: data.community,
							building: data.building,
							unit: data.unit,
							contact: data.contact,
							mobile: data.mobile,
							deposit: data.deposit,
							status: data.status,
							note: data.note,
							create_time: data.create_time,
							create_by: data.create_by,
							files: data.files
						};
					}
				});
		},
		statusChange: function(e) {
			this.form.status = Number(e.target.value);
		},
		formSubmit: function(e) {
			//表单规则
			let rules = [
				{
					name: 'community',
					rule: ['required', 'maxLength:50'],
					msg: ['请输入小区名称', '小区名称不能超过50个字']
				},
				{
					name: 'building',
					rule: ['required', 'maxLength:10'],
					msg: ['请输入楼号', '楼号不能超过10个字']
				},
				{
					name: 'unit',
					rule: ['required', 'maxLength:10'],
					msg: ['请输入单元号', '单元号不能超过10个字']
				},
				{
					name: 'contact',
					rule: ['required', 'maxLength:50'],
					msg: ['请输入联系人姓名', '联系人姓名不能超过50个字']
				},
				{
					name: 'mobile',
					rule: ['required', 'maxLength:50'],
					msg: ['请输入联系人电话号码', '联系人电话号码不能超过50个字']
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
					console.log(this.form);
					db.collection('order')
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
					db.collection('order').add({
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
								cloudPath: 'order/' + new Date().getTime() + '-' + Math.floor(Math.random() * 1000),
								filePath: tempFilePath,
								success: response => {
									fileIDS.push(response.fileID);
									if (fileIDS.length == res.tempFilePaths.length) {
										wx.cloud.getTempFileURL({
											fileList: fileIDS,
											success: result => {
												if (result && result.fileList) {
													result.fileList.forEach(item => {
														that.form.files.push({ id: item.fileID, url: item.tempFileURL });
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
		},
		call: function() {
			uni.makePhoneCall({
				phoneNumber: this.form.mobile,
				success: res => {
					console.log('调用成功!');
				},
				fail: res => {
					console.log('调用失败!');
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

.radio-group {
	margin-left: -44px;
	transform: scale(0.7);
	transform-origin: 100% left;
	flex-shrink: 0;
}

.tui-radio {
	display: inline-block;
	padding-left: 28rpx;
	font-size: 36rpx;
	vertical-align: middle;
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
