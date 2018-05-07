<template>
  <div class="container">
    <header class="nav-header">
      <div class="top-nav-bar">
        <div class="content">
          <div class="student-wrap">
            <router-link to="">
              <div class="avatar-box">
                <img class="avatar" src="../assets/avatar.jpg" width="60" height="60">
              </div>
            </router-link>
            <div class="student-info">
              <span class="student-name">阿畅</span>
              <span class="student-number">123456789</span>
            </div>
          </div>
        </div>
      </div>

    </header>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.top-nav-bar {
  background-color: #06233e;
  height: 100px;
  position: relative;
  display: felx;
  align-items: center;
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
  }
}
</style>

