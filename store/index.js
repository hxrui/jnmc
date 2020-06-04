import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin: false,
		nickName: "",
		avatarUrl: ""
	},
	mutations: {
		setUserInfo(state, userinfo) {
			if (userinfo) {
				state.nickName = userinfo.nickName
				state.avatarUrl = userinfo.avatarUrl
			}
			state.isLogin = true
		},
		logout(state) {
			state.nickName = ""
			state.avatarUrl=""
			state.isLogin = false
		}
	},
	actions: {
	}
})

export default store
