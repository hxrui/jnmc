<template name="messages">
	<view>
		<scroll-view scroll-y class="page" @scrolltolower="loadMore">
			<cu-custom bgColor="bg-gradual-pink">
				<block slot="content">留言板</block>
			</cu-custom>
			<view class="grid col-1 bg-white padding-sm">
				<view class="padding-sm" v-for="(item,index) in messageList" :key="index">
					<view class="padding radius text-left light" :class="'bg-' +getColor(index)">
						<view v-if="item.is_urgent==true">
							<view class="cu-tag bg-red sm round">紧急</view>
						</view>
						<view class="padding-sm text-lg">{{item.message}}</view>
						<view class="flex">
							<view class="flex-sub padding-sm radius">{{item.create_time}}</view>
							<view class="flex-sub padding-sm radius text-right">{{item.username}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>

		</scroll-view>

		<view class="action add-action">
			<button class="cu-btn cuIcon-add bg-green shadow" @tap="openMessage"></button>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: false,
				colorList: this.ColorList,
				messageList: [],
				CustomBar: this.CustomBar,
				windowHeight: this.windowHeight,
				page: 1,
				limit: 10
			};
		},
		created() {
			this.initPage()
		},
		methods: {
			initPage() {
				this.loadMore()
			},
			openMessage(e) {
				uni.navigateTo({
					url: '/pages/message/add'
				});
			},
			getColor(index) {
				if (this.colorList != null && this.colorList.length > 0) {
					let i = index % (this.colorList.length-1)
					return this.colorList[i].name
				}
				return ""
			},
			loadMore: function(e) {
				let that = this
				let db = wx.cloud.database({
					env: 'jnmc-ronxp'
				})
				db.collection('message').count({
					success: function(countResult) {
						console.log(that.page)
						db.collection('message').orderBy('create_time', 'desc').skip((that.page - 1) * that.limit).limit(that.limit).get()
							.then(response => {
								that.page = that.page + 1
								console.log(response.data)
								for (let i = 0; i < response.data.length; i++) {
									that.messageList.push(response.data[i])
								}
							})
					}
				})

				console.log("loadMore")
			},
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.add-action [class*="cuIcon-"] {
		position: absolute;
		bottom: 60px;
		right: 20px;
		border-radius: 50%;
		width: 70upx;
		line-height: 70upx;
		font-size: 50upx;

	}
</style>
