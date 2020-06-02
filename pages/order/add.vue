<template>
	<view class="container">
		<form @submit="formSubmit" @reset="formReset">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">小区名称</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="community" placeholder="请输入小区名称" maxlength="50" type="text" />
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">户号</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="building" placeholder="请输入楼号" maxlength="50" type="text" />
					#
					<input placeholder-class="tui-phcolor" class="tui-input" name="unit" placeholder="请输入单元" maxlength="50" type="text" />
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">联系人</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="contact_man" placeholder="请输入联系人姓名" maxlength="50" type="text" />
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">手机号</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="mobile" placeholder="请输入手机号" maxlength="50" type="text" />
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">订金</view>
					<input placeholder-class="tui-phcolor" class="tui-input" v-model="status" name="deposit" placeholder="请输入金额,允许保留两位小数" maxlength="50"
					 type="digit" />
					元
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title" style="min-width: 0;">状态</view>
					<radio-group class="radio-group" v-model="status" name="status">
						<label class="tui-radio">
							<radio :value="1" color="#5677fc" />进行中
						</label>
						<label class="tui-radio">
							<radio :value="2" color="#5677fc" />完成未清账
						</label>
						<label class="tui-radio">
							<radio :value="3" color="#5677fc" />已完成
						</label>
					</radio-group>
				</view>
			</tui-list-cell>

			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title" style="height: 50px;">备注说明</view>
					<textarea style="height: 50px;" class="tui-textarea" name="message" maxlength="500" placeholder-class="tui-phcolor-color" />

					</view>
			</tui-list-cell>
			<tui-list-cell :hover="false"><view class="tui-title tui-top40">图片上传</view></tui-list-cell>
			
			<tui-list-cell :hover="false" :last="true">
			<view class="tui-upload-box">
				<view class="tui-upload-item" v-for="(item, index) in files" :key="index">
					<image :src="item" class="tui-upload-img" @tap="previewImage" mode="aspectFill" :id="item"></image>
					<view class="tui-upload-del"><tui-icon color="#ed3f14" :size="18" name="close-fill" :index="index" @click="deleteImage"></tui-icon></view>
				</view>
				<view class="tui-upload-item tui-upload-add" v-if="files.length < 9" hover-class="tui-opcity" :hover-stay-time="150" @tap="chooseImage">
					<tui-icon name="plus"></tui-icon>
				</view>
			</view>
			</tui-list-cell>

			<view class="tui-btn-box"><button class="tui-button-primary" hover-class="tui-button-hover" formType="submit" type="primary">提交</button></view>
		</form>
	</view>
</template>
<script>
const form = require('@/components/common/tui-validation/tui-validation.js');
var { parseTime } = require('wx-tool');

export default {
	data() {
		return {
			isUrgent: false,
			message: undefined,
			files: [],
			status:1,
			form:{
				status:1,
				deposit:999
			}
		};
	},
	methods: {
		formSubmit: function(e) {
			//表单规则
			let rules = [
				{
					name: 'message',
					rule: ['required', 'maxLength:500'],
					msg: ['请输入留言', '留言不能超过500个字']
				}
			];
			//进行表单检查
			let formData = e.detail.value;
			let checkRes = form.validation(formData, rules);
			if (!checkRes) {
				let db = wx.cloud.database({
					env: 'jnmc-ronxp'
				});

				db.collection('message').add({
					data: {
						message: this.message,
						is_urgent: this.isUrgent,
						create_time: parseTime(Date.parse(new Date()), '{y}-{m}-{d} {h}:{i}'),
						username: '天道酬勤'
					},
					success: res => {
						uni.showToast({
							title: '留言成功',
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
						console.log('留言失败', err);
					}
				});
			} else {
				uni.showToast({
					title: checkRes,
					icon: 'none'
				});
			}
		},
		handleSwitchUrgent(e) {
			this.isUrgent = e.detail.value;
		},
		chooseImage: function(e) {
			let that = this;
			if (that.files.length >= 9) {
				this.tui.toast('最多上传9张图片');
				return;
			}
			wx.chooseImage({
				count: 9 - that.files.length,
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
					that.files = that.files.concat(res.tempFilePaths);
					//上传功能已去除
					//...
				}
			});
		},
		previewImage: function(e) {
			uni.previewImage({
				current: e.currentTarget.id, // 当前显示图片的http链接
				urls: this.files // 需要预览的图片http链接列表
			});
		},
		deleteImage: function(e) {
			const index = e.index;
			this.files.splice(index, 1);
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
	margin-left: 0;
	transform: scale(0.8);
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
</style>
