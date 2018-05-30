<template>
  <div class="upload-wrapper" @click.self="clickCancel" v-if="hasShow">
    <div class="upload-inner" v-if="!isSucceed">
      <h1 class="avater-title">{{ title }}</h1>
      <div 
        class="drag-box" 
        :class="{'input-dragOver': dragOver}"
        @click="handleClick" 
        @drop.prevent="onDrop($event)"
        @dragenter.prevent="dragOver = false" 
        @dragover.prevent="dragOver = true">
          <div>文件拖拽到这里上传</div>
      </div>
      <input
        ref="input"
        @change="handleChange" 
        type="file"
        style="display: none">
    </div>
    <div class="succeed-inner"  v-if="isSucceed">
      <h1>{{ succeedTitle }}</h1>
      <div class="refresh">点击刷新页面</div>
      <button class="confirm" @click="handleCongirm">知道了</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload-image',
  props: {
    title: {
      type: String,
      default: '更改你的头像'
    },
    succeedTitle: {
      type: String,
      default: '上传成功！'
    }
  },
  data() {
    return {
      dragOver: false,
      isSucceed: false,
      hasShow: false,
    }
  },
  methods: {
    handleClick() {
      this.$refs.input.click();
    },
    clickOpen() {
      this.hasShow = true
    },
    clickCancel() {
      this.hasShow = false
    },
    handleChange(e) {
      const files = e.target.files;
      console.log('这里是什么', files)
      if (!files) {
        return
      }
      this.uploadFiles(files);
      this.$refs.input.value = null;
    },
    uploadFiles(files) {
      let postFiles = Array.prototype.slice.call(files);
      console.log('files 文件', postFiles)
      if (postFiles.length === 0) return;
      this.isSucceed = true
    },
    onDrop(e) {
      this.dragOver = false;
      this.uploadFiles(e.dataTransfer.files)
    },
    handleCongirm() {
      this.hasShow = false;
    }
  }
}
</script>

