<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">添加留言</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<textarea @input="handleInputMessage" style="height: 250rpx;" placeholder="请输入留言"></textarea>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">是否紧急</view>
				<switch @change="handleSwitchUrgent" :class="isUrgent?'checked':''" :checked="isUrgent?true:false"></switch>
			</view>

			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green margin-tb-sm lg" @click="handleSubmitMessage()">提交</button>
			</view>
		</form>

	</view>
</template>

<script>
	var {
		parseTime
	} = require('wx-tool')

	export default {
		data() {
			return {
				isUrgent: false,
				message: null,
			};
		},
		methods: {

			handleInputMessage(e) {
				this.message = e.detail.value
			},
			handleSwitchUrgent(e) {
				this.isUrgent = e.detail.value
			},
			handleSubmitMessage(e) {
				let db = wx.cloud.database({
					env: 'jnmc-ronxp'
				})

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
								setTimeout(function(){
									uni.navigateTo({
										url: '../index/index'
									})
								},1500)
							}
						});
					},
					fail: err => {
						console.log('留言失败', err)
					}
				})
			},
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
