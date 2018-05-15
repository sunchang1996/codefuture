<template>
  <div class="navbar-wrapper">
    <ul class="nav-menus">
      <li class="menus" @click="handleClick" v-for="(nav, index) in navList" :key="index" :class="{active: nav.href === current}">
        <router-link :to="nav.href">
          <img class="menu-icon" :src="nav.src" alt="" srcset="">
          <span class="menu-text">{{ nav.name }}</span>
        </router-link>
      </li>
      <!-- <router-view></router-view> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data() {
    return {
      navList: [
        { href: '/homepage', src: 'https://m.xiguacity.cn/static/l3_resource/start-class.png', name: '回到主页' },
        { href: '/production', src: 'https://m.xiguacity.cn/static/l3_resource/work-space.png', name: '作品空间' },
        { href: '/curriculum', src: 'https://m.xiguacity.cn/static/l3_resource/choose-lecture.png', name: '课程选择' },
        { href: '/scratch', src: 'https://m.xiguacity.cn/static/l3_resource/scratch.png', name: 'scratch' },
      ],
      current: 'homepage',
    }
  },

  methods: {
    handleClick() {
      this.current = this.$route.path;
    }
  }
}
</script>

<style lang="less" scoped>
.navbar-wrapper{
  position: fixed;
  top: 140px;
  left: 0;
  .nav-menus{
    background-color: rgba(0,0,0,0.5);
    width: 100px;
    margin: 0 auto;
    border-radius: 0 8px 8px 0;
  }
  .menus{
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
    &:first-child{
      padding-top: 15px;
    }
    & > a {
      text-decoration: none;
      outline: none;
      cursor: pointer;
    }
    &:hover{
      filter: drop-shadow(0 0 10px #adff2f);
    }
    &.active {
      filter: drop-shadow(0 0 10px #adff2f);
    }
  }
  .menu-icon{
    width: 60px;
    height: auto;
    margin: 0 auto;
    display: block;
  }
  .menu-text{
    display: block;
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
    font-weight: 300;
    text-align: center;
  }
}
</style>
