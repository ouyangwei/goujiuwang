<template>
  <div id="app-home-list">
    <div class="notice">
      <div class="notice_l fl">
        <img src="/Images/hot.png" alt="">
      </div>
      <van-swipe  class="notice_r fr" vertical :autoplay="3000" :show-indicators="false" >
        <van-swipe-item v-for="notice in notices" :key="notice.id">  {{notice.title}} </van-swipe-item>
      </van-swipe>
    </div>
    <div class="img_list">
      <van-row type="flex">
        <van-col v-for="img in imgList" :key="img.id">
          <a :href="img.url">
            <img :src="img.image" alt="">
          </a>
        </van-col>
      </van-row>
    </div>
    <div class="secods_goods">
      <van-row type="flex">
        <van-col v-for='good in secodsGoods' :key='good.id'>
          <a :href="good.url">
            <img :src="good.imgUrl" alt="">
          </a>
        </van-col>
      </van-row>
    </div>
    <div class="import_goods">
       <van-row type="flex" class="goods_row">
        <van-col :span="good.span" v-for='good in importGoods' :key='good.id'>
          <a :href="good.url">
            <img :src="good.imgUrl" alt="">
          </a>
        </van-col>
      </van-row>
      <van-row class="icon_row">
        <van-col span="8" v-for='(icon,idx) in icons' :key="idx">
          <img :src="icon.imgUrl" />
          <span>{{ icon.title }}</span>
        </van-col>
      </van-row>
      <div class="icon_t">
        <a href="#">
          <img src="http://img0.gjw.com/famous/2021/0802/142f1b6ce7114db4ac9ffa3a5b948220.jpg" alt="">
        </a>
      </div>
      <div class="icon_b">
        <a href="#">
          <img src="http://img0.gjw.com/famous/2021/0630/c3380ff5509d45b4887a866f9e7e80a2.jpg" alt="">
        </a>
      </div>
    </div>
    <van-tabs :border="true">
      <van-tab v-for="index in indexs" :title="index.title" :key="index.id">
        <app-home-list-item></app-home-list-item>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default { 
  name: 'AppHomeList',
  data(){
    return {
      indexs:[
        {id:'精选',title:'精选'},
        {id:'白酒',title:'白酒'},
        {id:'葡萄酒',title:'葡萄酒'},
        {id:'清酒洋酒',title:'清酒洋酒'},
        {id:'黄酒啤酒',title:'黄酒啤酒'},
        {id:'年份老酒',title:'年份老酒'},
      ],
      notices:[
        {id:'特卖',title:'清仓特卖'},
        {id:'防骗',title:'温馨提示 谨防上当受骗'}
      ],
      imgList:[],
      secodsGoods:[
        {id:'尊享',imgUrl:'http://img0.gjw.com/famous/2021/0731/8f53e097881e43beaa840c56dea55951.jpg',url:'#'},
        {id:'经典',imgUrl:'http://img0.gjw.com/famous/2021/0802/647dbe55ed0f404b879aa9fe7460b756.jpg',url:'#'},
      ],
      importGoods:[
        {id:'美酒',imgUrl:'http://img0.gjw.com/famous/2021/0731/da1a99e7ac74481ab82c20035b416954.jpg',url:'#',span:12},
        {id:'威士忌',imgUrl:'http://img0.gjw.com/famous/2021/0702/ce3226fc466c4d1f82304d503b7e006a.jpg',url:'#',span:6},
        {id:'进口',imgUrl:'http://img0.gjw.com/famous/2021/0702/7c82e2b8f54044518f1345d61b96a091.jpg',url:'#',span:6},
      ],
      icons:[
        {imgUrl:'Images/quality.png',title:'正品保证'},
        {imgUrl:'Images/cargo.png',title:'开箱验货'},
        {imgUrl:'Images/loss_ration.png',title:'赔付保障'}
      ]
    }
  },
  methods:{
    getImgList(){
      this.$http.get('/data/banners.json',{}).then(res=>{
        this.imgList = res.data.imageList
      })
    }
  },
  mounted(){
    this.getImgList()
  }
}
</script>

<style lang="stylus" scoped>
  .notice
    width 100%
    height 40px
    margin 8px auto
    overflow: hidden
    padding 0 15px 
    .notice_l
      width 85px
      height 30px
      border-right 1px #ccc solid
      margin-right 5px
      img 
        width 80px
    .notice_r
      width 254px
      height 30px
      .van-swipe-item
        height 30px
        font-size 14px
        line-height 30px
  .img_list
    padding 0 15px
    width 100%
    height 182px
    .van-row
      height 100%
      flex-wrap wrap
      .van-col
        flex 20%
        margin 10px auto
        img 
          width 69px
          height 69px
  .secods_goods
    margin 10px 0
    .van-row
      justify-content space-between
      img 
        height 150px
  .import_goods
      padding 0 15px
      .goods_row
        img 
          height 110px  
      .icon_row
        margin 10px 0
        .van-col
          padding-left 4px
          img
            float left
            width 22px
            height 22px
            margin-top 4px
          span 
            font-size 14px
            color #fb223e
            margin-left 14px4
      .icon_t
        img 
          height 128px
      .icon_b
        img 
          height 66px
  .van-tabs
    margin-top 10px
    .van-tabs__wrap
      border 1px solid #ccc
</style>