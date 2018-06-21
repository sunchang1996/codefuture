<template>
  <!-- 勋章 -->
  <div class="medal-container pointer" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <card 
      class="card"
      title="新手任务"
      subtitle="好棒哦"
      cardDesc="所有的水晶都被点亮了"></card>
  </div>
</template>
<script>
import card from './Card'

export default {
  name: 'medal',
  props: {
    backgroundImage: {
      type: String,
      default: 'https://m.xiguacity.cn/static/badges/badge_early_bird_true.png'
    }
  },
  components: {
    card
  }
}
</script>
<style lang="less" scoped>
.medal-container {
  position: relative;
  width: 68px;
  height: 68px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  > .card {
    display: none;
  }
  &:hover .card {
    display: block;
  }
}
</style>

