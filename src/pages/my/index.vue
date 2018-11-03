<template>
  <div>
    <div class="header">
      <div v-if="nickName !== ''" class="userInfo">
        <div class="avater-container">
          <image class="avater-img" :src="avatarUrl"/>
        </div>
        <div class="user-name">
          <div>{{nickName}}</div>
        </div>
      </div>
      <button v-else class="login" size="mini" plain="true" open-type="getUserInfo" @getuserinfo="onGotUserInfo">登录</button>
    </div>
    <div class="CouponImg">
      <div></div>
    </div>
    <div class="center-list">
      <div class="center-list-item" v-for="(item, index) in centerListItem" :key="index">
        <div class="left-content">
          <image class="order" :src="item.imageUrl"/>
          <text>{{item.tit}}</text>
        </div>
        <image class="right-arrow" src="../../static/images/right-arrow.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods: {
      onGotUserInfo(e) {
        if (e.mp.detail.userInfo.nickName) {
          this.nickName = e.mp.detail.userInfo.nickName
          this.avatarUrl = e.mp.detail.userInfo.avatarUrl
          this.$store.commit("setID", e.mp.detail.signature)
        }
      }
    },
    data() {
      return {
        nickName: "",
        avatarUrl: "",
        centerListItem: [
          {imageUrl: "../../static/images/order.png", tit: "我的订单"},
          {imageUrl: "../../static/images/coupon.png", tit: "优惠券"},
          {imageUrl: "../../static/images/address.png", tit: "收货地址"},
          {imageUrl: "../../static/images/about.png", tit: "关于我们"}
        ]
      }
    }
  }
</script>

<style lang="less">
.header{
  height: 120px;
  width: 100%;
  background-color: #845f3f;
  display: flex;
  align-items: center;
  .userInfo{
    display: flex;
    .avater-container{
      margin-left: 14px;
      border-radius: 50%;
      height: 64px;
      width: 64px;
      overflow: hidden;
      display: inline-block;
      .avater-img{
        height: 64px;
        width: 64px;
      }
    }
    .user-name{
      height: 64px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 16px;
      color: #fff;
    }
  }
  .login{
    margin: auto;
    border: 1px solid #fff;
    color: #fff;
  }
}
div.CouponImg{
  margin-top: 10px;
  display: flex;
  div{
    height: 75px;
    background-image: url("https://shop.io.mi-img.com/app/shop/img?id=shop_68a16d6257d9d5c6d36a906744746cd0.png&w=1080&h=210");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    flex:1;
  }
}
.center-list{
  padding: 0 10px;
  margin-top: 10px;
  .center-list-item{
    border-bottom: 1px solid #f2f2f2;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    image.right-arrow{
      height: 15px;
      width: 15px;
    }
    .left-content{
      display: flex;
      justify-content: center;
      image.order{
        height: 38px;
        width: 38px;
        text-align: center;
      }
      text{
        font-size:16px;
        line-height: 38px;
        color:#333;
      }
    }
  }
}
</style>

