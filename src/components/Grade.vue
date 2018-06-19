<template>
  <div class="grade-container">
    <div class="grade-avatar">
      <img src="https://www.xiguacity.cn/avatar.jpg">
    </div>
  </div>
</template>
<script>
export default {
  name: 'grade'
}
</script>
<style lang="less" scoped>
  .grade-container {
    position: relative;
    width: 100%;
    padding-top: 64%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://www.xiguacity.cn/assets/web/grade/grade-0-52ddfea88f5b7d913086a82e772288db5cf31b44a417c602c39211615ee28aba.jpg');
    .grade-avatar {
      position: absolute;
      top: 3%;
      left: 44%;
      width: 7%;
      padding-top: 7%;
      > img {
        position: absolute;
        left: -32%;
        top: 30%;
        width: 100%;
        height: 100%;
        border: 3px solid #586e71;
        border-radius: 50%;
      }
    }
  }
</style>
