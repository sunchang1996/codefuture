<template>
  <div class="switcher-container">
    <div 
      class="switcher-navbar"
      :style="{ backgroundColor: titleBg }">
        <div 
          class="nav"
          v-for="(nav, index) in navList"
          :key="index"
          @click="handleClick(nav.name)"
          :class="{ active: nav.name === currentNav }">
            {{ nav.content }}
        </div>
      </div>

      <div 
        class="switcher-content" 
        :style="{ backgroundColor: contentBg }"
        >
        <slot :name="currentNav"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'switcher',
  props: {
    navList: Array,
    titleBg: {
      type: String,
      default: '#DADADA',
    },
    contentBg: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      currentNav: this.navList[1].name,
    }
  },
  methods: {
    handleClick(val) {
      this.currentNav = val
    }
  },
}
</script>

<style lang="less" scoped>
.switcher-container {
  // display: flex;
  // justify-content: space-around;
  .active {
    background-color: #fff
  }
  .switcher-navbar {
    display: flex;
    justify-content: space-around;
    .nav {
      width: 50%;
      padding: 10px 0;
      text-align: center;
      font-weight: 400;
      color: #868686;
    }
  }
}
</style>
