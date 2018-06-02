<template>
  <div class="milestone-container">
    <card 
      class="card"
      title="新手任务"
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
    describe: {
      type: String,
      default: '新手任务'
    }
  },
  components: {
    card
  }
}
</script>
<style lang="less" scoped>
.milestone-container {
  position: absolute;
  top: 71%;
  left: 30%;
  width: 7%;
  height: 12%;
  
  background-size: 70% 89%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url('https://m.xiguacity.cn/static/map/state/1111.gif');
  cursor: pointer;
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

