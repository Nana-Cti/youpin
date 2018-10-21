<template>
  <div v-if="false" class="empty">
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
  <div v-else class="cart">
    <div class="cartEdit">
      <image src="https://shop.io.mi-img.com/app/shop/img?id=shop_d1484e613cee4f9eaa23f315657ed361.png"/>
      <button class="edit">编辑</button>
    </div>
    <div class="cartContent">
      <div class="cartContent-total">
        <van-radio-group value="1" @change="onChange">
          <van-radio name="1">有品配送</van-radio>
        </van-radio-group>
        <text class="total-tip">
          <text>!</text>
          已免运费
        </text>
      </div>
    </div>
    <div class="cartItem">
      <van-checkbox value="checked" @change="onChange">复选框</van-checkbox>
      <image src="" class="cartItem-img"/>
      <div class="cartItem-text">
        <text>8H乳胶床垫M1 玫瑰金 1.2x2m</text>
        <text>￥699</text>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default{
    methods: {
      toIndex() {
        this.$router.push({ path: '/pages/index/index', isTab: true })
      },
      onChange() {
        console.log("onChange")
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
.empty{
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
}
.cart{
  .cartEdit{
    height: 44px;
    width: 100%;
    display: flex;
    justify-content:space-between;
    background-color: #f6f6f6;
    align-items: center;
    image{
      height: 20px;
      width: 56px;
      margin-left: 15px;
    }
    .edit{
      margin-right: 16px;
      width: 66px;
      height: 27px;
      border-radius: 5px;
      border: 1px solid #845f3f;
      font-size: 12px;
      color: #845f3f;
      text-align: center;
      line-height: 24px;
      padding: 0;
    }
  }
  .cartContent-total{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    border-bottom: 1px solid #f5f5f5;
    padding-left: 14px;
    padding-right: 14px;
    .total-tip{
      font-size: 12px;      
      color: #dadada;
      text{
        text-align: center;
        line-height: 14px;
        height: 14px;
        width: 14px;
        display: inline-block;
        border: 1px solid #dadada;
        border-radius: 50%;
        
      }
    }
    van-icon.van-radio__icon--checked{
      color: #d54648;
    }
    view.van-radio__label{
      font-size: 12px;
      margin-left: 6px;
      line-height: 16px;
    }
  }
  .cartItem{
    display: flex;
    align-items: center;
    margin-left: 14px;
    height: 100px;
    width: 100%;
  }
}
</style>

