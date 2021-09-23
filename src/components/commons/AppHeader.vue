<template>
  <div id="app-header" v-if ='show'>
    <a id="a_appdownload">
      <img src="/Images/appdown0105.jpg" target="_blank"> 
      <div class="deldownload-btn" @click ='vanish'></div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  data(){
    return {
      show:true
    }
  },
  methods:{
    vanish(){
      this.show = false
    }
  }
}
</script>

<style scoped lang="stylus">
  #app-header
    width 100%
    height 60px
    position relative
    top 0
    left 0
    img 
      width 100%
      height 60px
      background-size cover
      background-position center
    .deldownload-btn
      position absolute
      width 10% 
      height 100% 
      top 0px 
      left 0px
</style>