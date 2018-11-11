<template>
  <div class="bg-color">
    <div class="background">
      <div class="background-color"></div>
      <div class="background-image"></div>
    </div>
    <div class="header">
      <image src="../../../static/images/zchou.png" class="logo" />
      <div class="header-txt">永远年轻，永远好奇</div>
      <div class="banner-box">
        <div class="banner">
          <image class="img" src="https://img.youpin.mi-img.com/800_pic/79ca80f81b19c22c2de4047f15c8a088.jpg" />
          <div class="banner-txt">
            <div class="banner-txt-left">
              <image class="banner-txt-img" src="https://img.youpin.mi-img.com/800_pic/2642dcaec6ccda9eafeed5822e3dc584.png" />
            </div>
            <div class="banner-txt-right">
              <div class="right-tit" >MyBug防泼水飞织儿童休闲鞋</div>
              <progress
                :percentage="120"
                :numberOfPeople="722"
                :numberOfDays="13"
              ></progress>
              <div class="mt-11"></div>
              <priceAndButton
                :price="199"
                :buttonValue="'立即支持'"
                :buttonColor="'#fff'"
              ></priceAndButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contentTatle">
        <div class="contentTit">正在众筹</div>
        <div class="contentDesc">寻觅世间10好物，只为精致你的生活</div>
      </div>
      <div class="contentItemList">
        <div class="contentItem" v-for="(item, index) in recommendList" :key="index">
          <div>
            <image class="itemImage" :src="item.imageUrl"/>
          </div>
          <div class="itemTxt">
            <div class="itemTxtTit">{{item.tit}}</div>
            <progress
              :percentage="120"
              :numberOfPeople="722"
              :numberOfDays="13"
            ></progress>
            <div class="mt-30"></div>
            <priceAndButton
              :price="item.price"
              :buttonValue="'立即支持'"
              :buttonColor="'rgb(243, 167, 77)'"
            ></priceAndButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import progress from '../../../components/progress'
  import priceAndButton from '../../../components/priceAndButton'

  export default {
    components: {
      progress,
      priceAndButton
    },
    computed: {
      recommendList() {
        return this.$store.state.recommendList
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
.bg-color{
  background-color: rgb(244,244,244);
  position: relative;
  z-index: -1000;
}
.background{
  z-index: -999;
  height: 359px;
  width: 702px;
  position: absolute;
  top: -66px;
  left: -265px;
  border-bottom-right-radius: 359px;
  overflow: hidden;
  .background-color{
    height: 359px;
    width: 702px;
    background-color: rgba(0,0,0,.6);
    position: absolute;
    z-index: -997;
  }
  .background-image{
    z-index: -998;
    position: absolute;
    height: 359px;
    width: 702px;
    filter: blur(4px);
    background-image: url(https://img.youpin.mi-img.com/800_pic/79ca80f81b19c22c2de4047f15c8a088.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
.header{
  padding-top: 66px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo{
    height: 25px;
    width: 103px;
  }
  .header-txt{
    font-size: 13px;
    color: rgba(255,255,255,.5);
    height: 17px;
    margin-top: 6px;
  }
  .banner-box{
    height: 305px;
    margin-top: 13px;
    .banner{
      width: 351px;
      height: 293px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow:0px 0px 4px #888888;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      .img{
        width: 351px;
        height: 179px;
      }
      .banner-txt{
        height: 105px;
        width: 100%;
        display: flex;
        align-items: center;
        .banner-txt-left{
          height: 90px;
          width: 80px;
          margin-left: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          .banner-txt-img{
            width: 57px;
            height: 57px;
          }
        }
        .banner-txt-right{
          flex: 1;
          padding-left: 20px;
          padding-top: 5px;
          height: 95px;
          .right-tit{
            font-size: 16px;
            color: #333;
            line-height: 19px;
          }
          .mt-11{
            margin-top: 11px;
            width: 100%;
          }
        }
      }
    }
  }
}
.content{
  padding-top: 7px;
  .contentTatle{
    height: 50px;
    padding: 0 10px;
    .contentTit{
      font-size: 16px;
      line-height: 19px;
      margin-top: 3px;
      color: rgb(51, 51, 51);
      font-weight: bold;
    }
    .contentDesc{
      font-size: 13px;
      margin-top: 4px;
      line-height: 16px;
      color:rgb(153, 153, 153);
    }
  }
  .contentItemList{
    border-radius: 7px;
    background-color: #fff;
    padding: 0 5px;
    .contentItem{
      padding: 18px 5px 0;
      display: flex;
      height: 150px;
      box-sizing: border-box;
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
      .itemImage{
        height: 115px;
        width: 115px;
      }
      .itemTxt{
        flex: 1;
        padding-left: 12px;
        .itemTxtTit{
          font-size: 16px;
          line-height: 19px;
          color: rgb(51, 51, 51);
        }
        .mt-30{
          margin-top: 30px;
          width: 100%;
        }
      }
    }
  }
}
</style>
