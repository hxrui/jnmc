<template>
	<view class="container">
		<form @submit="formSubmit" @reset="formReset">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-textarea-box">
						<textarea v-model="message" class="tui-textarea" name="message" placeholder="请输入留言" maxlength="500" placeholder-class="tui-phcolor-color" />
					</view>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">是否紧急</view>
					<switch @change="handleSwitchUrgent" :class="isUrgent ? 'checked' : ''" :checked="isUrgent ? true : false"></switch>
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
			message: undefined
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
		}
	}
};
</script>

<style>
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
		margin-left: auto;
		transform: scale(0.8);
		transform-origin: 100% center;
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
