<template>
  <div class="homeword-container">
    <main class="main">
      <div class="container">
        <div class="avatar">
          <img src="../assets/avatar.jpg" width="70" height="70">
        </div>
        <div class="title">
          <h1> <span class="name">小朋友</span>的作品</h1>
          <div class="subtitle">完成了课程 2018-06-20 15:49</div>
        </div>
        <div class="video-wrap">
          <video autoplay controls  src="https://output.xiguacity.cn/homework/5ad82f2beb0a1971b138ec4d-c0a15cb991664f6794eea01c94c1d42d.mp4">
            你嘞浏览器不支持...
          </video>
        </div>
        <div class="comment-wrap">
          <div class="comment-title">老师点评</div>
          <div class="teather-avatar">
            <img src="../assets/avatar.jpg" width="50" height="50">
          </div>
          <div class="comment-content">
            <div class="content">
              <p>好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。好好学习，天天涨工资。</p>
            </div>
          </div>
        </div>
        <div class="share-works-status">
          <div class="iconfont icon-like1">
            <span>0</span>
          </div>
          <div class="iconfont eye icon-eye">
            <span>0</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.homeword-container {
  width: 100%;
  height: 100%;
  background-color: #EFEFF4;
  color: #607376;
  overflow-y: auto;
  > main {
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .container {
    position: relative;
    display: inline-block;
    width: 700px;
    padding: 40px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
    border-radius: 10px;
    background-color: #fff;
    > .title {
      text-align: center;
      margin-top: 10px;
      > h1 {
        font-size: 24px;
        display: inline;
      }
      .name {
        font-size: 24px;
        color: #32D2E9;
        font-weight: bold;
        display: inline;
      }
      .subtitle {
        margin-top: 5px;
        font-size: 14px;
        line-height: normal;
      }
    }
  }
  .comment-wrap {
    padding: 20px 0;
    text-align: left;
    .comment-title {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .teather-avatar{
      display: inline-block;
      border-radius: 50%;
      > img {
        border-radius: 50%;
      }
    }
    .comment-content {
      width: 90%;
      padding: 0;
    }
  }
}
.share-works-status {
  color: #12B0C7;
  > .iconfont {
    font-size: 24px;
  }
}
</style>
