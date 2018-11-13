<template>
  <div>
    <van-search
      :value="searchValue"
      placeholder="请输入搜索关键词"
      use-action-slot
      @search="onSearch"
      maxlength="10"
      placeholder-style="color:rgba(0,0,0,.4);"
      focus="true"
      background="#845f3f"
      >
      <view slot="action" @tap="onSearch">搜索</view>
    </van-search>
    <div class="search-hot-list">
      <div class="search-hot">热门搜索</div>
      <div class="hot-list">
        <div v-for="(item, index) in hotList" :key="index" @click="onSearchHot(index)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hotList: ["床垫", "饮水机", "音响", "摄像头", "平板", "保温杯", "羽绒", "温度计", "鼠标", "充电宝"]
      }
    },
    computed: {
      searchValue() {
        return this.$store.state.search.searchValue
      }
    },
    methods: {
      onSearch(e) {
        if (typeof e.mp.detail !== "object") {
          this.$store.commit('changeSearchValue', e.mp.detail)
          this.$router.push({path: '/pages/searchList/index'})
        }
      },
      onSearchHot(index) {
        this.$store.commit('changeSearchValue', this.hotList[index])
        this.$router.push({path: '/pages/searchList/index'})
      }
    },
    onUnload() {
      this.$store.commit('changeSearchValue', "")
    }
  }
</script>

<style lang="less">
van-search{
  .van-search__action{
    color:#fff;
  }
}
.search-hot-list{
  padding: 0 12px;
  height: 100%;
  .search-hot{
    margin-top: 7px;
    font-size: 15px;
    line-height: 29px;
    color:#999;
    border-bottom: 1px solid #f2f2f2;
  }
  .hot-list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    &>div{
      color: #333;
      line-height: 20px;
      height: 20px;
      margin: 5px;
      padding: 2px 5px;
      background-color: #ECF8FA;
    }
  }
}
</style>

