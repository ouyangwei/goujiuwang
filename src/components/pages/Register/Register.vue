<template>
  <div id="app-register">
    <van-nav-bar
      title="注册"
      :left-arrow='true'
       @click-left="clickGetBack"
    >
    </van-nav-bar>
    <van-form @submit="onSubmit">
        <van-field   placeholder="请输入11位手机号"  name='phone' :clearable='true' type="text" v-model="mobile">
          <van-icon  class-prefix='fa' slot='left-icon' name='mobile' class="fa-2x"></van-icon>
        </van-field>
        <van-field  placeholder="请输入短信验证码"  type="text"   :clearable='true' v-model='captcha'>
          <van-icon  class-prefix='fa' slot='left-icon' name='indent'></van-icon>
          <button
            slot="button"
            @click='getCaptcha'
          >
            <span>获取验证码</span>
          </button>
        </van-field>
        <van-field  placeholder="密码"  type="password"  name="password"  :clearable='true' v-model='password' >
          <van-icon  class-prefix='van-icon' slot='left-icon' name='user-circle-o'></van-icon>
        </van-field>
        <van-field  placeholder="确认密码"  type="password"  name="confirmPassword" :clearable='true' v-model='confirmPassword'>
          <van-icon  class-prefix='van-icon' slot='left-icon' name='user-circle-o'></van-icon>
        </van-field>
       <van-checkbox v-model="checked"  checked-color="#ee0a24" style="padding:16px 0 0 15px;">
          <span class="van-checkbox__label" style="font-size:14px;">同意 
          <a href="#" class="red" style="color:#fb223e;">《同意协意并注册》</a>
        </span>
       </van-checkbox>
        
        <div style="margin: 20px;">
          <van-button round block type="info" native-type="submit" :disabled="mobile=='' || captcha=='' || password == ''|| confirmPassword=='' || !checked">注册</van-button>
        </div>
    </van-form>
  </div>
</template>

<script>

export default {
  name: 'AppRegister',
  data(){
    return {
      checked:true,
      mobile:'',
      captcha:'',
      password:'',
      confirmPassword:''
    }
  },
  methods:{
    clickGetBack(){
      this.$router.go(-1)
    },
    controlChecked(){
      this.checked = !this.checked
    },
    getCaptcha(){
      this.$http.post('api/BtCApi/Login/LoginSms',{
        Mob:this. mobile,
        type: 0
      }).then(res=>{
        if(res.status){
          this.$toast(res.msg)
        }
      })
    },
    onSubmit(){
      this.$router.push({
        path:'home'
      })
    } 
  }
}
</script>

<style lang="stylus" scoped>
/deep/ .van-field__button
          border-left #d7d7d7 1px solid
          padding-left 16px
          button
            width 100%
            height 100%
            border-radius 2px
            border 1px solid #f44
            background-color #fff
            span 
              color #f44
              height 30px
              padding 0 8px
              min-width 60px
              font-size 12px
              line-height 28px
    
</style>