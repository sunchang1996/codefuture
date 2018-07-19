<template>
  <main class="main-content">
    <div class="content-fluid">
      <img :src="imageUrl" width="100%">
      <milestone
        @click.native="isShowCourse"
        :top="curriculum.top"
        :left="curriculum.left"
        :backgroundImage="curriculum.backgroundImage"
        :describe="curriculum.describe"
        v-for="(curriculum, index) in curriculums" :key="index"></milestone>
    </div>
    <CourseContent :isClose.sync="isClose"></CourseContent>
  </main>
</template>
<script>
import milestone from '@/components/Milestone'
import CourseContent from '@/components/CourseContent'

export default {
  name: 'home',
  data () {
    return {
      imageUrl: 'https://m.xiguacity.cn/static/map/0/2.png',
      curriculums: [
        {
          top: "71%",
          left: '30%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第一课",
          top: "70%",
          left: '16%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第二课",
          top: "57%",
          left: '7%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第三课",
          top: "43%",
          left: '11%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第四课",
          top: "43%",
          left: '29%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第五课",
          top: "34%",
          left: '43%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第六课",
          top: "22%",
          left: '42%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第七课",
          top: "4%",
          left: '44%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第八课",
          top: "20%",
          left: '59%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第九课",
          top: "31%",
          left: '65%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第十课",
          top: "48%",
          left: '68%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第十一课",
          top: "60%",
          left: '59%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第十二课",
          top: "69%",
          left: '65%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
        {
          describe: "第十三课",
          top: "75%",
          left: '76.3%',
          backgroundImage: "https://m.xiguacity.cn/static/map/state/1111.gif"
        },
      ],
      isClose: false,
    }
  },
  components:{
    milestone,
    CourseContent
  },
  

  methods: {
    isShowCourse() {
      this.isClose = true
    },
    getParams() {
    }
    
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': function() {
      console.log('-----', this.$route.params)
    }
  }
}
</script>

<style lang="less" scoped>
.main-content{
  padding: 1px 0 0 0;
  // position: relative;
  display: flex; 
  flex-direction: column; 
  flex: 1;
  min-height: 600px;
  .content-fluid{
    position: relative;
    margin-top: 0;
    padding-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
  }
}
</style>

