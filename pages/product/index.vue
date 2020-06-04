<template>
	<view class="container">
		<view class="cu-card">
			<view class="cu-item bg-img shadow-blur" :style="[{backgroundImage:'url('+ ((item.files&&item.files.length>0)? item.files[0].url:'')+')'}]"
			 @tap="gotoDetail(item._id)" v-for="(item,index) in productList" :key="index" @longpress="showOperation(item._id)">
				<view class="cardTitle">
					{{item.name}}
				</view>
			</view>
		</view>
		<tui-no-data v-if="productList.length === 0" :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		<tui-fab :left="left" :right="right" :bottom="bottom" :bgColor="bgColor" :btnList="btnList" @click="gotoAddProduct"></tui-fab>
		<tui-modal :show="operationModal" @click="handleOperation" @cancel="hideOperation" content="请选择操作" :button="buttonList"></tui-modal>
	</view>
</template>

<script>
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
				buttonList: [{
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
			};
		},
		onLoad() {
			this.page = 1;
			this.productList = [];
			this.getData();

		},
		methods: {
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
						this.productList = response.data
						if (response.data.length < this.limit) {
							this.loadding = false;
							this.pullUpOn = false;
						} else {
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
				uni.navigateTo({
					url: '/pages/product/detail?type=add'
				});
			},
			showOperation: function(id) {
				this.operationModal = true;
				this.id = id;
			},
			hideOperation: function() {
				this.operationModal = false;
			},
			handleOperation: function(e) {
				let index = e.index;
				switch (index) {
					case 0:
						this.hideOperation();
						uni.navigateTo({
							url: '/pages/product/detail?type=edit&id=' + this.id
						});
						break;
					case 1:
						this.hideOperation();
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
								console.log(response.data)
								const fileIDS = response.data.files.map(item => item.id);
								if (fileIDS && fileIDS.length > 0) {
									wx.cloud.deleteFile({
										fileList: fileIDS,
										success: res => {
											console.log('删除产品图片结果：' + res);
										},
										fail: err => {
											console.log("删除产品图片结果："+err);
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
										console.log('删除产品失败:'+res);
									});
							}).catch(res => {
								console.log(res);
							});
					
						break;
					default:
						this.hideOperation();
						break;
				}
			},
		},
	}
</script>

<style>
	page {
		background: #ededed;
	}


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
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}

	.cardTitle::before {
		content: "";
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
		content: "";
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
