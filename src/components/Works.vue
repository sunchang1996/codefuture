<template>
  <div class="share-works-comments-wrap">
    <router-link to="/homeword" target="_blank" class="works-item">
      <div class="share-works-item" :style="{ height }" @click="handleClick">
        <img src="https://output.xiguacity.cn/homework_screenshot/5ad82f2beb0a1971b138ec4d-c0a15cb991664f6794eea01c94c1d42d.jpg" width="120" height="90">
        <p class="name" v-show="name">
          {{name}}
        </p>
        <div class="share-works-status">
          <div class="iconfont icon-like1">
            <span>0</span>
          </div>
          <div class="iconfont eye icon-eye">
            <span>0</span>
          </div>
        </div>
        <div class="overlay-share-date">
          <p class="info">06月19日</p>
          <p class="info">十二课时分享</p>
        </div>
      </div>
      <div class="comment-content">
        <div class="content">
          <p>好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'works',
  props: {
    name: String,
  },
  computed: {
    height() {
      return this.name ? '162px' : '132px'
    }
  },
}
</script>


<style lang="less" scoped>
.share-works-comments-wrap {
  width: 100%;
}
.share-works-item {
  position: relative;
  display: inline-block;
  width: 122px;
  // height: 132px;
  border: solid 1px #E2E9EB;
  &:hover {
    border: solid 1px #97AAAE;
  }
  > .name {
    border-bottom: solid 1px #E2E9EB;
    padding: 5px;
    color: #607376;
    text-align: center;
  }
  .share-works-status {
    display: flex;
    justify-content: space-between;
    margin:10px;
    > .eye {
      color: #4DB141;
    }
  }
  .overlay-share-date {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 60px;
    text-align: center;
    background: rgba(240,240,240,0.75);
    opacity: 0;
    &:hover {
      opacity: 1;
    }
    > .info {
      padding: 2px;
      margin: 0px;
      font-size: 12px;
      line-height: 15px;
      color: #607376;
    }
  }
}
</style>
