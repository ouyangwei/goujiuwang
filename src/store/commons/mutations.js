import  PRESERVE_USER_IFON from './const'
const mutations = {
  [PRESERVE_USER_IFON](state,payload){
      console.log(payload)
    state.userInfo = payload.userInfo
    state.password = payload.password
    state.userId = payload.userId
  }
}
export default mutations