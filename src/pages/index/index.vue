<template>
  <div>
    <h1>index</h1>
    <van-search background="#845f3f" v-bind:value="$store.state.value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
view.van-cell{
  border-radius: 14px;
}
</style>


