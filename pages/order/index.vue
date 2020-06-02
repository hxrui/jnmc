<template>
	<view class="container">
		<tui-tabs :tabs="navbar" :currentTab="currentTab > 1 ? 0 : currentTab" @change="change" itemWidth="50%"></tui-tabs>
		<view v-if="currentTab === 0">
			<tui-grid>
				<block v-for="(item, index) in dataList" :key="index">
					<tui-grid-item :cell="2" @click="detail">
						<text class="tui-grid-label">{{ item.community }}</text>
						<text class="tui-grid-label">{{ item.room_no}}</text>
					</tui-grid-item>
				</block>
			</tui-grid>
		</view>
		<view v-if="currentTab === 1">2</view>

		<tui-fab :left="left" :right="right" :bottom="bottom" :bgColor="bgColor" :btnList="btnList" @click="onClick"></tui-fab>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentTab: 0,
			navbar: [
				{
					name: '进行中'
				},
				{
					name: '已完成'
				}
			],
			dataList: [
				{
					community:'海桐苑',
					room_no: '6#301',
					size: 30
				},
				{
					community:'海桐苑',
					room_no: '6#301',
					size: 30
				},
				{
					community:'海桐苑',
					room_no: '6#301',
					size: 30
				},
				{
					community:'海桐苑',
					room_no: '6#301',
					size: 30
				},
				{
					community:'海桐苑',
					room_no: '6#301',
					size: 30
				},
				{
					community:'海桐苑',
					room_no: '6#301',
					size: 30
				},
			],
			// 悬浮按钮
			left: 0,
			right: 10,
			bottom: 60,
			bgColor: '#5677fc',
			btnList: []
		};
	},
	methods: {
		change(e) {
			this.currentTab = e.index;
		},
		detail: function(e) {
			this.tui.toast('click~');
		},
		onClick(e) {
			uni.navigateTo({
				url: '/pages/order/add'
			});
		},
		
	}
};
</script>

<style>
.container {
	padding: 40rpx 0 120rpx 0;
	box-sizing: border-box;
}

.header {
	padding: 80rpx 90rpx 60rpx 90rpx;
	box-sizing: border-box;
}

.title {
	font-size: 34rpx;
	color: #333;
	font-weight: 500;
}

.sub-title {
	font-size: 24rpx;
	color: #7a7a7a;
	padding-top: 18rpx;
}

.tui-primary {
	color: #5677fc;
}

.tui-mtop {
	margin-top: 80rpx;
}

.tui-title {
	padding: 50rpx 30rpx 30rpx 30rpx;
	font-size: 32rpx;
	color: #333;
	box-sizing: border-box;
	font-weight: bold;
	clear: both;
}

.tui-grid-icon {
	width: 64rpx;
	height: 64rpx;
	margin: 0 auto;
	text-align: center;
	vertical-align: middle;
}
.tui-grid-label {
	display: block;
	text-align: center;
	font-weight: 400;
	color: #333;
	font-size: 28rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 10rpx;
}
</style>
