import Vue from 'vue'
import App from './App'
// mpvue-router-patch 路由插件
import MpvueRouterPatch from 'mpvue-router-patch'
// 引入store vuex
import store from './store/index'

Vue.use(MpvueRouterPatch)
    // store挂载到全局
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    // 这是配置
    config: {
        "pages": [
            "pages/index/main",
            "pages/cart/main",
            "pages/category/main",
            "pages/my/main"
        ],
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#845f3f",
            "navigationBarTitleText": "有品",
            "navigationBarTextStyle": "white"
        },
        "tabBar": {
            "backgroundColor": "#fff",
            "borderStyle": "white",
            "selectedColor": "#845f3f",
            "color": "#845f3f",
            "list": [{
                    "pagePath": "pages/index/main",
                    "iconPath": "static/images/index.png",
                    "selectedIconPath": "static/images/index.png",
                    "text": "首页"
                },
                {
                    "pagePath": "pages/category/main",
                    "iconPath": "static/images/category.png",
                    "selectedIconPath": "static/images/category.png",
                    "text": "分类"
                },
                {
                    "pagePath": "pages/cart/main",
                    "iconPath": "static/images/cart.png",
                    "selectedIconPath": "static/images/cart.png",
                    "text": "购物车"
                },
                {
                    "pagePath": "pages/my/main",
                    "iconPath": "static/images/account.png",
                    "selectedIconPath": "static/images/account.png",
                    "text": "个人"
                }
            ]
        },
        "component": true
    }
}