<template>
    <div id="app-home-list-item">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多啦"  
          :immediate-check='false'
          offset=10   
          @load="onLoad"
        >
          <div class="list-item" v-for='(listItem,idx) in listItems' :key="idx">
              <a href="#">
                  <img :src="listItem.Pic | capitalize" alt="" class="pic" v-if='listItems.length'>
                  <img src="../../assets/loading.gif" alt="" class="pic" v-else>
                  <p class="tit2">{{ listItem.ProductName }}</p> 
                  <div class="tag" v-if="listItem.activityTitle"><span> {{ getAtivityname(listItem.activityTitle) }} </span></div> 
                  <div class="tag" v-else><span></span></div>
                  <div class="red">￥{{ listItem.ActivityMoney }}</div>
              </a>
          </div>
        </van-list>
      <app-nav></app-nav>
  </div>
</template>

<script>
export default {
  name: 'AppHomeListItem',
  data(){
    return {
        listItems:[],
        loading: false,
        finished: false,
        pageindex:1,
        pagesize:20,
        userId:localStorage.userId ? JSON.parse(localStorage.userId) : 0,
        signId :localStorage.signId ? JSON.parse(localStorage.signId) : 0
    }
  },
  methods:{
    getItems(){
      this.$http.get('api/BtCApi/Home/GethomeProductByhot',{
        params:{
            seriesid: 0,
            pageindex: this.pageindex,
            pagesize: this.pagesize,
            userId: this.userId,
            signid: this.signId
        }
      }).then((res) => {
        let items = res.data.data
        if(this.pageindex === 12) {
            this.finished = true
        }else{
          this.finished = false
        }
        this.listItems = this.listItems.concat(items)
        this.loading = false
      })
    },
    onLoad(){
      this.pageindex++
      this.getItems()
    },
    getAtivityname(activityTitle){
      if(activityTitle.length!=0){
        let Ativityname = activityTitle[0].Ativityname 
        return Ativityname
      }
      return ''
     
    }
  },
  mounted(){
    this.getItems()
  },
  filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = 'http://img0.gjw.com/product/' + value
        return value
    }
}
}
</script>

<style lang="stylus" scoped>
    #app-home-list-item
      .van-list
        display flex
        flex-wrap wrap
        margin-top 10px
        .van-list__placeholder
          text-align center
        .list-item 
          width 175px
          margin 0 5px 10px 6px
          height 265px
          border #eee 1px solid
          a
            color #999
            width 96%
            display block
            margin 0 auto
            img 
              width 168px
              height 168px
            p.tit2 
              color #666
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              line-height 1.2
              margin 5px 0
              height 36px
              font-size 14px
            .tag 
              text-align left
              height 22px
              clear both
              span 
                border-radius 5px
                padding 2px
                font-size 10px
                color #fb223e
            .red
              margin 5px 0
              color #fb223e
              font-size 14px
</style>