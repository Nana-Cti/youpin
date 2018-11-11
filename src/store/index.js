import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    state: {
        cartLIst: [{
                imageUrl: "http://img.youpin.mi-img.com/800_pic/100864_24h0j4t2tjf78.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                tit: "8H乳胶床垫M1 玫瑰金 1.2x2m",
                price: 699,
                num: 1
            },
            {
                imageUrl: "http://img.youpin.mi-img.com/800_pic/100864_24h0j4t2tjf78.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                tit: "8H乳胶床垫M1 玫瑰金 1.2x2m",
                price: 699,
                num: 1
            }
        ]
    },
    mutations: {
        changeTheNumber(state, numIndex) {
            Vue.set(state.cartLIst[numIndex.index], "num", numIndex.num)
        },
        deletingGoods(state, deleteList) {
            for (let index = state.cartLIst.length - 1; index >= 0; index--) {
                if (deleteList[index]) {
                    state.cartLIst.splice(index, 1)
                }
            }
        }
    }
}
const moduleB = {
    state: {
        searchValue: ""
    },
    mutations: {
        changeSearchValue(state, searchValue) {
            state.searchValue = searchValue
        }
    }
}

const store = new Vuex.Store({
    state: {
        signatureID: "",
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
        },
        indexlist: [{
                imageUrl: "https://img.youpin.mi-img.com/800_pic/f7ab44b2ee63d5ccde9e3e8d0a5619c8.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                tit: "石头扫地机器人",
                desc: "米家扫地机器人团队出品！ 传感器升级！长续航，智能规划，扫拖一体，清扫性能更强！",
                price: "2399",
                priceMarket: "￥2499"
            },
            {
                imageUrl: "https://img.youpin.mi-img.com/800_pic/f7ab44b2ee63d5ccde9e3e8d0a5619c8.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                tit: "石头扫地机器人",
                desc: "米家扫地机器人团队出品！ 传感器升级！长续航，智能规划，扫拖一体，清扫性能更强！",
                price: "2399",
                priceMarket: "￥2499"
            },
            {
                imageUrl: "https://img.youpin.mi-img.com/800_pic/f7ab44b2ee63d5ccde9e3e8d0a5619c8.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                tit: "石头扫地机器人",
                desc: "米家扫地机器人团队出品！ 传感器升级！长续航，智能规划，扫拖一体，清扫性能更强！",
                price: "2399",
                priceMarket: "￥2499"
            }
        ],
        leftMenuList: ["有品推荐", "家居家纺", "家用电器", "有品推荐", "家居家纺", "家用电器", "有品推荐", "家居家纺", "家用电器", "有品推荐", "家居家纺", "家用电器", "有品推荐", "家居家纺", "家用电器"],
        goodsScrollView: [{
                imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_98badfe78d2c79e7852337d48017896d.jpeg&w=786&h=395",
                gridlist: [
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_bf9fa66a29e7f576cb62e20965f5637b.jpeg&w=480&h=480", text: "每日上新" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_5a1df07b1e6b38866272697791fda47d.jpeg&w=480&h=480", text: "小米自营" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_5a1df07b1e6b38866272697791fda47d.jpeg&w=480&h=480", text: "小米自营" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_228ac7cec833918d963b4206dfbffe21.jpeg&w=480&h=480", text: "开学必备" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_bf9fa66a29e7f576cb62e20965f5637b.jpeg&w=480&h=480", text: "每日上新" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_bf9fa66a29e7f576cb62e20965f5637b.jpeg&w=480&h=480", text: "每日上新" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_5a1df07b1e6b38866272697791fda47d.jpeg&w=480&h=480", text: "小米自营" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_228ac7cec833918d963b4206dfbffe21.jpeg&w=480&h=480", text: "开学必备" }
                ]
            },
            {
                imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_98badfe78d2c79e7852337d48017896d.jpeg&w=786&h=395",
                gridlist: [
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_bf9fa66a29e7f576cb62e20965f5637b.jpeg&w=480&h=480", text: "每日上新" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_5a1df07b1e6b38866272697791fda47d.jpeg&w=480&h=480", text: "小米自营" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_5a1df07b1e6b38866272697791fda47d.jpeg&w=480&h=480", text: "小米自营" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_228ac7cec833918d963b4206dfbffe21.jpeg&w=480&h=480", text: "开学必备" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_bf9fa66a29e7f576cb62e20965f5637b.jpeg&w=480&h=480", text: "每日上新" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_bf9fa66a29e7f576cb62e20965f5637b.jpeg&w=480&h=480", text: "每日上新" },
                    { imageUrl: "https://shop.io.mi-img.com/app/shop/img?id=shop_5a1df07b1e6b38866272697791fda47d.jpeg&w=480&h=480", text: "小米自营" }
                ]
            }
        ],
        recommendList: [{
                imageUrl: "http://img.youpin.mi-img.com/800_pic/100864_24h0j4t2tjf78.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                desc: "感应出泡，高效除菌，亲肤滋润",
                tit: "泡沫洗手机 感应式",
                price: "99"
            },
            {
                imageUrl: "http://img.youpin.mi-img.com/800_pic/100864_24h0j4t2tjf78.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                desc: "感应出泡，高效除菌，亲肤滋润",
                tit: "泡沫洗手机 感应式",
                price: "99"
            },
            {
                imageUrl: "http://img.youpin.mi-img.com/800_pic/100864_24h0j4t2tjf78.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                desc: "感应出泡，高效除菌，亲肤滋润",
                tit: "泡沫洗手机 感应式",
                price: "99"
            },
            {
                imageUrl: "http://img.youpin.mi-img.com/800_pic/100864_24h0j4t2tjf78.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                desc: "感应出泡，高效除菌，亲肤滋润",
                tit: "泡沫洗手机 感应式",
                price: "99"
            },
            {
                imageUrl: "http://img.youpin.mi-img.com/800_pic/100864_24h0j4t2tjf78.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF",
                desc: "感应出泡，高效除菌，亲肤滋润",
                tit: "泡沫洗手机 感应式",
                price: "99"
            }
        ]
    },
    mutations: {
        setID(state, id) {
            state.signatureID = id
        }
    },
    getters: {},
    modules: {
        cart: moduleA,
        search: moduleB
    }
})

export default store