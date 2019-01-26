<template>
  <b-alert variant="success" show class="position-absolute w-100px" :style="infoPosStyle()">ぼくはおさかな</b-alert>
</template>

<script>
export default {
  props : {
    top     : Number,
    left    : Number
  },
  data(){
    return {
      width   : 100,
      opacity : 1
    }
  },
  watch : {
    top(){
      this.downOpacity()
    },
    left(){
      this.downOpacity()
    }
  },
  methods : {
    infoPosStyle() {
      return {
        top : (this.top - this.width/2) + 'px',
        left : (this.left - this.width/2) + 'px',
        opacity : this.opacity
      }
    },
    downOpacity() {
      if(this.opacity <= 0) {
        return
      }
      this.opacity -= 0.1
      setTimeout(this.downOpacity.bind(this),100)
    }
  }
}
</script>

<style>
.w-100px {
  width : 100px;
}
</style>
