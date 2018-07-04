<template>
  <div class="login-container" style="background-image: url('https://m.xiguacity.cn/cdn/bg.jpg')">
    <main>
      <div class="header">
        <div class="title-cn">我们都居所凡尘 <br> 但仍有人抬头仰望星空</div>
      </div>
      <div class="login-wrap">
        <h2 class="title">
          欢迎登录 codefuture Scratch 编程课程
        </h2>
        <Switcher :navList='navList'>
          <div class="wx-content" slot="weixin">
            <div class="text">
              系统完善中，敬请期待，推荐用账号登录
            </div>
          </div>
          <div class="content_id" slot="student">
            <div>
              <div class="student-number number">
                <label for="stu_id">学号</label>
                <input type="text" id="stu_id">
              </div>
              <div class="student-password number">
                <label for="password">密码</label>
                <input type="password" id="password">
              </div>

              <div class="button-wrap">
                <div class="button">进入学习界面</div> 
              </div>
            </div>
          </div>

        </Switcher>
      </div>
    </main>
  </div>
</template>
<script>
import Switcher from '@/components/Switcher'
export default {
  name: 'login',
  data() {
    return {
      navList: [
        { 
          name: 'weixin',
          content: '用微信扫描二维码登录'
        },
        {
          name: 'student',
          content: '用学号密码登录'
        }
      ]
    }
  },
  components: {
    Switcher
  }
}
</script>
<style lang="less" scoped>
.login-container{
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: #607376;
  .header {
    line-height: 1.6;
    font-size: 38px;
    padding: 50px 50px 0 0;
    text-align: right;
    color: #fff;
    font-weight: 200;
  }
  .login-wrap {
    float: right;
    // width: 500px;
    width: 500px;
    height: 400px;
    border-radius: 10px;
    background-color: #fff;
    .title {
      text-align: center;
      padding: 15px 0;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      background-color: #F54154;
      border-radius: 10px 10px 0 0;
    }
  }
  .wx-content {
    margin-top: 30px;
    text-align: center;
  }
  .content_id {
    padding: 50px 30px 0;
    label {
      padding: 15px;
      font-size: 18px;
    }
    input {
      width: 60%;
      height: 40px;
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
      border: 2px solid #ccc;
      background-color: #f4f4f4;
      color: #f54154;
      outline:none;
    }
    .student-password {
      margin-top: 30px;
    }
    .button-wrap {
      padding: 15px;
      font-size: 18px;
      font-weight: 600;
      background-color: #0DAF5A;
      color: #fff;
      box-shadow: 3px 3px 0px 0px #0a8c48;
      border-radius: 8px;
      margin: 20px auto;
      cursor: pointer;
      &:hover {
        background-color: #0ec163;
        box-shadow: 4px 4px 0px 0px #0a8c48;
      }
      .button {
        text-align: center;
      }
    }
  }
}
</style>
