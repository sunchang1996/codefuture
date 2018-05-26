<template>
  <div class="diablog-container" @click.self="handleClick">
    <div class="diablog-box dialogIn" ref="diablogBox">
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
        <button class="confirm button">确定</button>
      </div>
    </div>
  </div>  
</template>
<script>
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
    hasSwitch: Boolean
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleClick() {
      const diablog = this.$refs.diablogBox
      diablog.classList.remove('dialogIn')
      diablog.classList.add('dialogOut');
      console.log(diablog.classList)

      this.$emit('update:hasSwitch', !this.hasSwitch)
    }
  }
}

</script>
<style lang="less" scoped>
.diablog-container{
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  
  .diablog-box{
    width: 500px;
    background-color: #fff;
    
  }
  .title{
    text-align: center;
    font-size: 30px;
    color: #575757;
    font-weight: 600;
    margin: 0;
    padding: 20px 0;
  }
  .describe{
    text-align: center;
    font-size: 13px;
    color: #797979;
    font-weight: 400;
    margin: 0;
  }
  .text-content{
    margin-top: 10px;
    text-align: center;
    > input {
      width: 90%;
      height: 43px;
      border: 1px solid #d7d7d7;
      border-radius: 3px;
      padding: 0 12px;
      font-size: 18px;
      background:none;    
      outline:none;    
    }
  }
  .btn-wrap{
    display: flex;
    justify-content: space-around;
    .button {
      width: 120px;
      padding: 10px 0;
      margin: 20px 0;
      color: #fff;  
          
      font-size: 18px;
      font-weight: 500;
      border-style: none;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
    .cancel {
      background-color: #C1C1C1;
    }
    .confirm {
      background-color: rgb(140, 212, 245);
    }
  }
  
}

</style>

