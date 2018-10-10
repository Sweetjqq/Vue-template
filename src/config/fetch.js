import axios from 'axios'
import {
  getCookie
} from '../config/index'
axios.defaults.baseURL = HOST;

const errMsg = (error) => {
  switch (error) {
    case 400:
      error.message = '错误请求'
      break;
    case 401:
      error.message = '未授权，请重新登录'
      break;
    case 403:
      error.message = '拒绝访问'
      break;
    case 404:
      console.log('请求错误,未找到该资源')
      break;
    case 405:
      error.message = '请求方法未允许'
      break;
    case 408:
      error.message = '请求超时'
      break;
    case 500:
      error.message = '服务器端出错'
      break;
    case 501:
      error.message = '网络未实现'
      break;
    case 502:
      error.message = '网络错误'
      break;
    case 503:
      error.message = '服务不可用'
      break;
    case 504:
      error.message = '网络超时'
      break;
    case 505:
      error.message = 'http版本不支持该请求'
      break;
    default:
      error.message = `连接错误${error.response.status}`
  }
}


const fetch = {
  async get(url, data) {
    try {
      let res = await axios({
        method: 'get',
        url: HOST + url,
        headers: {
          'Authorization': "bearer " + getCookie('Token'),
        },
        params: data ? data : ''
      })
      return new Promise((resolve) => {
        resolve(res)
      })
    } catch (error) {
      errMsg(error)
    }
  },

  async post(url, data) {
    try {
      let res = await axios({
        method: 'post',
        url: HOST + url,
        headers: {
          'Authorization': "bearer " + getCookie('Token'),
        },
        params: data ? data : ''
      })
      return new Promise((resolve) => {
        resolve(res)
      })
    } catch (error) {
      errMsg(error)
    }
  }

};


export default fetch;
