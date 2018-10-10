import fetch from '../../../config/fetch'
import {
  setCookie,
  getCookie
} from '@/config'

export default {
    async loginout(context){
      let queryData = await fetch.post('/tc/user/exit',{
          'token': 'd1363b89-128d-4eb9-a998-9ff265dc2a3d'
      })
      if (queryData.data.status == 401) {
         context.commit('LOGOUT_SUCCESS',{...queryData})
      }else{
         
      }
    }
} 