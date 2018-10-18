import Vue from 'vue'
import App from './App'
// mpvue-router-patch 路由插件
import MpvueRouterPatch from 'mpvue-router-patch'
// 引入store vuex
import store from './store/index'
// 全局引入weui-wxss的样式表
import '../static/weui-wxss/style/weui.wxss'

// 使用Router
Vue.use(MpvueRouterPatch)

// store挂载到全局
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {

}