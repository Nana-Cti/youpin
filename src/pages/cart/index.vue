<template>
  <div>
    <div class="emptyCart">
      <image class="emptyCart-img" src="https://static.home.mi.com/app/shop/pages/m/res/images/cart_grey.png"/>
      <div class="emptyCart-text">
        <text>购物车还是空的哦</text>
        <button @click="toIndex"> 去逛逛 </button>
      </div>
    </div>
    <div class="block-border"></div>
    <div class="recommend">
      <div class="recommend-tit">为你推荐</div>
      <div class="recommend-content">
        <block v-for="(item, index) in recommendList" :key="index">
          <div class="recommend-items">
            <image class="recommend-item-img" :src="item.imageUrl" />
            <text class="recommend-item-desc">{{item.desc}}</text>
            <text class="recommend-item-tit">{{item.tit}}</text>
            <text class="recommend-item-price"><text>￥</text>{{item.price}}</text>
          </div>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods: {
      toIndex() {
        this.$router.push({ path: '/pages/index/index', isTab: true })
      }
    },
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
.emptyCart{
  height: 195px;
  width: 100%;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  padding-bottom: 20px;
  box-sizing: border-box;
  .emptyCart-img{
    height: 88px;
    width: 102px;
    margin-right: 30px;
  }
  .emptyCart-text{
    display: flex;
    width: 170px;
    flex-direction:column;
    justify-content: center;
    align-items:flex-start;
    text{
      font-size: 12px;
      margin-bottom: 12px;
      color: #845f3f;
      font-weight: bold;
    }
    button{
      background-color: #845f3f;
      height: 20px;
      width: 40px;
      color: #fff;
      border-radius: 4px;
      font-size: 10px;
      margin: 0;
      padding: 0;
      line-height: 20px;
    }
  }
}
.block-border{
  width: 100%;
  height: 10px;
  background-color: #f3f3f3;
}
.recommend{
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content:center;
  flex-wrap:wrap;
  .recommend-tit{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
  }
  .recommend-content{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    width: 100%;
    .recommend-items{
      height: 260px;
      width: 168px;
      .recommend-item-img{
        width: 168px;
        height: 168px;
        display: block;
      }
      .recommend-item-desc{
        color: #696763;
        font-size: 10px;
        line-height: 30px;
        height: 30px;
        display: block;
        background-color: #f5f3ef;
        margin-left: 2px;
      }
      .recommend-item-tit{
        margin-top: 10px;
        line-height: 12px;
        font-size: 12px;
        color: #383838;
        display: block;
        margin-left: 2px;
      }
      .recommend-item-price{
        color: #ca260a;
        font-size: 13px;
        display: block;
        line-height: 40px;
        height: 40px;
        margin-left: 2px;
        text{
          display: inline;
          font-size: 8px;
          color: #9c0000;
        }
      }
    }
  }
}
</style>

