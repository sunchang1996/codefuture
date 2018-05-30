<template>
  <div class="card-section">
    <div class="content">
      <div class="info">{{ info }}</div>
      <div class="value" @click="handleClick(info)">{{ value }}</div>
      <!-- <div class="value"></div> -->
      <transition name="bounce">
        <DialogBox ref="dialog" :hasSwitch.sync="hasSwitch" v-if="hasSwitch"></DialogBox>      
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
