<template>
  <div id="app-login">
    <van-nav-bar
      title="账号登录"
      :left-arrow='true'
       @click-left="clickGetBack"
    >
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field   placeholder="用户名/邮箱/手机"  name='username' @input="getUserValue"  :value="username" :clearable='true' type="text" required>
          <van-icon  class-prefix='van-icon' slot='left-icon' name='contact'></van-icon>
        </van-field>
        <van-field  placeholder="密码"  type="password"  name="password"  @input="getPsdValue"   :value="password" :clearable='true'>
          <van-icon  class-prefix='van-icon' slot='left-icon' name='user-circle-o'></van-icon>
        </van-field>
      </van-cell-group>
      <p>
        <a href="/forget">忘记密码</a>
        <a href="/register" class="fr">注册</a>
      </p>
      <van-button type="primary" size="normal" :disabled="username ==='' || password ===''">登录</van-button>
    </van-form> 
    <van-button type="primary" size="normal">短信验证码登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    clickGetBack(){
      this.$router.go(-1)
    },
    getUserValue(e){
      this.username = e
    },
     getPsdValue(e){
      this.password = e
    },
    onSubmit(value){
    
      this.$store.dispatch( 'getUserInfo',
        {
          userInfo:value.username,
          password:value.password,
          success:(context,res,userInfo,password)=>{
            let status = res.data.status
            let msg = res.data.msg
            if(status){
                this.$toast('登录成功')
                let userId = res.data.data.ID
                window.localStorage.username = JSON.stringify(userInfo),
                window.localStorage.password = JSON.stringify(password),
                window.localStorage.userId = JSON.stringify(userId)
                window.localStorage.signId = JSON.stringify('ba41741b-285c-4d42-90f1-92c865752cbb')
                window.localStorage.deviceId = JSON.stringify('32188842-46fa-4229-ba2f-aeb2efec7a4f')
                context.commit( 'PRESERVE_USER_IFON',{
                    userInfo:userInfo,
                    password:password,
                    userId
                })
                this.$router.push({
                    path:'home'
                })
            }else{
                this.$toast(msg)
            }
          }
      }) 
         
        
    }
  }
}
</script>

<style lang="stylus" scoped>
  p
    padding 10px 5px
    a
      color skyblue
      font-size 16px
  button
    width 300px
    border-radius 30px
    margin 10px 38px
    line-height 48px
    background-color #fb223e
    border 1px solid #fb223e
</style>