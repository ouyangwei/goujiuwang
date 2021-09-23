import axios from 'axios'
// import router from '../../router'
const actions = {
    getUserInfo(context, {userInfo,password,success}){
        axios.post('api/BtCApi/Login/APP_Login',{
            Mob:userInfo,
            LoginPass:password,
            DeviceId: '32188842-46fa-4229-ba2f-aeb2efec7a4f',
            PhoneVersion: null,
            ClientVersion: '1.0.0.1',
            ClientType: 0
        }).then(res=>{
            success(context,res,userInfo,password)
           
        })
      
    }
}

export default actions