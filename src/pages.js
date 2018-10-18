module.exports = [{ // 第一个默认是首页
        path: 'pages/index/index',
        config: {
            navigationBarTitleText: '首页',
            "usingComponents": {
                "van-search": "../../static/vant-weapp/search/index",
                "van-button": "../../static/vant-weapp/button/index",
                "i-grid": "../../static/iview-weapp/grid/index",
                "i-grid-item": "../../static/iview-weapp/grid-item/index",
                "i-grid-icon": "../../static/iview-weapp/grid-icon/index",
                "i-grid-label": "../../static/iview-weapp/grid-label/index",
                "van-cell": "../../static/vant-weapp/cell/index",
                "van-cell-group": "../../static/vant-weapp/cell-group/index"
            }
        }
    },
    {
        path: 'pages/cart/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
        config: { // 页面配置，即 page.json 的内容，可选
            navigationBarTitleText: '购物车',
            enablePullDownRefresh: true
        }
    },
    {
        path: 'pages/category/index',
        config: {
            navigationBarTitleText: '分类',
            enablePullDownRefresh: true,
            "usingComponents": {
                "van-search": "../../static/vant-weapp/search/index"
            }
        }
    },
    {
        path: 'pages/my/index',
        config: {
            navigationBarTitleText: '我的'
        }
    }
]