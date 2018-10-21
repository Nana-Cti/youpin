<template>
  <div>
    <search :text="'笔记本超级秒杀'"></search>
    <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" duration="800" circular="true">
      <block v-for="(item, index) in banner " :key="index">
        <swiper-item>
          <image :src="item.imageUrl" class="swiper-image"/>
        </swiper-item>
      </block>
    </swiper>
    <i-grid i-class="gridView">
      <block v-for="(item, index) in gridIcon " :key="index">
        <i-grid-item i-class="gridItem">
          <i-grid-icon i-class="gridIcon">
              <image :src="item.imageUrl" />
          </i-grid-icon>
          <i-grid-label i-class="gridLabel">{{item.grid}}</i-grid-label>
        </i-grid-item>
      </block>
    </i-grid>
    <div class="CouponImg">
      <div></div>
    </div>
    <div class="block-border"></div>
    <van-cell-group>
      <van-cell title="小米众筹" is-link value="更多" :border="false" url="/pages/index/index"/>
    </van-cell-group>
    <zclist 
      :imgUrl="zclist.imageUrl"
      :tit="zclist.tit"
      :desc="zclist.desc"
      :price="zclist.price"
      :crowdfundingInfo="zclist.crowdfundingInfo"
    ></zclist>
    <div class="block-border"></div>
    <van-cell-group>
      <van-cell title="今日有品" is-link value="更多" :border="false" url="/pages/index/index"/>
    </van-cell-group>
    <div v-for="(item, index) in indexlist " :key="index">
      <indexlist
        :imageUrl="item.imageUrl"
        :tit="item.tit"
        :desc="item.desc"
        :price="item.price"
        :priceMarket="item.priceMarket"
      ></indexlist>
    </div>
    <view class="weui-footer">
      <view class="weui-footer__text">Copyright © 2018-2018 娜娜出品</view>
    </view>
  </div>
</template>

<script>
import zclist from '../../components/zclist'
import indexlist from '../../components/indexlist'
import search from '../../components/search.vue'

export default {
  components: {
    zclist,
    indexlist,
    search
  },
  data() {
    return {}
  },
  computed: {
    searchValue() {
      return this.$store.state.searchValue
    },
    banner() {
      return this.$store.state.banner
    },
    gridIcon() {
      return this.$store.state.gridIcon
    },
    zclist() {
      return this.$store.state.zclist
    },
    indexlist() {
      return this.$store.state.indexlist
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="less">
swiper.swiper-container{
  height:150px;
  image.swiper-image{
    width: 100%;
    height: 100%;
  }
}
i-grid{
  .gridView{
    padding: 10px 14px;
  }
  .gridItem{
    width:20%;
    padding: 0;
    border: none;
    .gridIcon{
      width: 45px;
      height: 45px;
    }
    .gridLabel{
      margin-top: 8px;
      font-style: 12px;
      color: #6c6c6c;
    }
  }
}
div.CouponImg{
  display: flex;
  div{
    height: 72px;
    margin-top: 10px;
    margin-bottom: 8px;
    background-image: url("https://shop.io.mi-img.com/app/shop/img?id=shop_68a16d6257d9d5c6d36a906744746cd0.png&w=1080&h=210");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    flex:1;
  }
}
div.block-border{
  width: 100%;
  height: 5px;
  background-color: #f3f3f3;
}
van-cell-group{
  view.van-cell__value{
    color: #999;
  }
  view.van-icon{
    margin-top: 5px;
  }
}
view.weui-footer{
  margin-top: 30px;
}
</style>



