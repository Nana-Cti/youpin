<template>
  <div class="search">
    <div class="search-cell">
      <icon class="search-icon" size="14" type="search"></icon>
      <text>{{text}}</text>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'search',
    props: ["text"]
  }
</script>

<style lang="less" scoped>
.search{
  height: 44px;
  padding-top: 2px;
  background-color: #845f3f;
  width: 100%;
  .search-cell{
    height: 30px;
    margin: 0 20px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: #fff;
    .search-icon{
      margin-right:4px;
    }
    text{
      color:#ccc;
      font-size:13px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
}
</style>
