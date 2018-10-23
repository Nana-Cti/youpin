<template>
  <div>
    <div class="header">
      <dir class="avater-container">
        <image class="avater-img" src="https://wx.qlogo.cn/mmopen/vi_32/OK084wvPqiaqFLsHMPGZBmicJRia1qfmua3tib20QrmwoPPUNLcInGC49tQGSXKHSsib0miacMBteJoUAY3gaemeAzGQ/132"/>
      </dir>
      <div class="user-name">
        <div>总有妖孽勾引我</div>
        <div class="bindPhone">请登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods: {
      computed() {
      }
    }
  }
</script>

<style lang="less">
.header{
  height: 120px;
  width: 100%;
  background-color: #845f3f;
  display: flex;
  align-items: center;
  .avater-container{
    margin-left: 14px;
    border-radius: 50%;
    height: 64px;
    width: 64px;
    overflow: hidden;
    .avater-img{
      height: 64px;
      width: 64px;
    }
  }
  .user-name{
    height: 64px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    .bindPhone{
      height:20px;
      line-height:20px;
      padding:0 5px;
      margin-top:5px;
      font-size:12px;
      border-radius:2px;
      background:#b2b2b2;
      text-align:center;
      color:#333;
    }
  }
}
</style>

