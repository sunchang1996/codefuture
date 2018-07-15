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
            :value="item.value"
            :operate="item.operate"
            :title="item.title"
            :describe="item.describe"
            :disabled="item.disabled"
            :typeName="item.name"></card-section>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardSection from './CardSection'
import event from '@/utils/event'

export default {
  name: 'setting',
  props: {
    userData: 'String'
  },
  data() {
    return {
      sectionList: [
        {info: '头像', name: 'avatar', value: '', title: '更改你的头像', operate: '更改头像' },
        {info: '昵称:', name: 'nickname', value: '', title: '设置昵称!', describe:'在 codefuture 内部的昵称', operate: '设置昵称' },
        {info: '学号:', name: 'studentId', value: '', operate: '123456', disabled: true },
        {info: '学名:', name: 'name', value: '', title: '设置学名!', describe:'设置你的学名，在颁发证书的时候有用哦！', operate: '设置学名' },
        {info: '地址:', name: 'address', value: '', title: '更新地址', describe:'', operate: '设置/修改' },
        {info: '性别:', name: 'gender', value: '', operate: '男 / 女', disabled: true },
        {info: '年龄:', name: 'age', value: '', title: '设置年龄！', describe:'请输入您孩子的年龄', operate: '设置/修改' },
        {info: 'QQ:', name: 'QQ', value: '', title: '更新QQ密码', describe:'您现在的QQ密码是:', operate: '设置/修改' },
        {info: '密码', name: 'password', value: '',  title: '设置密码！', describe:'设置密码后，就可以用学号加密码登录，不需要爸爸妈妈的微信号啦',operate: '设置/修改' },
      ],
      selectEditObject: '',
    }
  },
  mounted() {
    this.getMeUer();
    event.$on('onChange', (value) => {
      this.selectEditObject = value
      this.setMeUser();
    })
  },
  methods: {
    getMeUer() {
      const token = this.$localStore.get('FUTURE_WEB_TOKEN')
      this.$axios.get('http://localhost:3000/user/me', { Headers: {
          Authorization: token
        } 
      }).then((res) => {
        const result = res.data.user;
        this.sectionList.forEach((item) => {
          for (const key in result) {
            if (result.hasOwnProperty(key)) {
              const element = result[key];
              if (item.name === key ) {
                item.value = element;
              }
            }
          }
        })
      })
    },
    setMeUser() {
      const token = this.$localStore.get('FUTURE_WEB_TOKEN')
      this.$axios.put('http://localhost:3000/user/edit', this.selectEditObject, { Headers: {
          Authorization: token
        },
      })
      .then((res) => {
        this.getMeUer()
      })
    }
  },
  components: {
    CardSection
  }
}
</script>
