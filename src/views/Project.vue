<template>
  <div class="project-container">
    <main class="main-container">
      <div class="main-box">
        <div class="project-header">
          <div class="title">项目空间</div>
          <router-link class="backtrack" to="/home">返回主页</router-link>
        </div>
        <div class="subjects-container">
          <div class="container">
            <div class="subject-info">
              <div class="info-name">推荐</div>
              <div class="subject-img">
                <img src="https://zhishi.oss-cn-beijing.aliyuncs.com/static/mp/subject/Popular_recommendation.png">
              </div>
            </div>
            <div class="projects-box">

            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'mini-project',
}
</script>

<style lang="less" scoped>
.project-container {
  height: 100%;
  width: 100%;
  position: relative;
  main {
    height: 100%;
    width: 100%;
    background-image: url(https://www.xiguacity.cn/assets/web/new-bg-2b773aa0592b21f6ab4f15e94e3cc50315d6acf5c41651ce9bfe2d195968141d.png);
    background-repeat: repeat-x;
    background-color: #113163;
  }
  .main-container {
    min-width: 1370px;
    display: flex;
    flex: 1 0 auto;
  }

  .main-box {
    flex: 1;
  }

  .project-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    padding: 30px 30px 0;
    font-size: 24px;
    text-align: center;
    color: #fff;
    background-color: rgba(3,22,47,0.7);
    .title {
      display: inline-block;
    }
    .backtrack {
      float: right;
      width: 148px;
      font-size: 20px;
      padding: 8px 0 6px;
      border-radius: 9px;
      color: #fff;
      background-color: #2FB475;
      box-shadow: 0 5px 3px 0 #298E5E;
      transition: all .3s ease;
      &:hover {
        box-shadow: 0 3px 1px 0 #298E5E;
        transform: translateY(2px);
      }
    }
  }
  .container {
    display: flex;
    justify-content: space-around;

    padding: 150px 30px 30px;
    background-image: url(https://zhishi.oss-cn-beijing.aliyuncs.com/static/mp/subject/Popular_recommendation_map.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    
    .subject-info {
      width: 30%;
      .info-name {
        text-align: center;
        font-size: 20px;
        color: #fff;
      }
    }
    .projects-box {
      width: 60%;
      height: 570px;
      border-radius: 10px;
      background-color: rgba(0,0,0,0.6);
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      overflow: auto;
    }
  }

}
</style>

