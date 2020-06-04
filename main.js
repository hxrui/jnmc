import Vue from 'vue'
import App from './App'
import store from './store'
import tui from './common/httpRequest'
Vue.config.productionTip = false

Vue.prototype.tui = tui
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()