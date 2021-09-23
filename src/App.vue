<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
  #app
    max-width 640px
    margin 0 auto
    min-width 320px
    background-color #fff
</style>