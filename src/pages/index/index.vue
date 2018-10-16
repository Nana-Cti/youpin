<template>
  <div>
    <van-search background="#845f3f" :value="searchValue" placeholder="九九重阳节 限时特惠" />
    <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" duration="800" circular="true">
      <block v-for="(item, index) in banner " :key="index">
        <swiper-item>
          <image :src="item.imageUrl" class="swiper-image"/>
        </swiper-item>
      </block>
    </swiper>
    
    <van-button type="primary" size="large" @click="onClick">去购物车</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    searchValue() {
      return this.$store.state.searchValue
    },
    banner() {
      return this.$store.state.banner
    }
  },
  methods: {
    onClick() {
      this.$router.push({ path: '/pages/cart/index', isTab: true })
    }
  },
  created() {
  }
}
</script>

<style lang="less">
van-search{
  view.van-cell {
  border-radius: 16px;
  justify-content: center;
  }
  view.van-search{
    padding: 2px 20px 12px 20px;
  }
  view.van-cell__value{
    flex: none;
    -webkit-flex:none;
  }
}
swiper.swiper-container{
  image.swiper-image{
    width: 100%;
    height: 100%;
  }
}

</style>



