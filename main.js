import Vue from 'vue'
import App from './App'

import messages from './pages/message/index.vue'
Vue.component('messages',messages)

import orders from './pages/order/index.vue'
Vue.component('orders',orders)

import products from './pages/product/index.vue'
Vue.component('products',products)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
