import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store
import {
	base
} from './static/js/base.js'

Vue.config.productionTip = false

 
import v_button from './vant/button/index.vue'
Vue.component('v_button',v_button)



App.mpType = 'app'
Vue.use(base)
const app = new Vue({
	store,
	...App
})
app.$mount()
