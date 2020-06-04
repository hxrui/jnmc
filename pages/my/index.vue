<template>
	<view class="container">
		<view class="top-container">
			<image class="bg-img" src="/static/images/my/mine_bg_3x.png"></image>
			<view @tap="logout" class="logout" hover-class="opcity" :hover-stay-time="150">
				<image class="logout-img" src="/static/images/my/icon_out_3x.png" v-show="isLogin"></image>
				<text class="logout-txt" v-show="isLogin">退出</text>
			</view> 
			<view v-show="!isLogin" class="user-wrapper">
				<navigator url="/pages/common/login/login" hover-class="opcity" :hover-stay-time="150" class="user">
					<image class="avatar-img" src="/static/images/my/mine_def_touxiang_3x.png"></image>
					<text class="user-info-mobile">请登录</text>
				</navigator>
			</view>
			<view v-show="isLogin" class="user">
				<image class="avatar-img" src="/static/images/my/mine_def_touxiang_3x.png"></image>
				<view class="user-info-mobile">
					<text>{{ mobile }}</text>
					<view class="edit-img" hover-class="opcity" :hover-stay-time="150" @tap="edit"><image src="/static/images/my/mine_icon_bianji_3x.png"></image></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.container {
	position: relative;
	padding-bottom: 100rpx;
}

.top-container {
	height: 440rpx;
	position: relative;
	display: flex;
	flex-direction: column;
}

.bg-img {
	position: absolute;
	width: 100%;
	height: 440rpx;
}
</style>
