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
        {info: '头像', value: '设置头像' },
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
