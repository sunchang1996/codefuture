<template>
  <div id="app" style="background-color: #113163;"> 
    <main class="main">
      <div class="container">
        <header class="nav-header">
          <div class="top-nav-bar">
            <div class="content">
              <div class="student-wrap">
                <router-link to="">
                  <div class="avatar-box">
                    <img class="avatar" src="./assets/avatar.jpg" width="60" height="60">
                  </div>
                </router-link>
                <div class="student-info">
                  <span class="student-name">阿畅</span>
                  <span class="student-number">123456789</span>
                  <router-link to="/setting">
                    <div class="setting">
                        <span>设置</span>
                    </div>
                  </router-link> 
                </div>
              </div>
              <router-link class="student-level-box" to="/grade">
                <img src="https://m.xiguacity.cn/static/l3_resource/person_level/0.png" width="90">
                <p>我的等级</p>
              </router-link>
            </div>
          </div>

        </header>
        <Navbar></Navbar>
      </div>
    </main>
    <course-content></course-content>        
    <router-view/>
  </div>
</template>

<script>
import Navbar from './views/Navbar'
import CourseContent from '@/components/CourseContent'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    CourseContent    
  }
}
</script>

<style lang="less" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.container{
  display: flex;
  flex-direction: column;
  background-image: url('https://www.xiguacity.cn/assets/web/new-bg-2b773aa0592b21f6ab4f15e94e3cc50315d6acf5c41651ce9bfe2d195968141d.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.top-nav-bar {
  background-color: #06233e;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  .content{
    display: flex;
  }
  .student-wrap{
    display: inline-flex;
    margin-left: 20px;
    background-image: url(https://m.xiguacity.cn/static/l3_resource/avatar-bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 8px;
    padding: 5px 10px;
    vertical-align: middle;
  }
  .avatar-box{
    display: inline-block;
  }
  .avatar{
    width: 55px;
    height: 55px;
    margin: 5px 10px 3px 5px;
    border-radius: 50%
  }
  .student-info{
    position: relative;
    display: inline-flex;
    flex-direction: column;
    background-color: #0a4f7f;
    border: 2px solid #073969;
    position: relative;
    padding: 10px 25px 10px 15px;
    margin: 3px 0;
    border-radius: 5px;
    .student-name{
      display: inline-block;
    }
    .setting{
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
    }
  }
  .student-level-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 0 20px;
    border-radius: 8px;
    margin-left: 10px;
    text-decoration:none;
    color: #fff;
    & > p {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 15px;
    }
  }
  .router-view{
    background-color: #113163 
  }
}
</style>
