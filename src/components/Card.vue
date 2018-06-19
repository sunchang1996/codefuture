<template>
  <div class="card-wrapper" @click="handleClick">
    <div class="card-title">{{ title }}</div>
    <p class="card-subtitle first">{{ subtitle }}</p>
    <p class="card-subtitle">{{ cardDesc }}</p>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    title: String,
    subtitle: String,
    cardDesc: String,
    color: String
  },
  methods: {
    handleClick() {

    }
  }
}
</script>
<style lang="less" scoped>
.card-wrapper {
  position: absolute;
  left: 50%;
  bottom: 118%;
  width: 300px;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;

  background-color: rgba(0,0,0,0.85);
  transform: translateX(-50%);
  z-index: 9;
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(0,0,0,.85);
  }
  > .card-title {
    color: #fff;
    border-bottom: 1px solid #333;
    padding-bottom: 10px;
    text-align: center;
  }
  > .first {
    margin-top: 15px;
  }
  > .card-subtitle {
    text-align: center;
    color: #05f709;
  }
}
</style>

