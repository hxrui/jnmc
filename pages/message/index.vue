<template>
	<view class="container">
		<view class="list-view" v-for="(item, index) in messageList" :key="index">
			<tui-card :image="item.img" :title="item.title" :tag="item.tag" @longclick="showDeleteMessageModal(item.id)">
				<template v-slot:body>
					<view class="tui-default">{{ item.message }}</view>
				</template>
				<template v-slot:footer>
					<view class="tui-default" v-if="item.is_urgent === true"><tui-tag style="display: inline-block;" padding="12rpx" type="light-orange">紧急</tui-tag></view>
				</template>
			</tui-card>
		</view>
		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->

		<tui-fab :left="left" :right="right" :bottom="bottom" :bgColor="bgColor" :btnList="btnList" @click="onClick"></tui-fab>
		<tui-modal :show="modal" @click="handleDeleteMessage" @cancel="hideDeleteMessageModal" title="提示" content="确定删除该留言吗？"></tui-modal>
	</view>
</template>

<script>
	
export default {
	data() {
		return {
			page: 1,
			limit: 10,
			messageList: [],
            // 悬浮按钮
			left: 0,
			right: 10,
			bottom: 60,
			bgColor: '#5677fc',
			btnList: [],

			loadding: false,
			pullUpOn: true,

			modal: false,

			id: undefined
		};
	},
	created() {
		this.loadData();
	},
	methods: {
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.loadData();
		},
		onClick(e) {
			uni.navigateTo({
				url: '/pages/message/add'
			});
		},
		loadData: function(e) {
			let that = this;
			const db = wx.cloud.database({
				env: 'jnmc-ronxp'
			});
			db.collection('message')
				.orderBy('create_time', 'desc')
				.skip((that.page - 1) * that.limit)
				.limit(that.limit)
				.get()
				.then(response => {
					for (let i = 0; i < response.data.length; i++) {
						let data = response.data[i];
						let message = new Object();
						message.id = data._id;
						message.img = {
							url: '/static/images/news/avatar_1.jpg'
						};
						message.title = {
							text: data.username
						};
						message.tag = {
							text: data.create_time
						};
						message.header = {
							bgcolor: '#F7F7F7',
							line: true
						};
						message.message = data.message;
						message.is_urgent = data.is_urgent;
						that.messageList.push(message);
					}

					if (response.data.length < that.limit) {
						that.loadding = false;
						that.pullUpOn = false;
					} else {
						that.page = that.page + 1;
					}
				});
		},
		hideDeleteMessageModal() {
			this.modal = false;
		},
		showDeleteMessageModal(id) {
			this.modal = true;
			this.id = id;
		},
		handleDeleteMessage: function(e) {
			let index = e.index;
			if (index === 0) {
				this.hideDeleteMessageModal();
			} else {
				const db = wx.cloud.database({
					env: 'jnmc-ronxp'
				});
				db.collection('message')
					.doc(this.id)
					.remove()
					.then(response => {
						console.log(response);
						if (response.stats.removed === 1) {
							this.tui.toast('删除留言成功');
							this.page = 1;
							this.messageList = [];
							this.loadData();
						}
					})
					.catch(res => {
						console.log(res);
					});
			}
			this.hideDeleteMessageModal();
		}
	}
};
</script>

<style>
page {
	background: #ededed;
}

.container {
	padding-bottom: env(safe-area-inset-bottom);
}

.list-view {
	padding: 40rpx 10rpx 0rpx 10rpx;
}

.tui-default {
	padding: 20rpx 30rpx;
}

</style>
