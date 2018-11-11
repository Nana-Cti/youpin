<template>
  <div>
    <div class="progress">
      <div class="progress-box">
        <div class="progress-size" :style="{width: percentageNew + '%'}">
          <div class="progress-color"></div>
        </div>
        <div class="progress-bg"></div>
      </div>
      <text :style="{color: textColor }">{{percentage}}%</text>
    </div>
    <div class="details">{{numberOfPeople}} 人支持 | 剩余 {{numberOfDays}} 天</div>
  </div>
</template>

<script>
export default{
    props: ["percentage", "numberOfPeople", "numberOfDays"],
    computed: {
      percentageNew() {
        return this.percentage > 100 ? 100 : this.percentage
      },
      textColor() {
        return this.percentage >= 100 ? "rgb(231, 59, 73)" : ""
      }
    }
  }
</script>

<style lang="less" scoped>
.progress{
  margin-top: 3px;
  height: 18px;
  display: flex;
  align-items: center;
  .progress-box{
    margin-right: 5px;
    height: 6px;
    width: 146px;
    position: relative;
    .progress-size{
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 6px;
      border-radius: 4px;
      overflow: hidden;
      .progress-color{
        width: 146px;
        height: 6px;
        background-image: linear-gradient(to right, rgb(255, 199, 105), rgb(231, 59, 73));
      }
    }
    .progress-bg{
      height: 6px;
      border-radius: 4px;
      width: 146px;
      position: absolute;
      z-index: -1;
      background-color: #afafaf;
    }
  }
  text{
    font-size: 13px;
    color:#888888;
  }
}
.details{
  margin-top: 4px;
  line-height: 15px;
  font-size: 13px;
  color:#888888;
}
</style>

