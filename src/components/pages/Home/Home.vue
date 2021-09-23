<template>
  <div id="app-home">
    <app-header></app-header>
    <app-home-banner></app-home-banner>
    <app-home-list></app-home-list>
    <!-- <app-nav></app-nav> -->
  </div>
</template>

<script>
import AppHomeBanner from './HomeBanner'
import AppHomeList from './HomeList'
export default {
  name: 'AppHome',
  components:{
    AppHomeBanner,
    AppHomeList
  },
  mounted(){
    this.$http.get('api/BtCApi/Home/GetHomePageImg',{
        params:{
          userId: 0,
          signid: 0
        }
    }).then((res) => {
        console.log(res)
    }),
    this.$http.get('api/BtCApi/Home/SeckillList',{
        params:{
         userid: 0
        }
    }).then((res) => {
        console.log(res)
    })
  }
}
</script>
<style lang="stylus" scoped>
 
</style>