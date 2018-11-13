module.exports = [{ // 第一个默认是首页
        path: 'pages/index/index',
        config: {
            navigationBarTitleText: '娜娜出品',
            "usingComponents": {
                "van-search": "../../static/vant-weapp/search/index",
                "van-button": "../../static/vant-weapp/button/index",
                "i-grid": "../../static/iview-weapp/grid/index",
                "i-grid-item": "../../static/iview-weapp/grid-item/index",
                "i-grid-icon": "../../static/iview-weapp/grid-icon/index",
                "i-grid-label": "../../static/iview-weapp/grid-label/index",
                "van-cell": "../../static/vant-weapp/cell/index",
                "van-cell-group": "../../static/vant-weapp/cell-group/index",
                "van-card": "../../static/vant-weapp/card/index"
            }
        }
    },
    {
        path: 'pages/cart/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
        config: { // 页面配置，即 page.json 的内容，可选
            navigationBarTitleText: '购物车',
            "usingComponents": {
                "van-stepper": "../../static/vant-weapp/stepper/index",
                "van-submit-bar": "../../static/vant-weapp/submit-bar/index"
            }
        }
    },
    {
        path: 'pages/category/index',
        config: {
            navigationBarTitleText: '分类',
            "usingComponents": {}
        }
    },
    {
        path: 'pages/my/index',
        config: {
            navigationBarTitleText: '个人',
            "usingComponents": {}
        }
    },
    {
        path: 'pages/search/index',
        config: {
            "usingComponents": {
                "van-search": "../../static/vant-weapp/search/index"
            }
        }
    },
    {
        path: 'pages/web/newProduct/index',
        config: {
            navigationBarTitleText: '新品推荐'
        }
    },
    {
        path: 'pages/web/crowdFunding/index',
        config: {
            navigationBarTitleText: '小米众筹'
        }
    },
    {
        path: 'pages/web/rushToBuy/index',
        config: {
            navigationBarTitleText: '限时抢购'
        }
    },
    {
        path: 'pages/web/starProduct/index',
        config: {
            navigationBarTitleText: '星品推荐'
        }
    },
    {
        path: 'pages/crowdfunding/index',
        config: {
            navigationBarTitleText: '小米众筹'
        }
    },
    {
        path: 'pages/searchList/index',
        config: {}
    },
    {
        path: 'pages/detail/index',
        config: {
            "usingComponents": {
                "van-icon": "../../static/vant-weapp/icon/index"
            }
        }
    }
]