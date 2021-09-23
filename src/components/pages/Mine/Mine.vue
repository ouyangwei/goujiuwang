<template>
  <div id="app-mine">
    <div class="user mb50">
      <div class="usr_top login ">
        <div class="no_login" v-if="username == ''">
          <img src="/images/icon_head_no_login.png" alt=""> 
          <a href="/login">登录/注册 &gt;</a>
        </div> 
        <div class="login_box" v-else>
          <div class="user_img">
            <a href="#">
              <img src="/images/icon_head_no_login.png" alt="">
            </a>
          </div>
          <div class="user_info">
            <p><img  src="/images/mine_message_p.png" alt=""></p>
            <p>{{ userInfo.NickName != null ? userInfo.NickName : userInfo.Name }}</p> 
            <p>{{ userInfo.LevelName }}</p>
          </div>
        </div>
      </div>
      <div class="my_order">
        <van-cell-group>
          <van-cell title="我的订单" value="查看全部订单" is-link :border="false"></van-cell> 
          <van-row class="user-links">
            <van-col span="6" v-for='order in orders' :key='order.id'>
              <a :href="order.to">
                <div class="ord_ico">
                  <img :src="order.src" alt="">
                  <div class="van-icon__info">{{ order.num }}</div>
                </div>
                <p>{{ order.name }}</p>
              </a>
            </van-col>
          </van-row>
        </van-cell-group>
        <van-cell-group class="mt10">
          <van-cell title="我的钱包" value="查看明细" is-link :border="false"></van-cell> 
          <van-row class="user-links">
            <van-col span="8" v-for='burse in burses' :key='burse.id'>
              <a :href="burse.to">
                <p>{{ burse.num }}</p>
                <p> {{ burse.name }}</p>
              </a>
            </van-col>
          </van-row>
        </van-cell-group>
        </div>
        <van-cell-group class="user-group mt10">
          <van-row class="user-like">
            <van-col span="6" v-for='like in likes' :key='like.id' class="van-col">
              <a :href="like.to">
                <img :src="like.src" alt="">
                <p :class="{red:like.addClass}">{{ like.name }}</p>
              </a>
            </van-col>
          </van-row>
        </van-cell-group>
        <div class="hotGoods">
          <div class="bg_title">
            <b>推荐商品</b>
            <div class="line"></div>
          </div>
          <div class="tb_box swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for = 'banner in banners' :key = banner.id>
                  <a href="#">
                    <img :src="banner.image" alt="">
                  </a>
                  <div class="price">￥{{banner.price}}</div>
                  <div class="mask"></div>
                </div>
              </div>
          </div>
        </div>
    </div>
    <app-nav></app-nav>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper/js/swiper.min.js'
