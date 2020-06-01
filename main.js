import Vue from 'vue'
import App from './App'
import tui from './common/httpRequest'
Vue.config.productionTip = false
// #ifdef H5
window.QQmap = null;
// #endif
// #ifndef MP-TOUTIAO
//网络监听
setTimeout(() => {
	uni.onNetworkStatusChange(function(res) {
		//console.log(res.networkType);
		
	});
}, 100)
// #endif

Vue.prototype.tui = tui
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()