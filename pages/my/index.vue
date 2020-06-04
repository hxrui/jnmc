<template>
	<view class="container">
		<view class="top-container">
			<image class="bg-img" src="/static/images/my/mine_bg_3x.png"></image>
			<view @tap="logout" class="logout" hover-class="opcity" :hover-stay-time="150">
				<image class="logout-img" src="/static/images/my/icon_out_3x.png" v-show="isLogin"></image>
				<text class="logout-txt" v-show="isLogin" @click="logoutAction">退出</text>
			</view> 
			<view v-show="!isLogin" class="user-wrapper">
				<navigator url="#" hover-class="opcity" :hover-stay-time="150" class="user">
					<image class="avatar-img" src="/static/images/my/mine_def_touxiang_3x.png"></image>
					<button open-type="getUserInfo" @getuserinfo="getUserInfo" class="user-login-button">授权登录</button>
				</navigator>
			</view>
			<view v-show="isLogin" class="user">
				<image class="avatar-img" :src="avatarUrl"></image>
				<view class="user-info-mobile">
					<text>{{ nickName }}</text>
				</view>
			</view>
		</view>
		
		<view class="bottom-container">
			<view class="ul-item">
				<view @tap="tapEvent" data-index="2" data-key="加油站" class="item" hover-class="opcity" :hover-stay-time="150">
					<image class="item-img" src="/static/images/my/mine_icon_jiayouzhan_3x.png"></image>
					<text class="item-name">加油站</text>
				</view>
				<view @tap="tapEvent" data-index="2" data-key="停车场" class="item" hover-class="opcity" :hover-stay-time="150">
					<image class="item-img" src="/static/images/my/mine_icon_tingche_3x.png"></image>
					<text class="item-name">停车场</text>
				</view>
				<view @tap="tapEvent" data-index="2" data-key="充电桩" class="item" hover-class="opcity" :hover-stay-time="150">
					<image class="item-img" src="/static/images/my/mine_icon_chongdian_3x.png"></image>
					<text class="item-name">充电桩</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState,mapMutations } from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed: mapState(['isLogin', 'nickName','avatarUrl']),
		methods: {
			
			...mapMutations(["setUserInfo","logout"]),
			tapEvent: function(e) {
				let index = e.currentTarget.dataset.index;
				let key = e.currentTarget.dataset.key;
				let url = '/pages/index/map?key=' + key;
				uni.navigateTo({
					url: url
				});
			},
			getUserInfo:function(e){
			    const userInfo = e.detail.userInfo
				this.setUserInfo({
					nickName:userInfo.nickName,
					avatarUrl:userInfo.avatarUrl
				});
			},
			logoutAction:function(e){
				this.tui.toast('退出成功');
				this.logout()
			}
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

.logout {
	width: 110rpx;
	height: 36rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 42rpx 0 24rpx 32rpx;
	position: relative;
	z-index: 2;
}

.logout-img {
	width: 36rpx;
	height: 36rpx;
	margin-right: 11rpx;
}

.logout-txt {
	font-size: 28rpx;
	color: #fefefe;
	line-height: 28rpx;
}

.user-wrapper {
	display: flex;
	justify-content: center;
	position: relative;
	z-index: 2;
}

.user {
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 2;
}

.avatar-img {
	width: 160rpx;
	height: 160rpx;
	border-radius: 50%;
	align-self: center;
}

.user-info {
	display: flex;
	flex-direction: row;
	margin-top: 30rpx;
	align-items: center;
}

.user-info-mobile {
	margin-top: 30rpx;
	position: relative;
	font-size: 28rpx;
	color: #fefefe;
	line-height: 28rpx;
	align-self: center;
	padding: 0 50rpx;
}
.user-login-button{
	background-color:transparent;
	color: #FFFFFF;
	font-size: 16px;
}
.edit-img {
	position: absolute;
	width: 42rpx;
	height: 42rpx;
	right: 0;
	bottom: -4rpx;
}

.edit-img > image {
	width: 42rpx;
	height: 42rpx;
	padding-left: 25rpx;
}

.bottom-container {
	height: 334rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 40rpx 74rpx 40rpx 95rpx;
	margin: 0 30rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	box-sizing: border-box;
	box-shadow: 0 0 10rpx #efefef;
}

.ul-item {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.item {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}

.item-img {
	width: 64rpx;
	height: 64rpx;
}

.item-name {
	padding-top: 13rpx;
	font-size: 24rpx;
	color: #666666;
	min-width: 80rpx;
	text-align: center;
}
</style>
