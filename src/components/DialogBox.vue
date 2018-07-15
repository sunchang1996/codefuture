<template>
  <div class="dialog-container" @click.self="handleClick">
    <div class="dialog-box dialogIn" ref="dialogBox">
      <h1 class="title">{{ title }}</h1>
      <p class="describe">{{ describe }}</p>
      <div class="text-content">
        <input 
          type="text" 
          v-model="content"
          placeholder="请输入内容">
      </div>
      <div class="btn-wrap">
        <button class="cancel button" @click.stop="handleClick">取消</button>
        <button class="confirm button" @click="handleSubmit">确定</button>
      </div>
    </div>
  </div>  
</template>
<script>
import event from '@/utils/event';

export default {
  name: 'diablog-box',
  props: {
    title: {
      type: String,
      default: '这是一个标题'
    },
    describe: {
      type: String,
      default: '这是一段描述'
    }, 
    hasSwitch: Boolean,
    selectType: String,
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleClick() {
      const diablog = this.$refs.dialogBox
      diablog.classList.remove('dialogIn')
      diablog.classList.add('dialogOut');
  
      this.$emit('update:hasSwitch', !this.hasSwitch)
    },
    handleSubmit() {

      event.$emit('onChange', { [this.selectType]: this.content })
      this.$emit('update:hasSwitch', !this.hasSwitch)
    }
  }
}

</script>
