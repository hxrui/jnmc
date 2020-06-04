<template>
	<view class="container">
		<view class="list-view" v-for="(item, index) in messageList" :key="index">
			<tui-card :image="item.img" :title="item.title" :tag="item.tag" @longtap="showDeleteMessageModal(item.id)">
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

		<tui-no-data v-if="messageList.length === 0" :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		<tui-fab :left="left" :right="right" :bottom="bottom" :bgColor="bgColor" :btnList="btnList" @click="gotoAddMessage"></tui-fab>
		<tui-modal :show="modal" @click="handleDeleteMessage" @cancel="hideDeleteMessageModal" title="提示" content="确定删除该留言吗？"></tui-modal>
		<tui-modal :show="noLoginModal" @click="gotoLogin" @cancel="hideNoLoginModal" content="您还未登录，请先登录" :button="loginButton" :maskClosable="true"></tui-modal>
	</view>
</template>

<script>
import { mapState } from 'vuex';
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

			// 上拉刷新
			loadding: false,
			pullUpOn: true, // true 可以继续下拉

			modal: false,
			id: undefined,
			noLoginModal: false,
			loginButton: [
				{
					text: '确定',
					type: 'red'
				}
			]
		};
	},
	computed: mapState(['isLogin']),
	onLoad() {
		this.page = 1;
		this.messageList = [];
		this.getData();
	},
	methods: {
		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.getData();
		},
		
		//页面相关事件处理函数--监听用户下拉动作
		onPullDownRefresh: function() {
			//延时为了看效果
			setTimeout(() => {
				this.pullUpOn = true;
				this.loadding = false;
				this.page = 1;
				this.messageList = [];
				this.getData();
				uni.stopPullDownRefresh();
				this.tui.toast("刷新成功");
			}, 200)
		},
		gotoAddMessage: function(e) {
			// 登录校验
			if (!this.isLogin) {
				this.showNoLoginModal();
			} else {
				uni.navigateTo({
					url: '/pages/message/add'
				});
			}
		},
		getData: function(e) {
			const db = wx.cloud.database({
				env: 'jnmc-ronxp'
			});
			db.collection('message')
				.orderBy('create_time', 'desc')
				.skip((this.page - 1) * this.limit)
				.limit(this.limit)
				.get()
				.then(response => {
					for (let i = 0; i < response.data.length; i++) {
						let data = response.data[i];
						let message = {};
						message.id = data._id;
						message.img = {
							url: data.avatar_url
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
						this.messageList.push(message);
					}
					if (response.data.length < this.limit) {
						this.loadding = false;
						this.pullUpOn = false;
					} else {
						this.pullUpOn = true;
						this.page = this.page + 1;
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
			this.hideDeleteMessageModal();
			if (!this.isLogin) {
				this.showNoLoginModal();
			} else {
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
							if (response.stats.removed === 1) {
								this.tui.toast('删除留言成功');
								this.page = 1;
								this.messageList = [];
								this.getData();
							}
						})
						.catch(res => {
							console.log(res);
						});
				}
			}
		},
		hideNoLoginModal: function() {
			this.noLoginModal = false;
		},
		showNoLoginModal: function() {
			this.noLoginModal = true;
		},
		gotoLogin: function() {
			uni.switchTab({
				url: '/pages/my/index'
			});
			this.hideNoLoginModal();
		}
	}
};
</script>

<style>
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
