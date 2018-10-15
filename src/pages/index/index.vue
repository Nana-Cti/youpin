<template>
  <div>
    <van-search background="#845f3f" :value="seachKey" placeholder="请输入搜索关键词" />
    <van-button type="primary" size="large" @click="onClick">去购物车</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    seachKey() {
      return this.$store.state.searchValue
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
view.van-cell {
  border-radius: 14px;
}
</style>



