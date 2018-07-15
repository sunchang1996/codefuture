<template>
  <div class="card-section">
    <div class="content">
      <div class="info" v-show="info === '头像'">
        <img :src="value" width="68" height="68">
      </div>
      <div class="info" v-show="info !== '头像'">{{ info }} {{value}}</div>
      <div class="value" @click="handleClick(info)">{{ operate }}</div>
      <!-- <div class="value"></div> -->
      <transition name="bounce">
        <DialogBox 
          ref="dialog" 
          :hasSwitch.sync="hasSwitch" 
          v-if="hasSwitch && !disabled"
          :title="title"
          :selectType="typeName"
          :describe="describe"></DialogBox>      
      </transition>
      <upload-image 
        ref="uploadImage"
        v-if="info === '头像'"></upload-image>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
import DialogBox from './DialogBox'
import UploadImage from './UploadImage'

export default {
  name: 'card-section',
  props: {
    info: String,
    value: [String, Number],
    operate: [String, Number],
    title: String,
    describe: String,
    disabled: {
      type: Boolean,
      default: false
    },
    typeName: String
  },

  data() {
    return {
      hasSwitch: false,    
    }
  },
  components: {
    DialogBox,
    UploadImage    
  },

  methods: {
    handleClick(val) {
      if (val === '头像') {
        this.$refs.uploadImage.clickOpen()
        return;
      }
      this.hasSwitch = true
    }
  }
}
</script>
