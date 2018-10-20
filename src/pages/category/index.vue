<template>
  <div>
    <search :text="'笔记本超级秒杀'"></search>
    <div class="mainBox">
      <scroll-view scroll-y scroll-with-animation="" scroll-into-view="m0" scroll-top="500" class="leftMenuContainer" style="height: 495px">
        <block v-for="(item , index) in leftMenuList" :key="index">
          <div :id="'m'+index" @click="swiperSwitch(index)" :class="{activit:clickClass[index]}">{{item}}</div>
        </block>
      </scroll-view>
      <div class="rightGoodsInfoContainer">
        <swiper :current="id" circular vertical skip-hidden-item-layout class="goodsScrollView">
          <block v-for="(item , index) in goodsScrollView" :key="index">
            <swiper-item class="goodsScrollitem">
              <image :src="item.imageUrl" class="item-image"/>
              <view class="weui-grids">
                <block v-for="(mitem , mindex) in item.gridlist" :key="mindex">
                  <navigator url="" class="weui-grid">
                      <image class="weui-grid__icon" :src="mitem.imageUrl" />
                      <view class="weui-grid__label">{{mitem.text}}</view>
                  </navigator>
                </block>
              </view>
            </swiper-item>
          </block>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../../components/search.vue'

  export default{
    components: {
      search
    },
    data() {
      return {
        id: 0,
        clickClass: [true]
      }
    },
    computed: {
      leftMenuList() {
        return this.$store.state.leftMenuList
      },
      goodsScrollView() {
        return this.$store.state.goodsScrollView
      }
    },
    created() {

    },
    methods: {
      swiperSwitch(index) {
        this.clickClass.forEach((item, i) => {
          this.clickClass[i] = false
        })
        this.$set(this.clickClass, index, true)
        this.id = index
      }
    }
  }
</script>

<style lang="less">
.mainBox{
  display: flex;
  scroll-view.leftMenuContainer{
    width: 75px;
    height: 100%;
    padding-top: 13px;
    border-right:solid 1px rgba(0,0,0,.1);
    display: block;
    display: flex;
    justify-content: center;
    div{
      width: 75px;
      height: 28px;
      margin-bottom: 12px;
      font-size: 13px;
      font-weight: 300;
      text-align: center;
      color: #333;
      line-height: 28px;
      &.activit{
        border-left:solid 3px #845f3f;
        color:#845f3f;
        font-weight:400;
        font-size:14px;
      }
    }
  }
  .rightGoodsInfoContainer{
    flex: 1;
    height:100%;
    padding-top:13px;
    flex:1;
    display:flex;
    justify-content:center;
    .goodsScrollView{
      width:270px;
      height:495px;
      .goodsScrollitem{
        overflow-y:scroll;
        .item-image{
          height: 135px;
          width: 100%;
        }
        view.weui-grids{
          border:none;
          height: 100%;
          width: 100%;
          navigator.weui-grid{
            padding: 0;
            margin: 0 30px 13px 0;
            border: none;
            width: 70px;
            display: flex;
            justify-content: center;
            flex-direction:column;
            &:nth-of-type(3n){
              margin: 0 0 13px 0;
            }
            image.weui-grid__icon{
              width:64px;
              height:64px;
            }
            view.weui-grid__label{
              margin-top:5px;
              text-align:center;
              font-size:12px;
              color:#666;
              white-space:nowrap;
              text-overflow:ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>

