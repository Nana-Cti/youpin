<template>
  <div class="box">
    <image class="image140" :src="imageUrl"/>
    <div class="rightText">
      <div class="tit">{{tit}}</div>
      <div class="desc">{{desc}}</div>
      <div class="prices">
        <div class="price"><div>￥</div>{{price}} </div>
        <div class="priceMarket">{{priceMarket}}</div>
      </div>
      <div class="buttons">
        <div class="button" :class="{ buttonColor: !State }" >{{buttonState}}</div>
        <div class="buttonRight" v-if="State === true">
          剩余80%
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["imageUrl", "tit", "desc", "price", "priceMarket", "buttonState", "State"]
  }
</script>

<style lang="less" scoped>
.box{
  border-top: 1px solid #f2f2f2;
  height: 140px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  .image140{
    height: 140px;
    width: 140px;
    flex-shrink: 0;
  }
  .rightText{
    height: 140px;
    flex: 1;
    margin-left: 20px;
    padding-top: 15px;
    padding-right: 15px;
    overflow: hidden;
    .tit{
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 16px;
      color: rgb(51, 51, 51);
      overflow: hidden;
      line-height: 21px;
    }
    .desc{
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 11px;
      line-height: 17px;
      margin-top: 3px;
      color: rgb(153, 153, 153);
      overflow: hidden;
    }
    .prices{
      height: 22px;
      margin-top: 10px;
      margin-bottom: 13px;
      display: flex;
      align-items: flex-end;
      .price{
        color: rgb(251, 85, 28);
        font-size: 20px;
        margin-right: 8px;
        display: flex;
        align-items: flex-end;
        line-height: 20px;
        &>div{
          font-size: 12px;
          align-self: flex-start;
        }
      }
      .priceMarket{
        text-decoration:line-through;
        font-size: 12px;
        line-height: 12px;
        color: rgb(153, 153, 153);
      }
    }
    .buttons{
      display: flex;
      height: 22px;
      .button{
        background-color: rgb(251, 85, 28);
        height: 22px;
        width: 60px;
        font-size: 12px;
        line-height: 20px;
        vertical-align: middle;
        text-align: center;
        color: #fff;
        border-radius: 2px;
      }
      .buttonColor{
        background-color: rgb(204, 204, 204) !important;
      }
      .buttonRight{
        margin-left: 12px;
        height: 20px;
        width: 80px;
        border: 1px solid rgb(208, 191, 167);
        border-radius: 10px;
        color: rgb(165, 146, 125);
        overflow: hidden;
        font-size: 11px;
        line-height: 20px;
        text-align: center;
        position: relative;
        &>div{
          height: 20px;
          width: 80%;
          background-color: rgb(239, 224, 193);
          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
        }
      }
    }
  }
}
</style>
