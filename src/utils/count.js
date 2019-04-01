import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
var baseApi =window.g.countUrl;
// if(process.env.NODE_ENV=="development"){
//   baseApi=process.env.BASE_API;
// }
// baseApi=process.env.BASE_API

console.log(baseApi)
const service =axios.create({
  baseURL:baseApi,
  timeout:1800000
});
// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sents
  // if (store.getters.token) {
    // config.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2Yzc2ZWM0NzMzZjgzMDU0MTgxNGY5ZTU0YmIxMzljIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1MzQxMzc2NTUsImV4cCI6MTUzNDE2NjQ1NSwiaXNzIjoiaHR0cDovL2lkNC1kZXYuZ3dtZmMuY29tIiwiYXVkIjpbImh0dHA6Ly9pZDQtZGV2Lmd3bWZjLmNvbS9yZXNvdXJjZXMiLCJhcGkxIl0sImNsaWVudF9pZCI6ImNsaWVudCIsInN1YiI6ImNsaWVudCIsIm5hbWUiOiJjbGllbnQiLCJzY29wZSI6WyJhcGkxIl19.mAmixnldUCSjLkK5An82PeLpS516EBfa85hm7E6f3jSrdPhXFB04NJhU62BGdzVksd_hcGhafE3eE0M0Q6ZrcaiAIGWP-_6Hl9AU7P0lrSol5aw4kthbNc-rjwKN_GJx6Do-IJPiaXvBve4jxx6mTCZidLBADL6AJ4_SiOJGSQOlHYo4k6faXi-4Mmh_7rb7JZeCzRtDJYIXypzvj0p5aXRcFdIzgNtqZKY2Mqv2qsJBIjBzf9FCRRT4_OcYOFxGX11Dam1zYxTyrYW2FWxT_A3UzjfZNqYJrY1mUvzmMmjmV-PoiyPV1DH-t_kJsV-ZeXUeYLsQgytLvCuc8hVH8w' // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  // config.headers['login-token'] = getToken()
  return config
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  // console.log(response)
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */

//  const res = response.data;
//     if (res.code !== 20000) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5 * 1000
//       });
//       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload();// 为了重新实例化vue-router对象 避免bug
//           });
//         })
//       }
//       return Promise.reject('error');
//     } else {
//       return response.data;
//     }
  error => {
    console.log('err' + error)// for debug
    Message({
      message: '请求超时，请刷新页面!',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)


export default service