<template>
  <!-- 地图小任务 -->
  <div class="milestone-container pointer" :style="{ top, left, 'background-image': `url(${backgroundImage})`}">
    <card 
      class="card"
      :title="describe"
      subtitle="好棒哦"
      cardDesc="所有的水晶都被点亮了"></card>
    <p class="text"> {{ describe }}</p>
  </div>
</template>
<script>
import card from './Card'

export default {
  name: 'milestone',
  props: {
    state: {
      type: String
    },
    left: String,
    top: String,
    backgroundImage: {
      type: String,
      default: 'https://m.xiguacity.cn/static/map/state/1111.gif'
    },
    describe: {
      type: String,
      default: '新手任务'
    }
  },
  data() {
    return {
      isClose: false
    }
  },

  components: {
    card,
  },
}
</script>
<style lang="less" scoped>
.milestone-container {
  position: absolute;
  width: 8%;
  height: 12%;
  
  background-size: 70% 89%;
  background-repeat: no-repeat;
  background-position: bottom;
  > .card {
    display: none;
  }
  &:hover {
    .card {
      display: block;
    }
  }
  > .text {
    position: absolute;
    bottom: -30px;
    color: #ffffff;
    font-weight: 700;
    text-shadow: 0 0 20px black;
    width: 100%;
    text-align: center;
  }
}
</style>

