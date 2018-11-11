<template>
  <div class="box">
    <div class="price">
      <div>￥</div>
      <div>{{price}}</div>
    </div>
    <div class="button" :style="{ backgroundColor : buttonColor }">{{buttonValue}}</div>
  </div>
</template>

<script>
  export default {
    props: ["price", "buttonValue", "buttonColor"]
  }
</script>

<style lang="less" scoped>
.box{
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .price{
    display: flex;
    align-items: flex-end;
    color: rgb(169, 33, 18);
    div:nth-of-type(1){
      font-size: 12px;
    }
    div:nth-of-type(2){
      font-size: 17px;
    }
  }
  .button{
    width: 73px;
    color: #fff;
    font-size: 13px;
    height: 24px;
    border: none;
    text-align: center;
    line-height: 24px;
    margin: 0 10px 0 0;
    border-radius: 2px;
  }
}
</style>
