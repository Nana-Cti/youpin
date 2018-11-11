<template>
  <div>
    <div class="header">
      <div class="img">
        <text>新品推荐</text>
        <div class="img-tit">谷小酒匠心版53°酱香型白酒</div>
      </div>
    </div>
    <div class="tit">"{{monthDate}} 每日上新"</div>
    <div class="newList" v-for="(item, index) in recommendList" :key="index" >
      <image :src="item.imageUrl"/>
      <div class="newList-list">
        <div class="listTit">{{item.tit}}</div>
        <div class="listDesc">{{item.desc}}</div>
        <div class="positionBottom">
          <priceAndButton
            :price="item.price"
            :buttonValue="'立即查看'"
            :buttonColor="'rgb(214, 174, 114)'"
          ></priceAndButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import priceAndButton from '../../../components/priceAndButton'
  export default {
    components: {
      priceAndButton
    },
    computed: {
      recommendList() {
        return this.$store.state.recommendList
      }
    },
    data() {
      return {
        monthDate: "11.11"
      }
    },
    methods: {
    },
    onLoad() {
      const myDate = new Date()
      this.monthDate = (myDate.getMonth() + 1) + "." + myDate.getDate()
    }
  }
</script>

<style lang="less">
.header{
  height: 226px;
  padding-top: 8px;
  .img{
    margin: auto;
    height: 220px;
    width: 334px;
    background-image: url(https://img.youpin.mi-img.com/800_pic/4a9d91d081ffae15405cb99d096cbdf4.jpg);
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    box-shadow:0px 0px 3px #888888;
    text{
      background-color: rgba(255,255,255,.6);
      font-size: 14px;
      line-height: 24px;
      color:#333;
      padding: 2px 5px;
      float: right;
      margin-top: 20px;
      margin-right: 10px;
      border-radius: 3px;
    }
    .img-tit{
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      height: 60px;
      padding: 6px 10px;
      background-color: rgba(0,0,0,.5);
      font-size: 18px;
      color:#fff;
    }
  }
}
.tit{
  text-align: center;
  line-height: 50px;
  height: 50px;
  color: #333;
  border-bottom: 1px solid #f2f2f2;
}
.newList{
  height: 150px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  image{
    height: 115px;
    width: 115px;
  }
  .newList-list{
    width: 220px;
    margin-left: 10px;
    height: 115px;
    position: relative;
    .listTit{
      color: rgb(51, 51, 51);
      line-height: 17px;
      font-size: 15px;
    }
    .listDesc{
      color: rgb(153, 153, 153);
      text-overflow: ellipsis;
      font-size: 13px;
      margin-top: 6px;
      line-height: 15px;
    }
    .positionBottom{
      position: absolute;
      bottom: 0;
      height: 23px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      
    }
  }
}
</style>

