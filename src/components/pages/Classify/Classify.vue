<template>
  <div id="app-classify">
     <van-search placeholder="请输入商品名称" shape="round"></van-search>
     <div class="classify_list">
      <div class="classify_list_item" v-for='list in classifyList' :key='list.PinYin'>
        <div class="title">
          <span>{{ list.TypeName }}</span>
          <a href="#">查看全部></a>
        </div>
        <van-row>
          <van-col span="12" v-for='item in list.TypeData' :key='item.PinYin'><a href="#">{{ item.Name }}</a></van-col>
        </van-row>
      </div>
     </div>
      <app-nav></app-nav>
  </div>
</template>

<script>

export default {
  name: 'AppClassify',
  data(){
    return {
      classifyList:[]
    }
  },
  methods:{
    getClassifyList(){
      this.$http.get('api/BtCApi/List/GetSeriesList',{}).then(res=>{
        this.classifyList = res.data.data.item_data
      })
    }
    
  },
  mounted(){
    this.getClassifyList()
  }
}
</script>

<style lang="stylus" scoped>
  #app-classify
    .classify_list
      width 100%
      border-top 1px solid #eee
      overflow hidden
      .title
        margin 0 auto
        width 368px
        height 35px 
        line-height 35px
        font-size 18px
        span 
          float left
        a 
          float right
          color #999
          font-size 12px
      .van-row
        .van-col
          background-color #f3f3f3
          font-size 13px
          line-height 35px
          margin-bottom 5px
          background-clip content-box 
          padding-left 2.5px
          padding-right 2.5px
          a          
            width 100%
            display block
            color #333
            line-height 35px
            text-align center
</style>
