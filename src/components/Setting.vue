<template>
  <div class="setting-container">
    <div class="card-wrap">
      <div class="card-header"></div>
      <div class="card-content">
        <div class="card-hole"></div>
        <div class="card-container">
          <card-section 
            v-for="(item, index) in sectionList" 
            :key="index"
            :info="item.info"
            :value="item.value"></card-section>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardSection from './CardSection'

export default {
  name: 'setting',
  data() {
    return {
      sectionList: [
        {info: '昵称: 阿畅', value: '设置昵称' },
        {info: '学号', value: '123456' },
        {info: '学名: 阿畅', value: '设置学名' },
        {info: '地址: 已设置', value: '设置/修改' },
        {info: '性别: 男', value: '男' },
        {info: '年龄: 6', value: '设置/修改' },
        {info: 'QQ: 1029841435', value: '设置/修改' },
        {info: '密码', value: '设置/修改' },
      ]
    }
  },
  components: {
    CardSection
  }
}
</script>

<style lang="less" scoped>
  .setting-container {
    width: 100%;
    .card-wrap {
      position: relative;
      width: 700px;
      margin: 0 auto;
      padding-top: 20px;
    }
    .card-header {
      position: absolute;
      margin: 0 auto;
      left: 50%;
      top: 0;
      margin-left: -18px;
      width: 36px;
      height: 86px;
      border: 1px solid rgba(0, 0, 0, .1);
      box-shadow: 0 0 3px rgba(0, 0, 0, .1);
      background: rgba(255,255,255,0.2);
      border-radius: 0 0 2px 2px;
    }
    .card-content {
      min-height: 100px;
      background: rgba(0,0,0,0.02);
      border: 1px solid rgba(0,0,0,0.1);
      margin: 50px;
      padding: 10px;
    }
    .card-hole{
      margin: 0 auto;
      width: 42px;
      height: 10px;
      border-radius: 6px;
      background-color: #EFEFF4;
      border: 1px solid rgba(0,0,0,0.15);
      margin-bottom: 10px;
    }
  }
</style>
