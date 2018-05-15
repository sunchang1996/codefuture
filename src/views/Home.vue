<template>
  <main class="main-content">
    <div class="content-fluid">
      <img src="https://m.xiguacity.cn/static/map/0/2.png" alt="" srcset="" width="100%">
    </div>
  </main>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
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
    margin-top: 0;
    padding-top: 20px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 75%;
  }
}
</style>

