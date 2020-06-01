<template>
	<view >
		<messages v-if="PageCur=='message'"></messages>
		<orders v-if="PageCur=='order'"></orders>
		<products v-if="PageCur=='product'"></products>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="message">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/message' + [PageCur=='message'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='message'?'text-green':'text-gray'">留言板</view>
			</view>
			<view class="action" @click="NavChange" data-cur="order">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/order' + [PageCur == 'order'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='order'?'text-green':'text-gray'">单号</view>
			</view>
			<view class="action" @click="NavChange" data-cur="product">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/product' + [PageCur == 'product'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='product'?'text-green':'text-gray'">产品展示</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="about">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/about' + [PageCur == 'about'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='about'?'text-green':'text-gray'">关于我们</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'message'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
