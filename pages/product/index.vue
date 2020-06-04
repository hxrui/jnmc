<template>
	<view class="container">
		<view class="cu-card">
			<view
				class="cu-item bg-img shadow-blur"
				:style="[{ backgroundImage: 'url(' + (item.files && item.files.length > 0 ? item.files[0].url : '') + ')' }]"
				@tap="gotoDetail(item._id)"
				v-for="(item, index) in productList"
				:key="index"
				@longpress="showOperation(item._id)"
			>
				<view class="cardTitle">{{ item.name }}</view>
			</view>
		</view>

		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->

		<tui-no-data v-if="productList.length === 0" :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		<tui-fab :left="left" :right="right" :bottom="bottom" :bgColor="bgColor" :btnList="btnList" @click="gotoAddProduct"></tui-fab>
		<tui-modal :show="operationModal" @click="handleOperation" @cancel="hideOperation" content="请选择操作" :button="buttonList"></tui-modal>
		<tui-modal :show="noLoginModal" @click="gotoLogin" @cancel="hideNoLoginModal" content="您还未登录，请先登录" :button="loginButton" :maskClosable="true"></tui-modal>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			// 悬浮按钮
			left: 0,
			right: 10,
			bottom: 60,
			bgColor: '#5677fc',
			btnList: [],
			// 分页数据
			page: 1,
			limit: 10,
			productList: [],
			loadding: false,
			pullUpOn: true,
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
		this.productList = [];
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
				this.productList = [];
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
		getData: function() {
			const db = wx.cloud.database({
				env: 'jnmc-ronxp'
			});
			db.collection('product')
				.orderBy('create_time', 'desc')
				.skip((this.page - 1) * this.limit)
				.limit(this.limit)
				.get()
				.then(response => {
					this.productList = response.data;
					if (response.data.length < this.limit) {
						this.loadding = false;
						this.pullUpOn = false;
					} else {
						this.pullUpOn = true;
						this.page = this.page + 1;
					}
				});
		},
		gotoDetail: function(id) {
			uni.navigateTo({
				url: '/pages/product/detail?type=detail&id=' + id
			});
		},
		gotoAddProduct: function() {
			// 登录校验
			if (!this.isLogin) {
				this.showNoLoginModal();
			} else {
				uni.navigateTo({
					url: '/pages/product/detail?type=add'
				});
			}
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
			// 登录校验
			if (!this.isLogin) {
				this.showNoLoginModal();
			} else {
				let index = e.index;
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '/pages/product/detail?type=edit&id=' + this.id
						});
						break;
					case 1:
						const db = wx.cloud.database({
							env: 'jnmc-ronxp'
						});
						// 删除产品图片
						db.collection('product')
							.doc(this.id)
							.field({
								files: true
							})
							.get()
							.then(response => {
								console.log(response.data);
								const fileIDS = response.data.files.map(item => item.id);
								if (fileIDS && fileIDS.length > 0) {
									wx.cloud.deleteFile({
										fileList: fileIDS,
										success: res => {
											console.log('删除产品图片结果：' + res);
										},
										fail: err => {
											console.log('删除产品图片结果：' + err);
										}
									});
								}
								// 删除产品
								db.collection('product')
									.doc(this.id)
									.remove()
									.then(response => {
										if (response.stats.removed > 0) {
											this.tui.toast('删除产品成功');

											this.page = 1;
											this.productList = [];
											this.getData();
										} else {
											this.tui.toast('删除产品失败');
										}
									})
									.catch(res => {
										console.log('删除产品失败:' + res);
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

.cu-item {
	margin: 10px;
	background-size: 100% 100%;
	border-radius: 6px;
}

.cardTitle {
	color: #fff;
	padding: 90upx 60upx;
	font-size: 40upx;
	font-weight: 300;
	transform: skew(-10deg, 0deg);
	position: relative;
	text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3);
}

.cardTitle::before {
	content: '';
	position: absolute;
	width: 60upx;
	height: 6upx;
	border-radius: 20upx;
	background-color: #fff;
	display: block;
	top: 60upx;
	left: 50upx;
	transform: skew(10deg, 0deg);
}

.cardTitle::after {
	content: '';
	position: absolute;
	width: 140upx;
	border-radius: 6upx;
	height: 24upx;
	background-color: #fff;
	display: block;
	bottom: 76upx;
	left: 90upx;
	transform: skew(10deg, 0deg);
	opacity: 0.1;
}
</style>
