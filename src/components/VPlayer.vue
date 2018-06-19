<template>
  <!-- 视频播放 -->
  <div class="player-wrapper" v-if="hasPlay">
    <div class="v-player">
      <div class="player-box">
        <div class="close-wrap">
          <div class="player-btn" @click="handleClose">
            <i></i>
            <span>关闭视频</span>
          </div>
        </div>
        <div class="player-loading" style="display: none">
          <div class="loading-animation">
            <div class="loading-img"></div>
            <div class="loading-text">
              视频在拼命加载中，请稍等...
            </div>
          </div>
          <div class="refresh-box">
            <div class="player-btn">
              刷新
            </div>
          </div>
        </div>
        <div class="video-box">
          <video autoplay controls class="video" src="https://v.xiguacity.cn/videos_high/f8ffb239401b49de9430fb10e31c6177L0-1-18-720.mp4"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-player",
  props: {
    hasPlay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // hasPlay: false,
    }
  },

  methods: {
    handleClose() {
      // this.hasPlay = false
      this.$emit('update:hasPlay', false)
    }
  }
}
</script>

<style lang="less" scoped>

.player-wrapper:hover .close-wrap{
  display: block;
}
.player-wrapper{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  .v-player, .player-box {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .v-player {
    min-width: 710px;
    padding: 5px;
    border-radius: 5px;
    background-color: #000;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    z-index: 11;
  }
  .close-wrap {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 15;
  }
  .player-btn{
    display: inline-block;
    min-width: 88px;
    height: 56px;
    line-height: 56px;
    padding: 5px 12px 3px;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    background-color: #ff5858;
    box-shadow: 0 5px 3psx 0 #ad3232;
    cursor: pointer;
    transition: all .3s ease;
  }
  .player-loading {
    display: none;
  
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: rgba(0,0,0,.8);
    z-index: 14;
    .loading-text {
      margin-top: 18px;
      font-size: 16px;
      color: #ff5858;
    }
  }
  .refresh-box {
    margin-top: 50px;
    text-align: center;
  }
  .video-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .video {
      width: 100%;
      max-height: 432px;
      display: block;
      border-radius: 3px;
      background-color: #122e52;
    }
  }
}
</style>
