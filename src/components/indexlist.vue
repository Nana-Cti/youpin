<template>
  <div class="indexlist-item">
    <div>
      <div class="img-item">
        <img :src="imageUrl" alt="">
      </div>
      <div class="text-item">
        <div class="tit">
          <text>{{tit}}</text>
        </div>
        <div class="desc">
          <text>{{desc}}</text>
        </div>
        <div class="price">
          <div><text>{{price}}</text></div>
          <div><text>{{priceMarket}}</text></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ["imageUrl", "tit", "desc", "price", "priceMarket"]
  }
</script>

<style lang="less" scoped>
.indexlist-item{
  border-bottom:1px solid #f2f2f2;
  padding: 0 8px;
  display: flex;
  height: 130px;
  &>div{
    display: flex;
  }
  .img-item{
    width: 150px;
    height: 130px;
    flex-shrink: 0;
    img{
      width: 130px;
      height: 130px;
    }
  }
  .text-item{
    padding-top: 20px;
    div.tit{
      height:24px;
      line-height:24px;
      font-size:16px;
      color:#333;
    }
    div.desc{
      margin-top:2px;
      font-size:11px;
      color:#666;
      height: 34px;
      line-height: 17px;
      overflow:hidden;
    }
    div.price{
      display:flex;
      margin-top:16px;
      font-size:13px;
      color:#B60909;
      height:20px;
      line-height:20px;
      div:last-of-type{
        color:#999;
        font-size:12px;
      }
    }
  }
}
</style>

