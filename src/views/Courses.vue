<template>
  <ul class="courses-container">
    <h1>请选择课程</h1>
    <li 
      class="level" 
      :class="{lock: !item.isUnlocked}" 
      v-for="(item, index) in liveList" 
      :key="index"
      @click="handleChange(item)">
        <img :src="item.image">
        <div class="lock-wrap" v-show="!item.isUnlocked">
          <div class="lock-icon">
            <img :src="item.lockImg" >
          </div>
          <h2>续课后开放</h2>
        </div>
        <h2>{{ item.live}}</h2>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'courses',
  data() {
    return {
      liveList: [
        {
          live: 'L0',
          image: 'https://m.xiguacity.cn/static/l3_resource/L0.png',
          isUnlocked: true,
          lockImg: 'http://m.xiguacity.cn/static/l3_resource/lock.png'
        },
        {
          live: 'L1',
          image: 'https://m.xiguacity.cn/static/l3_resource/L1.png',
          isUnlocked: true,
          lockImg: 'http://m.xiguacity.cn/static/l3_resource/lock.png'
        },
        {
          live: 'L2',
          image: 'https://m.xiguacity.cn/static/l3_resource/L2.png',
          isUnlocked: false,
          lockImg: 'http://m.xiguacity.cn/static/l3_resource/lock.png'
        },
        {
          live: 'L3',
          image: 'https://m.xiguacity.cn/static/l3_resource/L3.png',
          isUnlocked: false,
          lockImg: 'http://m.xiguacity.cn/static/l3_resource/lock.png'
        }
      ]
    }
  },

  methods: {
    handleChange(item) {
      this.$router.push(
        { 
          path: '/home',
          name: 'home',
          // query: {
          //   id: 1
          // },
          params: {
            // name: 'home',
            Url: 'https://m.xiguacity.cn/static/l3_resource/L1.png'
          }
        }
      )
      console.log('--------------', this.$route)
    }
  }
}
</script>

<style lang="less" scoped>
.courses-container {
  width: 95%;
  margin: 0 auto;
  > h1 {
    margin-top: 40px;
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: 6px;
    color: #fff;
  }
  .lock {
    filter: grayscale(100%);
    position: relative;
  }
  .level {
    width: 25%;
    display: inline-block;
    padding-right: 20px;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      max-width: fit-content;
      margin: 0 auto;
    }
    > h2 {
      margin-top: 40px;
      font-size: 50px;
      color: #ffffff;
      text-align: center;
    }
    .lock-wrap {
      position: absolute;
      right: 12px;
      bottom: 80px;
      width: 100%;
      .lock-icon {
        margin: 0 auto;
        > img {
          transform: scale(0.7);
        }
      }
      h2 {
        margin-top: 0;
        font-size: 30px;
        font-weight: inherit;
        color: #ffffff;
        text-align: center;
      }
    }
  }
}
</style>


