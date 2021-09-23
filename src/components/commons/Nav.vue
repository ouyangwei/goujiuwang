<template>
    <div id="app-nav">
        <!-- <router-link :to='nav.path' v-for="nav in navs" :key=nav.id exact>
            <i :class="nav.icon"></i>
            <span> {{nav.title}} </span>
        </router-link> -->
        <van-tabbar route active-color="#cd0011" inactive-color="#000">
            <van-tabbar-item replace :icon="nav.icon" :to='nav.path' v-for="nav in navs" :key=nav.id> {{ nav.title }} </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

export default {
  name: 'AppNav',
  data(){
      return {
          navs:[
            {id:'首页',title:'首页',icon:'wap-home-o',name:'home',path:'/'},
            {id:'分类',title:'分类',icon:'apps-o',name:'classify',path:'/classify'},
            {id:'福利',title:'专享福利',icon:'sign',name:'welfare',path:'/welfare'},
            {id:'购物车',title:'购物车',icon:'shopping-cart-o',name:'Cart',path:'/Cart'},
            {id:'我的',title:'我的',icon:'user-circle-o',name:'mine',path:'/mine'}
          ]
      }        
  },
  mothods:{
      getNavs(){

      }
  }
}
</script>

<style scoped lang="stylus">
    // #app-nav
    //     top-border-1px(#e4e4e4)
    //     position fixed
    //     z-index 100
    //     left 0
    //     right 0
    //     bottom 0
    //     width 100%
    //     height 50px
    //     display flex
    //     background-color #fff
    // #app-nav a
    //     flex 1
    //     height 100%
    //     display flex
    //     flex-flow column
    //     align-items center
    //     color #999999
    //     justify-content:space-around
    // span
    //     font-size 12px
    // i
    //     font-size 22px

    // .router-link-active
    //     background-color  #02a774
</style>
