<template>
  <div>
    <swiper class="detailSwiper" indicator-dots="true" autoplay="true" interval="3000" duration="500" circular="true">
      <block v-for="(item, index) in detailBanner " :key="index">
        <swiper-item>
          <image :src="item" class="swiper-image"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="detail-intro">
      <div class="detailTit">石头扫地机器人</div>
      <div class="detailDesc">米家扫地机器人团队出品！ 传感器升级！长续航，智能规划，扫拖一体，清扫性能更强！</div>
      <div class="detailPrice">¥2199 <div>¥2499</div></div>
    </div>
    <div class="newUser">
      <div class="newUser-cont">
        <div class="newUserLeft">150元新人红包</div>
        <div class="newUserRight">快来领取</div>
      </div>
    </div>
    <div class="select-item">
      <div class="select5">选择：</div>
      <div class="select8">颜色、型号、分类</div>
      <van-icon name="arrow" color="#999"/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detailBanner: [
          "https://shop.io.mi-img.com/app/shop/img?id=shop_ac72241497de3dcb655530a0ff87ebcd.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080",
          "https://shop.io.mi-img.com/app/shop/img?id=shop_e0437fdb44c968ae1a66cbb86a2d496e.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080",
          "https://shop.io.mi-img.com/app/shop/img?id=shop_80b3c0b15f32afebe4614ab936c6c16a.jpeg&w=1080&h=1270&crop=a_0_95_1080_1080"
        ]
      }
    }
  }
</script>

<style lang="less">
swiper.detailSwiper{
  height: 375px;
  .swiper-image{
    height: 100%;
    width: 100%;
  }
}
.detail-intro{
  height: 119px;
  border-top: 1px solid #f2f2f2;
  padding: 10px 16px 0;
  .detailTit{
    font-size: 17px;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgba(0, 0, 0, .9);
  }
  .detailDesc{
    line-height: 20px;
    font-size: 13px;
    margin-top: 5px;
    color: rgba(0, 0, 0, .6);
    height: 60px;
  }
  .detailPrice{
    margin-top: 6px;
    font-size: 24px;
    line-height: 24px;
    color: #cc363c;
    display: flex;
    align-items: flex-end;
    &>div{
      font-size:13px;
      margin-left:5px;
      text-decoration:line-through;
      color:#b1b1b1;
    }
  }
}
.newUser{
  padding: 0 15px;
  margin-bottom: 10px;
  height: 35px;
  .newUser-cont{
    height:35px;
    line-height:35px;
    display:flex;
    background-color:#f7f0da;
    border-radius:2px;
    font-size:12px;
    color:#333;
    .newUserLeft{
      flex:1;
      background:url(https://shop.io.mi-img.com/app/shop/img?id=shop_b56ddf24c7a54131602685bb9089d070.png) 7px 7px no-repeat;
      background-size:20px 19px;
      padding-left:34px;
    }
    .newUserRight{
      padding-right: 15px;
      position: relative;
      &::after{
        position: absolute;
        right: 8px;
        bottom: 14px;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 5px solid #999;
        content: "";
      }
    }
  }
}
.select-item{
  height: 49px;
  padding: 0 17px;
  display: flex;
  align-items: center;
  border-top: 1px solid #f2f2f2;
  font-size: 13px;
  .select5{
    color: rgba(0, 0, 0, .5);
  }
  .select8{
    color: rgba(0, 0, 0, .8);
    margin-left: 5px;
    flex: 1;
  }
}
</style>
