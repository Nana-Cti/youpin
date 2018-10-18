<template>
  <div class="zcList-item">
    <div class="zclist-img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="zclist-tit">
      <text>{{tit}}</text>
    </div>
    <div class="zclist-desc">
      <text>{{desc}}</text>
    </div>
    <div class="zclist-price">
      <text>{{price}}</text>
    </div>
    <div class="zclist-crowdfundingInfo">
      <div class="crowdfundingInfo">
        <text>
          <text>{{crowdfundingInfo.molecule}}</text>/{{crowdfundingInfo.Denominator}}人支持
        </text>
        <div>
          <text>热</text>
        </div>
        <text>{{Percentage}}%</text>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default{
    // props:{
    //   imgUrl:String,
    //   tit:String,
    //   desc:String,
    //   price:String,
    //   crowdfundingInfo:String
    // },
    props: ["imgUrl", "tit", "desc", "price", "crowdfundingInfo"],
    computed: {
      Percentage() {
        return parseInt(this.crowdfundingInfo.molecule / this.crowdfundingInfo.Denominator * 100)
      }
    }
  }
</script>

<style lang="less" scoped>
div.zcList-item{
  padding: 0 10px 10px;
  text-overflow: ellipsis;
  .zclist-img{
    img{
      width: 355px;
      height: 164px;
    }
  }
  .zclist-tit{
    text{
      font-size: 16px;
      line-height: 26px;
      height: 26px;
      color:#333;
    }
  }
  .zclist-desc{
    text{
      color:#666;
      font-size: 11px;
      line-height: 22px;
      height: 22px;
    }
  }
  .zclist-price{
    text{
      line-height: 20px;
      height: 20px;
      font-size: 13px;
      color: #B60909;
      margin-right: 2px;
    }
  }
  .zclist-crowdfundingInfo{
    .crowdfundingInfo{
      
      display: flex;
      height: 20px;
      align-items: center;
      text:nth-of-type(1) {
        font-size: 13px;
        line-height: 16px;
        color:#666;
        text{
          color:rgb(182, 9, 9);
        }
      }
      div:nth-of-type(1) {
        flex:1;
        text{
          background-color: #ffd803;
          display:block;
          width:15px;
          height:15px;
          line-height:15px;
          margin-left:4px;
          margin-top:3px;
          text-align:center;
          border-radius:2px;
          font-size:11px;
          color:#fff;
        }
      }
      text:nth-of-type(2) {
        font-size:13px;
        line-height:16px;
        color:#b60909;
      }
    }
    div:nth-of-type(2){
      background-color: #f68f0c;
      border-radius: 2px;
      height: 2px;
      margin-top: 4px;
    }
  }
}
</style>


