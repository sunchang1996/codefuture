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
    DialogBox,
  },

  methods: {
    handleClick() {
      this.hasSwitch = true
    }
  }
}
</script>
