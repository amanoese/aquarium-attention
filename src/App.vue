<template>
  <div id="app" class="just-window-size"
    @click="click">
    <b-alert variant="success" show class="position-absolute w-100px" :style="infoPosStyle()">ぼくはおさかな</b-alert>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return {
      top     : 0,
      left    : 0,
      width   : 100,
      opacity : 1
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
    click(event){
      console.log(event.clientY,event.clientX)
      this.top  = event.clientY
      this.left = event.clientX
      this.opacity = 1;
      this.downOpacity()
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
body {
  /*background-color: rgba(0, 0, 0, 0.0);*/
  background-color: transparent;
}
.just-window-size {
  height : 100vh;
  width : 100vw;
}
.w-100px {
  width : 100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
