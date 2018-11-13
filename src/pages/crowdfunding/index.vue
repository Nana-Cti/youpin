<template>
  <div>
    <div class="zclogo">
      <image src="https://static.home.mi.com/app/shop/pages/m/res/images/mi_crowdfunding_title.png"/>
    </div>
    <div class="homeZcList" v-for="item in zclistx2" :key="item">
      <zclist 
        :imgUrl="zclist.imageUrl"
        :tit="zclist.tit"
        :desc="zclist.desc"
        :price="zclist.price"
        :crowdfundingInfo="zclist.crowdfundingInfo"
      ></zclist>
      <button class="zcButton">了解项目</button>
    </div>
  </div>
</template>

<script>
import zclist from '../../components/zclist'
  export default {
    components: {
      zclist
    },
    data() {
      return {
        zclistx2: [1, 2, 3]
      }
    },
    computed: {
      zclist() {
        return this.$store.state.zclist
      }
    }
  }
</script>

<style lang="less">
.zclogo{
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  image{
    height: 20px;
    width: 90px;
  }
}
.homeZcList{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  .zcButton{
    width:60px;
    height:25px;
    line-height:25px;
    margin:0 auto 0;
    border-radius:3px;
    font-size:11px;
    background:#ff7f3b;
    color:#fff;
    text-align:center;
    padding: 0;
  }
}
</style>