import { mapState } from 'vuex'
export default {
  name: 'AppMine',
  computed:{
    ...mapState({
      userId:state => state.commons.userId
    })
  },
  data(){
    return {
      banners:[],
      username:localStorage.username?JSON.parse(localStorage.username) : '',
      orders:[
        {id:'付款',name:'待付款',src:'/images/wd_01dfk.png',to:'#',num:0},
        {id:'发货',name:'待发货',src:'/images/wd_02dfh.png',to:'#',num:0},
        {id:'收货',name:'待收货',src:'/images/wd_03dsh.png',to:'#',num:0},
        {id:'评价',name:'待评价',src:'/images/wd_04dpj.png',to:'#',num:''}
      ],
      burses:[
        {id:'余额',name:'账户余额',to:'#',num:0},
        {id:'优惠券',name:'优惠券',to:'#',num:0},
        {id:'积分',name:'积分',to:'#',num:0}
      ],
      likes:[
        {id:'收藏',name:'商品收藏',src:'/images/icon_collection.png',to:'#',addClass:false},
        {id:'足迹',name:'浏览足迹',src:'/images/icon_foot_print.png',to:'#',addClass:false},
        {id:'电话',name:'400-722-1919',src:'/images/kfrx.png',to:'#',addClass:true},
        {id:'福利',name:'领券福利',src:'/images/bag.png',to:'#',addClass:false}
      ],
      userInfo:{}
    }
  },
  methods:{
    getBanners(){
      this.$http.post('api/BtCApi/ShopCar/GetEveryoneBuy?userId=0&signid=0',{
        userId: 0,
        signid: 0,
        DeviceId: '32188842-46fa-4229-ba2f-aeb2efec7a4f',
        PhoneVersion: null,
        ClientVersion: '1.0.0.1',
        ClientType: 0
      }).then(res=>{
        if(res.status){
        //   this.banners = res.data.bannerList
        console.log(res)
          Vue.nextTick(()=>{
            new Swiper('.swiper-container',{
              slidesPerView: 1,
              spaceBetween: 40,
              breakpointsBase: 'container',
              breakpoints: { 
              //当swiper宽度大于等于768
                768: { 
                  slidesPerView: 3,
                  spaceBetween: 20
                },
              }
            })
          })
        }else{
          this.$toast('网络有问题')
        }
      })
    },
    getUserInfo(){
      this.$http.post('api/BtCApi/User/GetUserInfo',{
        UserID:Number(localStorage.userId),
        Signid:JSON.parse(localStorage.signId),
        DeviceId:JSON.parse(localStorage.deviceId),
        PhoneVersion: null,
        ClientVersion: '1.0.0.1',
        ClientType: 0
      }).then(res=>{
        this.userInfo = res.data.data
      })
    }
  },
  mounted(){
    this.getBanners()
    if(localStorage.userId){
        this.getUserInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user 
      margin-bottom 50px
      color #333
      .usr_top.login
        background-color #2e313a
        height 160px
        color #666
        .no_login
          height 80px
          padding-top 40px
          line-height 80px
          img 
            width 110px
            height 80px
            float left
            padding 0 15px
          a
            color #fff
            font-size 18px
        .login_box
          margin-left 15px
          padding-top 40px
          .user_img
            float left 
            img 
              width 80px
              height 80px
              float left
              border-radius 50%
          .user_info
            color #fff
            float left
            p
              margin 8px auto
              font-size 12px
              padding 0 5px
              img 
                height 18px
      .my_order
        .user-links
          line-height 1.5
          padding 15px 0
          font-size 12px
          text-align center
          background-color #fff
          .ord_ico
            width 30px
            margin 0 auto
            position relative
            img 
              width 30px
              height 30px
            .van-icon__info
              color: #fff;
              left 100%
              top -.5em
              font-size .5em
              padding 0 .3em
              text-align center
              min-width 1.2em
              line-height 1.2
              position absolute
              border-radius .6em
              box-sizing border-box
              background-color #f44
              transform translateX(-50%)
        p
          margin 5px auto
          color #333
      .user-group
        background-color #fff
        .user-like
          padding 10px 0
          font-size 14px
          .van-col
            text-align center
            a
              color #333
              img 
                height 30px
                margin-top 10px
              p
                margin 10px 0
              p.red
                color red
      .hotGoods
        color #333
        .bg_title
          width 300px
          color #EEAA22
          margin 5px auto
          text-align center
          position relative
          b
            background-color #f4f5f7
            padding 0 10px
            height 35px
            line-height 35px
            font-size 14px
            position relative
            z-index 3
          .line
            border-bottom #eeaa22 1px solid
            height 0
            position absolute
            top 50%
            left 0
            width 100%
        .tb_box
          overflow hidden
          width 100%
          height 160px
          .swiper-slide
            width 160px !important
            margin-right 20px !important
            min-width 130px
            .price
              position absolute
              bottom 0
              left 0
              width 100%
              color #fff
              text-align center
              height 25px
              line-height 25px
              z-index 3
              font-size 14px
            .mask
              position absolute
              bottom 0
              left 0
              width 100%
              height 25px
              background-color rgba(0, 0, 0, 0.6)
</style>
