import fetch from '../../../config/fetch'
import {
  setCookie,
  getCookie
} from '@/config'
export default {
    // actions
    async login(context) {
      let queryData = await fetch.post('/tc/user/login', {
        "username": '18860889059',
        "verificationCode": '888888',
      })
      if(queryData.status == 200) {
        context.commit("LOGIN_SUCCESS", {...queryData});
        setCookie('user', JSON.stringify({...queryData}))
      }else{
        
      }
    },
}