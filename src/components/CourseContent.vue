<template>
<!-- 课程内容 -->
  <div class="course-wrapper" v-if="isClose">
    <div class="border-box1">
      <div class="border-box2">
        <div class="border-box3">
          <div class="cards-header">
            {{ title }}
            <div class="button-close">
              <div class="player-btn">
                <div class="player-btn-backdrop close"></div>
                <div class="player-btn-content close-btn" @click="handleClose"></div>
              </div>
            </div>
          </div>
          <div class="cards-container">
            <div class="card">
              <div class="card-container">
                <div class="card-head-img bg-image"></div>
                <div class="card-content">
                  {{ courseName }}
                </div>
                <div class="card-button">
                  <div class="player-btn">
                    <div class="player-btn-backdrop react-button"></div>
                    <div class="player-btn-content react-button">
                      复习
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cards-footer">
            <div class="footer-title">
              已获得勋章
            </div>
            <div class="footer-badges">
              <Medal></Medal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Milestone from './Milestone'
import Medal from './Medal'

export default {
  name: 'course-content',
  props: {
    title: {
      type: String,
      default: '新手任务'
    }, 
    courseName: {
      type: String,
      default: '主课'
    }
  },
  data() {
    return {
      isClose: true,
    }
  },
  components: {
    Milestone,
    Medal
  },

  methods: {
    handleClose() {
      this.isClose = false;
    }
  }
}
</script>
<style lang="less" scoped>
.course-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 700px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  z-index: 99;
  .border-box1 {
    border: 2px solid #000;
    border-radius: 11px;
    box-shadow: 0 0 10px 0 #000;
  }
  .border-box2 {
    border: 5px solid #fee545;
    border-radius: 10px;
  }
  .border-box3 {
    min-width: 600px;
    min-height: 600px;
    padding: 5px;
    border-radius: 5px;
    background-color: #063969;
  }
  .cards-header {
    position: relative;
    height: 52px;
    line-height: 52px;
    font-size: 28px;
    text-shadow: 0 2px 4px #000;
    color: #fff;
    text-align: center;
    background-color: #1975e8;
    > .button-close {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 5px;
      right: 0;
      cursor: pointer;
      .close {
        width: 40px;
        height: 41px;
        opacity: 0.5;
        background-color: inherit
      }
      .close-btn {
        width: 40px;
        height: 40px;
        background-image: url(//m.xiguacity.cn/static/haile_test/modal_close.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-color: inherit
      }
    }
  }
  .player-btn {
    position: relative;
    display: inline-block;
    margin-bottom: 10px;
    cursor: pointer;
    transition: opacity .3s ease;
    &:hover {
      opacity: .9;
    }
    &:hover .player-btn-content {
      transform: translateY(2px);
    }
    &:hover .player-btn-backdrop {
      top: 2px;
    }
  }
  .player-btn-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 137px;
    height: 42px;
    background-color: rgb(58, 173, 250);
    opacity: 0.5;
    cursor: pointer;
  }
  .cards-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 416px;
    margin-top: 5px;
    padding: 0 10px;
    background-color: #0b507f;
    .card-container {
      display: flex;
      width: 177px;
      height: 280px;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      background-color: #2B699D;
      > .card-head-img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
      }
      > .bg-image {
        width: 150px;
        height: 130px;
        background-image: url(https://m.xiguacity.cn/head_image/pre_studying.png);
        margin-top: 20px;
      }
      > .card-button {
        margin-bottom: 10px;
      }
      > .card-content {
        text-align: center;
        color: #fff;
      }
      .react-button {
        display: inline-block;
        border-radius: 4px;
        padding-bottom: 4px;
        cursor: pointer;
        transition: all .3s ease;        
      }
      .player-btn-content {
        width: 137px;
        height: 39px;
        text-align: center;
        line-height: 41px;
        font-size: 16px;
        border-radius: 4px;
        color: #fff;
        position: relative;
        background-color: rgb(58, 173, 250);
      }
    }
  }
  .cards-footer {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 135px;
    margin-top: 5px;
    background-color: #1c6b99;
    > .footer-title {
      font-size: 16px;
      color: #fff;
    }
    > .footer-badges {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }
  }
}
</style>
