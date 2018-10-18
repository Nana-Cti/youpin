import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        searchValue: "",
        banner: [
            { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_89009533dcb446de41228f3d6ef765d4.jpeg" },
            { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_b4b07b19fbde64ec2dc53243ecc1a01f.jpeg" },
            { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_1ca5e3c787b17e97a33819b48bb774ad.jpeg" }
        ],
        gridIcon: [
            { imageUrl: "https://img.youpin.mi-img.com/800_pic/b1111ef97c047ad8065317e4c53804d9.png", grid: "小米众筹" },
            { imageUrl: "https://img.youpin.mi-img.com/800_pic/5bea658c60e445de7de51d14e32d37b3.png", grid: "每日新品" },
            { imageUrl: "http://img.youpin.mi-img.com/800_pic/521_1sb6fnakz3n9j.png", grid: "限时抢购" },
            { imageUrl: "https://img.youpin.mi-img.com/800_pic/3f480392916545cea05cdf89a4da4539.png", grid: "星品驾到" },
            { imageUrl: "http://img.youpin.mi-img.com/800_pic/840_3m8foovc4dbj6.png", grid: "运动健身" }
        ],
        zclist: {
            imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_cade62d2fcfa3e77297e60c93f686851.jpeg&w=1080&h=501",
            tit: "圈厨多功能料理锅",
            desc: "复古高颜值，双盘多用途，热源一体盘，分离全身洗",
            price: "￥379",
            crowdfundingInfo: {
                molecule: "1541",
                Denominator: "1000"
            }
        }
    },
    mutations: {

    }
})

export default store