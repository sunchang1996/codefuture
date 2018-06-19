<template>
<!-- 作品展示 -->
  <div class="share-wrapper">
    <div class="my-share-wrap">
      <h1>我的作品分享</h1>
      <div class="share-info">
        <div class="statistic-container">
          <h1>总计打开了</h1>
          <div class="statistic-counting">
            <span class="counting">18</span> 次
          </div>
          <div class="statistic-added">
            <span>比昨天增加了</span> <span class="count">0</span> 次
          </div>
        </div>
        <div class="statistic-container">
          <h1>最近7天打开了</h1>
          <div class="statistic-counting">
            <span class="counting">9</span> 次
          </div>
          <div class="statistic-added">
            <span>比昨天增加了</span> <span class="count">0</span> 次
          </div>
        </div>
         <div class="statistic-container">
          <h1>累积被点赞数</h1>
          <div class="statistic-counting">
            <span class="counting">0</span> 次
          </div>
          <div class="statistic-added">
            <span>比昨天增加了</span> <span class="count">0</span> 次
          </div>
        </div>
      </div>
      <div class="my-share-wrap-works">
        <p class="title"></p>
        <div class="share-works">
          <Works></Works>
        </div>
      </div>
    </div>
    <div class="other-share-wrap">
      <h1>作品精选</h1>
      <div class="switch-content">
        <div class="switch" :class="{selected: selected}" @click="selected = !selected">本期</div>
        <div class="switch" :class="{selected: !selected}" @click="selected = !selected">往期</div>
      </div>
      <div class="slected-homeword">
        <Works name='快乐的小傻逼'></Works>
      </div>
    </div>
  </div>
</template>

<script>
import Works from '@/components/Works'

export default {
  name: 'production',
  data() {
    return {
      selected: true
    }
  },

  components: {
    Works
  }
}
</script>


<style lang="less" scoped>
.share-wrapper {
  position: relative;
  width: auto;
  text-align: center;
  min-width: 1055px;
  display: flex;
  justify-content: center;
}
.my-share-wrap, .other-share-wrap {
  position: relative;
  display: inline-block;
  width: 500px;
  height: 100%;
  margin: 30px 10px 10px;
  padding: 20px;
  border: solid 1px #E2E9EB;
  border-radius: 10px;
  background: #f5f7f8;
}
.share-info {
  display: flex;
  padding-bottom: 30px;
  .statistic-container {
    flex: 1;
    border-right: 1px solid #E2E9EB;
  }
  .statistic-container:last-child {
    border: none;
  }
  h1 {
    font-size: 16px;
  }
  .statistic-counting {
    margin-top: 10px;
    color: #4DB141;
  }
  .counting {
    font-size: 36px;
  }
  .statistic-added {
    margin-top: 10px;
    font-size: 14px;
    color: rgba(0,0,0,.65);
    > .count {
      color: #FF4000;
    }
  }
}
.my-share-wrap-works {
  > .title {
    margin-left: 100px;
    margin-right: 100px;
    padding-top: 10px;
    border-top: solid 1px #E2E9EB;
    text-align: center;
    display: block;
    position: relative;
  }
  > .share-works {
    margin-top: 20px;
  }
}
.switch-content {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  .switch {
    padding: 5px;
    color: #607376;
    cursor: pointer;
  }
  .selected {
    color: #12B0C7;
  }
}
</style>
