<template>
  <div id="app-cart">
      <van-nav-bar
      title="购物车"
      :rightText= "rightText"
      :fixed="true"
      @click-right="onclickShow"
    >
    </van-nav-bar>
    <div class="cart">
      <div class="no_goods">
        <div class="tip">
          <img src="/Images/cart_empty.png" alt="">
          <h5>你的购物车还没商品</h5>
          <p>快去逛逛~</p>
          <van-button size="small" type="danger" color="#fb223e" to="/">去首页</van-button>
          <div class="like">
            <img src="/Images/cart-bg.png" alt="">
          </div>
        </div>
        <div class="like_list">
          <van-row></van-row>
        </div>
      </div>
      <div class="cart_list">
        <van-submit-bar :price="3050" button-text="结算" @submit="onSubmit" button-type="danger" :disabled="disabled" v-if="show">
          <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
        <div class="cart_del" v-else>
          <van-checkbox  v-model="checked">全选</van-checkbox>
          <a href="javascript:;" class="fr red">删除</a>
          <a href="javascript:;" class="fr">加入收藏</a>
        </div>
      </div>
    </div>
    <app-nav></app-nav>
  </div>
</template>

<script>

export default {
  name: 'AppCart',
  data(){
    return {
      checked:false,
      disabled:true,
      show:true,
      rightText:'编辑'
    }
  },
  methods:{
    onSubmit(){
      this.$toast('提交成功')
    },
    onclickShow(){ 
      this.show = !this.show
      if(!this.show){
        this.rightText = '完成'
      }else{
        this.rightText = '编辑'
      }
      
     
    }
  }
}
</script>

<style scpoed lang="stylus">
#app-cart 
  .van-nav-bar__text 
    color #666
  .cart
    margin-top 50px
    margin-bottom 50px
    .no_goods
      .tip
        text-align center
        background-color #F4F5F7
        font-size 12px
        line-height 1.5
        img 
          border-radius 50%
          width 55px
          height 55px
          margin-top 40px
        h5
          color #252525
          font-weight normal
          margin 15px 0
        p
          margin 15px 0
        .van-button
          border-radius 3px
        .like
          img 
            width 100%
            height 100%
    .cart_list
      margin-bottom 100px
      .van-submit-bar
        bottom 50px
      .cart_del
        background #fff
        left 0
        bottom 50px
        width 100%
        z-index 100
        position fixed
        user-select none
        height 50px
        .van-checkbox
          width 74px
          height 30px
          float left
          margin 10px 0 10px 6px
          font-size 14px
        a
          background #ccc
          color #fff
          height 50px
          font-size 14px
          width 110px
          line-height 50px
          text-align center
        a.red
          background-color #fb223e
</style>
