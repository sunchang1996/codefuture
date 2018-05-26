<template>
  <div class="card-section">
    <div class="content">
      <div class="info">{{ info }}</div>
      <div class="value" @click="handleClick">{{ value }}</div>
      <!-- <div class="value"></div> -->
      <transition name="bounce">
        <DialogBox ref="dialog" :hasSwitch.sync="hasSwitch" v-if="hasSwitch"></DialogBox>      
      </transition>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
import DialogBox from './DialogBox'

export default {
  name: 'card-section',
  props: {
    info: String,
    value: [String, Number],
  },

  data() {
    return {
      hasSwitch: false
    }
  },
  components: {
    DialogBox    
  },

  methods: {
    handleClick() {
      this.hasSwitch = true
    }
  }
}
</script>

<style lang="less" scoped>
.card-section {
  width: 100%;
  background-color: #fff;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 86px;
  }
  .line {
    width: 80%;
    color: black;
    height: 2px;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    border-top: 1px solid #E2E9EB;
  }
  .info {
    padding-left: 15%;
  }
  .value {
    padding-right: 15%;
    color: #1890ff;
    cursor: pointer;
  }
}
</style>
