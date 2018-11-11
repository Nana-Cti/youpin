<template>
  <div>
    <div class="header"></div>
    <div class="navigation" @click="getState">
      <scroll-view class="scrollBox" scroll-x="true" :scroll-into-view="'s'+activityIndex">
        <view class="scrollItem" @click="switchContent(index)" :class="{itemActivity: scrollItemActivity[index]}" :id="'s'+index" v-for="(item, index) in scrollItem" :key="index">
          <div class="itemTime">
            <div>{{currentDate > 10 ? currentDate : "0" + currentDate}}日{{item > 10 ? item : "0" + item}}:00</div>
            <div>{{scrollItemState.navState[index]}}</div>
          </div>
        </view>
      </scroll-view>
    </div>
    <div class="content" >
      <div class="content-time">
        {{scrollItemState.tipState[activityIndex] || tips}}
      </div>
      <rushToBuyList
        v-for="(item, index) in indexlist"
        :key="index"
        :imageUrl="item.imageUrl"
        :tit="item.tit"
        :desc="item.desc"
        :price="item.price"
        :priceMarket="item.priceMarket"
        :buttonState="scrollItemState.buttonState[activityIndex]"
        :State="scrollItemState.State[activityIndex]"
      ></rushToBuyList>
    </div>
  </div>
</template>

<script>
import rushToBuyList from '../../../components/rushToBuyList'
  export default {
    components: {
      rushToBuyList
    },
    data() {
      return {
        scrollItem: [0, 9, 12, 14, 18, 20, 22],
        currentDate: 1,
        currentHours: 0,
        currentMinutes: 0,
        currentSeconds: 0,
        remainingTime: 1,
        scrollItemState: {
          navState: [],
          tipState: [],
          buttonState: [],
          State: []
        },
        scrollItemActivity: [],
        activityIndex: 0
      }
    },
    methods: {
      getState() {
        this.scrollItem.forEach((element, index) => {
          const nextElement = this.scrollItem[index + 1] || 24
          if (element > this.currentHours) {
            this.$set(this.scrollItemState.navState, index, "即将开始")
            this.$set(this.scrollItemState.tipState, index, "即将开启 不容错过")
            this.$set(this.scrollItemState.buttonState, index, "开抢提醒")
            this.$set(this.scrollItemState.State, index, 1)
          } else if (nextElement > this.currentHours) {
            this.remainingTime = nextElement - this.currentHours - 1
            this.$set(this.scrollItemState.navState, index, "抢购中")
            this.$set(this.scrollItemState.tipState, index, false)
            this.$set(this.scrollItemState.buttonState, index, "抢购")
            this.$set(this.scrollItemState.State, index, true)
          } else {
            this.$set(this.scrollItemState.navState, index, "已结束")
            this.$set(this.scrollItemState.tipState, index, "限时抢购 手慢即无")
            this.$set(this.scrollItemState.buttonState, index, "已结束")
            this.$set(this.scrollItemState.State, index, false)
          }
        })
      },
      switchContent(index) {
        this.scrollItemActivity.forEach((item, i) => {
          this.$set(this.scrollItemActivity, i, false)
        })
        this.$set(this.scrollItemActivity, index, true)
        this.activityIndex = index
      }
    },
    onLoad() {
      const myDate = new Date()
      this.currentDate = myDate.getDate()
      this.currentHours = myDate.getHours()
      this.currentMinutes = myDate.getMinutes()
      this.currentSeconds = myDate.getSeconds()
      this.getState()
      this.switchContent(this.scrollItemState.State.indexOf(true))
    },
    computed: {
      tips() {
        return "本场还剩 0" + this.remainingTime + "：" + (this.currentMinutes >= 50 ? "0" + (59 - this.currentMinutes) : (59 - this.currentMinutes)) + "：" + (this.currentSeconds >= 50 ? "0" + (59 - this.currentSeconds) : (59 - this.currentSeconds))
      },
      indexlist() {
        return this.$store.state.indexlist
      }
    },
    onShow() {
      setInterval(() => {
        const myDate = new Date()
        this.currentSeconds = myDate.getSeconds()
        if (this.currentSeconds === 0) {
          this.currentMinutes = myDate.getMinutes()
          if (this.currentMinutes === 0) {
            this.currentDate = myDate.getDate()
            this.currentHours = myDate.getHours()
            this.getState()
          }
        }
      }, 1000)
    }
  }
</script>

<style lang="less">
.header{
  height: 75px;
  width: 100%;
  background-image: url(https://shop.io.mi-img.com/app/shop/img?id=shop_07c22042de66f6505ad569aa32f99674.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.navigation{
  height: 60px;
  scroll-view.scrollBox{
    white-space:nowrap;
    width: 100%;
    height: 60px;
    .itemActivity{
      background-color: rgb(251, 85, 28) !important;
      position: relative;
      .itemTime{
        color: #fff !important;
      }
      &::after{
        position: absolute;
        content:"";
        height: 0;
        width: 0;
        border-top: 5px solid rgb(251, 85, 28);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        bottom: -5px;
        right: 50%;
        margin-right: -5px;
      }
    }
    .scrollItem{
      width: 83px;
      display:inline-block;
      height: 55px;
      background-color: rgb(255, 241, 204);
      .itemTime{
        padding-bottom: 10px;
        padding-top: 7px;
        color: rgb(165, 146, 125);
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
.content{
  .content-time{
    text-align: center;
    font-size: 12px;
    line-height: 45px;
    color: rgb(126, 106, 91);
    height: 45px;
    padding-bottom: 5px;
    position: relative;
    &::before{
      position: absolute;
      content:"";
      height: 0;
      width: 0;
      border-top: 4px solid transparent;
      border-left: 5px solid rgb(239, 224, 193);
      border-bottom: 4px solid transparent;
      top: 50%;
      left: 25%;
      margin-top: -6px;
      margin-left: -5px;
    }
    &::after{
      position: absolute;
      content:"";
      height: 0;
      width: 0;
      border-top: 4px solid transparent;
      border-right: 5px solid rgb(239, 224, 193);
      border-bottom: 4px solid transparent;
      top: 50%;
      left: 75%;
      margin-top: -6px;
      margin-left: -5px;
    }
  }
}
</style>

