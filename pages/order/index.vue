<template>
	<view class="container">
		<tui-tabs :tabs="navbar" :currentTab="status > 3 ? 0 : status" @change="change" itemWidth="50%"></tui-tabs>
		<view v-if="status === 0">
			<tui-grid>
				<block v-for="(item, index) in orderList" :key="index">
					<tui-grid-item :cell="2" @click="gotoDetail(item._id)" @longpress="showOperation(item._id)">
						<text class="tui-grid-label">{{ item.community }}</text>
						<text class="tui-grid-label">{{ item.building }}#{{ item.unit }}</text>
					</tui-grid-item>
				</block>
			</tui-grid>
			<tui-no-data v-if="orderList.length === 0" :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		</view>
		<view v-if="status === 1">
			<tui-grid>
				<block v-for="(item, index) in orderList" :key="index">
					<tui-grid-item :cell="2" @click="gotoDetail(item._id)" @longpress="showOperation(item._id)">
						<text class="tui-grid-label">{{ item.community }}</text>
						<text class="tui-grid-label">{{ item.building }}#{{ item.unit }}</text>
					</tui-grid-item>
				</block>
			</tui-grid>
			<tui-no-data v-if="orderList.length === 0" :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		</view>
		<view v-if="status === 2">
			<tui-grid>
				<block v-for="(item, index) in orderList" :key="index">
					<tui-grid-item :cell="2" @click="gotoDetail(item._id)" @longpress="showOperation(item._id)">
						<text class="tui-grid-label">{{ item.community }}</text>
						<text class="tui-grid-label">{{ item.building }}#{{ item.unit }}</text>
					</tui-grid-item>
				</block>
			</tui-grid>
			<tui-no-data v-if="orderList.length === 0" :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		</view>
		<view v-if="status === 3">
			<tui-grid>
				<block v-for="(item, index) in orderList" :key="index">
					<tui-grid-item :cell="2" @click="gotoDetail(item._id)" @longpress="showOperation(item._id)">
						<text class="tui-grid-label">{{ item.community }}</text>
						<text class="tui-grid-label">{{ item.building }}#{{ item.unit }}</text>
					</tui-grid-item>
				</block>
			</tui-grid>
			<tui-no-data v-if="orderList.length === 0" :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		</view>

		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->

		<tui-fab :left="left" :right="right" :bottom="bottom" :bgColor="bgColor" :btnList="btnList" @click="onClick"></tui-fab>
		<tui-modal :show="operationModal" @click="handleOperation" @cancel="hideOperation" content="请选择操作" :button="buttonList"></tui-modal>
		<tui-modal :show="noLoginModal" @click="gotoLogin" @cancel="hideNoLoginModal" content="您还未登录，请先登录" :button="loginButton" :maskClosable="true"></tui-modal>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			status: 0,
			navbar: [
				{
					name: '未开始'
				},
				{
					name: '进行中'
				},
				{
					name: '完成未清账'
				},
				{
					name: '已完成'
				}
			],
			// 悬浮按钮
			left: 0,
			right: 10,
			bottom: 60,
			bgColor: '#5677fc',
			btnList: [
				{
					bgColor: '#64B532',
					text: '添加',
					fontSize: 28,
					color: '#fff'
				},
				{
					bgColor: '#16C2C2',
					text: '补单',
					fontSize: 28,
					color: '#fff'
				}
			],
			orderList: [],
			page: 1,
			limit: 20,
			operationModal: false,
			buttonList: [
				{
					text: '修改',
					type: 'green',
					plain: true
				},
				{
					text: '删除',
					type: 'red',
					plain: true
				},
				{
					text: '取消',
					plain: true
				}
			],
			id: undefined,
			loadding: false,
			pullUpOn: true,
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
		this.orderList = [];
		this.getData();
	},
	methods: {
		//页面相关事件处理函数--监听用户下拉动作
		onPullDownRefresh: function() {
			//延时为了看效果
			setTimeout(() => {
				this.pullUpOn = true;
				this.loadding = false;
				this.page = 1;
				this.orderList = [];
				this.getData();
				uni.stopPullDownRefresh();
				this.tui.toast('刷新成功');
			}, 200);
		},
		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.getData();
		},
		showOperation: function(id) {
			this.operationModal = true;
			this.id = id;
		},
		hideOperation: function() {
			this.operationModal = false;
		},
		handleOperation: function(e) {
			this.hideOperation();
			if (!this.isLogin) {
				this.showNoLoginModal();
			} else {
				let index = e.index;
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '/pages/order/detail?type=edit&id=' + this.id
						});
						break;
					case 1:
						const db = wx.cloud.database({
							env: 'jnmc-ronxp'
						});
						// 删除订单图片
						db.collection('order')
							.doc(this.id)
							.field({
								files: true
							})
							.get()
							.then(response => {
								const fileIDS = response.data.files.map(item => item.id);
								if (fileIDS && fileIDS.length > 0) {
									wx.cloud.deleteFile({
										fileList: fileIDS,
										success: res => {
											console.log('删除订单图片结果：' + res);
										},
										fail: err => {
											console.log(err);
										}
									});
								}
								// 删除订单
								db.collection('order')
									.doc(this.id)
									.remove()
									.then(response => {
										if (response.stats.removed > 0) {
											this.tui.toast('删除订单成功');

											this.page = 1;
											this.orderList = [];
											this.getData();
										} else {
											this.tui.toast('删除订单失败');
										}
									})
									.catch(res => {
										console.log(res);
									});
							})
							.catch(res => {
								console.log(res);
							});

						break;
					default:
						break;
				}
			}
		},
		getData: function() {
			const db = wx.cloud.database({
				env: 'jnmc-ronxp'
			});
			db.collection('order')
				.field({
					community: true,
					building: true,
					unit: true
				})
				.where({
					status: this.status
				})
				.orderBy('create_time', 'desc')
				.skip((this.page - 1) * this.limit)
				.limit(this.limit)
				.get()
				.then(response => {
					this.orderList = response.data;

					if (response.data.length < this.limit) {
						this.loadding = false;
						this.pullUpOn = false;
					} else {
						this.pullUpOn = true;
						this.page = this.page + 1;
					}
				});
		},
		change(e) {
			this.status = e.index;
			this.page = 1;
			this.orderList = [];
			this.getData();
		},
		gotoDetail: function(id) {
			uni.navigateTo({
				url: '/pages/order/detail?type=detail&id=' + id
			});
		},
		onClick(e) {
			// 登录校验
			if (!this.isLogin) {
				this.showNoLoginModal();
			} else {
				let index = e.index;
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '/pages/order/detail?type=add'
						});
						break;
					case 1:
						uni.navigateTo({
							url: '/pages/order/detail?type=fill'
						});
						break;
					default:
						break;
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
	padding: 0 0 120rpx 0;
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
