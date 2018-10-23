<template>
  <div v-if="cartLIst.length===0" class="empty">
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
      <button class="edit" @click="onEdit">{{edit}}</button>
    </div>
    <div class="cartContent">
      <div class="cartContent-total">
        <label class="total-tit">
          <radio @click="onChange" :checked="total" color="#d54648" />
          有品配送
        </label>
        <text class="total-tip">
          <text>!</text> {{freight}}
        </text>
      </div>
    </div>
    <div class="cartItem" v-for="(item, index) in cartLIst" :key="index" :class="{hidden: deleteList[index]}">
      <radio @click="onChange(index)" :checked="selectList[index]" color="#d54648" />
      <image :src="item.imageUrl" class="cartItem-img"/>
      <div class="cartItem-text">
        <text>{{item.tit}}</text>
        <text>￥{{item.price}}</text>
      </div>
      <van-stepper class="cartItem-stepper" :value="item.num" min=1 max=10 :disabled=editCompletion integer @change.stop="numChange($event, index)"/>
    </div>
    <van-submit-bar
      v-if="!editCompletion"
      :price="sumPrice"
      button-text="去结算"
      @submit="onClickButton"
      >
      <label class="total">
        <radio @click="onChange" :checked="total" color="#d54648" />
        全选
      </label>
    </van-submit-bar>
    <van-submit-bar
      v-else
      button-text="删除"
      :label="'已选' + sum + '件'"
      @submit="onClickButton"
      >
      <label class="total">
        <radio @click="onChange" :checked="total" color="#d54648" />
        全选
      </label>
      <view slot="top" class="total-top">已选{{sum}}件</view>
    </van-submit-bar>
  </div>
</template>

<script>
  export default{
    methods: {
      toIndex() {
        // 当购物车为空时,点击按钮跳转到主页
        this.$router.push({ path: '/pages/index/index', isTab: true })
      },
      onChange(index) {
        // 商品全选
        if (isNaN(index)) {
          this.total = !this.total
          this.selectList.forEach((item, i) => {
            this.$set(this.selectList, i, this.total)
          })
        } else {
          this.$set(this.selectList, index, !this.selectList[index])
          let dataList = this.selectList.filter(item => {
            return item === true
          })
          if (this.selectList.length === dataList.length) {
            this.total = true
          } else {
            this.total = false
          }
        }
      },
      onClickButton() {
        // 页面下方的红色按钮  去结算or删除
        if (!this.editCompletion) {
          this.$router.push({ path: '/pages/index/index', isTab: true })
        } else {
          this.selectList.forEach((item, index) => {
            this.$set(this.deleteList, index, item)
          })
        }
      },
      numChange(event, index) {
        // 商品数量改变
        if (event.mp.detail <= 10 && event.mp.detail >= 1 && this.editCompletion === false) {
          this.$set(this.$store.state.cartLIst[index], "num", event.mp.detail)
        }
      },
      onEdit() {
        // 编辑商品按钮,取消所有商品的选中状态,更改按钮文字,禁用商品数量更改按钮
        this.editCompletion = !this.editCompletion
        this.total = false
        this.selectList.forEach((item, i) => {
          this.$set(this.selectList, i, false)
        })
        if (!this.editCompletion) {
          for (let index = this.$store.state.cartLIst.length - 1; index >= 0; index--) {
            if (this.deleteList[index]) {
              console.log(index)
              this.$store.state.cartLIst.splice(index, 1)
            }
          }
          this.deleteList = []
          this.selectList = []
          this.total = true
          for (let index = 0; index < this.$store.state.cartLIst.length; index++) {
            this.selectList.push(true)
          }
        }
      }
    },
    data() {
      return {
        total: true,
        selectList: [],
        deleteList: [],
        editCompletion: false
      }
    },
    computed: {
      recommendList() {
        // 购物车为空时的推荐商品列表
        return this.$store.state.recommendList
      },
      cartLIst() {
        // 购物车商品列表
        return this.$store.state.cartLIst
      },
      sumPrice() {
        // 计算所有选中商品的价格
        const sumArr = this.$store.state.cartLIst.filter((item, index) => {
          return this.selectList[index] === true
        })
        let sum = 0
        sumArr.forEach(element => {
          sum += element.price * element.num * 100
        })
        return sum
      },
      sum() {
        // 选中商品的个数 (编辑商品页面使用)
        return this.selectList.filter(item => {
            return item === true
          }).length
      },
      freight() {
        // 运费
        return this.sumPrice >= 99 ? "已免运费" : "满99.00元免运费"
      },
      edit() {
        // 编辑按钮的文字切换
        return this.editCompletion === false ? "编辑" : "完成"
      }
    },
    created() {
      // 进入页面自动全选商品
      for (let index = 0; index < this.$store.state.cartLIst.length; index++) {
        this.selectList.push(true)
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
  height: 554px;
  font-size: 13px;
  color:#333;
  background-color: #f2f2f2;
  radio{
    padding:10px 0;
    transform:scale(0.8);
  }
  .hidden{
    display: none !important;
  }
  .cartEdit{
    height: 44px;
    width: 100%;
    display: flex;
    justify-content:space-between;
    background-color: #f6f6f6;
    align-items: center;
    image{
      height: 25px;
      width: 70px;
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
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
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
    .total-tit{
      display: flex;
      align-items: center;
    }
  }
  .cartItem{
    background-color: #fff;
    position: relative;
    border-top: 1px solid #f5f5f5;
    display: flex;
    align-items: center;
    padding-left: 14px;
    height: 100px;
    width: 100%;
    image{
      height: 84px;
      width: 84px;
      border: 1px solid #f5f5f5;
      margin-right: 10px;
    }
    .cartItem-text{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text:last-child{
        margin-top: 14px;
        color: #9c0000;
        display: block;
      }
    }
    .cartItem-stepper{
      position: absolute;
      left: 235px;
      top: 44px;
    }
  }
  van-submit-bar{
    position: relative;
    .total-top{
      position: absolute;
      bottom: 50%;
      right: 120px;
      color: #333;
      margin-bottom: -8px;
    }
    .total{
      display: flex;
      align-items: center;
      margin-left: 14px;
    }
    .van-submit-bar__bar{
      border-bottom: 1px solid #c6c6c6;
      height: 54px;
      .van-submit-bar__price{
        color: #d34942;
      }
      van-button{
        .van-button--square{
          background-color: #d34942;
        }
      }
    }
  }
}
</style>

