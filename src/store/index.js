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
        ]
    },
    mutations: {

    }
})

export default store