<template>
  <div id="app-home-banner">
    <van-search  shape="round" placeholder="请输入商品名称" />
    <van-swipe :autoplay="3000" indicator-color="#ff6600">
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
            <a :href="banner.url"><img v-lazy="banner.image" /></a>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'AppHomeBanner',
  data() {
    return {
     banners:[]
    }
  },
  methods:{
      getBanners(){
          this.$http.get('/data/banners.json',{}).then(res=>{
              console.log(res)
              this.banners = res.data.banners
          })
      }
  },
  mounted(){
      this.getBanners()
  }
}
</script>
<style lang="stylus" scoped>
    #app-home-banner
        position relative 
        height 180px
        .van-search
            position absolute 
            width 360px
            height 25px
            left 8px
            top 0
            z-index 99
            margin-top 10px
           .van-search__content
                border-radius 6px
                background #fff
        .van-swipe
            height 180px
            .van-swipe-item
                height 180px
                img 
                    height 100%
                    background-size cover
                    background-position center
</style>