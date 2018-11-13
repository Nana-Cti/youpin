<template>
  <div>
    <div class="searchBox">
      <div class="searchItem" v-for="(item, index) in recommendList" :key="index">
        <image :src="item.imageUrl"/>
        <div class="searchTit">{{item.tit}}</div>
        <div class="searchPrice">{{item.price}}元</div>
      </div>
    </div>
    <div class="searchEmpty" v-if="recommendList.length === 0">
      <div class="searchLogo">
        <image src="https://static.home.mi.com/app/shop/pages/m/res/images/coninueSearch.png" />
      </div>
      <div class="remind">没有找到搜索结果</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      recommendList() {
        return this.$store.state.recommendList
      }
    }
  }
</script>

<style lang="less">
.searchBox{
  display: flex;
  flex-wrap: wrap;
  .searchItem{
    height: 165px;
    width: 50%;
    box-sizing: border-box;
    border:1px solid #efefef;
    padding-top: 12px;
    padding-bottom: 12px;
    overflow: hidden;
    text-align: center;
    image{
      width: 100px;
      height: 100px;
    }
    .searchTit{
      color: #585858;
      font-size: 14px;
      line-height: 14px;
      text-overflow:ellipsis;
    }
    .searchPrice{
      color: #c70000;
      font-size: 14px;
      line-height: 20px;
      text-overflow:ellipsis;
    }
  }
}
.searchEmpty{
  height: 120px;
  padding-top: 40px;
  text-align: center;
  color: #999;
  .searchLogo{
    height: 35px;
    image{
      height: 30px;
      width: 30px;
    }
  }
  .remind{
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;
  }
}
</style>
