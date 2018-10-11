import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        "usingComponents": {
            "van-search": "vant-weapp/dist/search/index"
        }
    }
}