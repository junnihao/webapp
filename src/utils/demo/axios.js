import axios from 'axios'
//import { ElMessageBox } from 'element-plus'
//import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//import router from '@/router'

//axios.defaults.baseURL = 'http://localhost:8080/demo/'
axios.defaults.baseURL = '/demo'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

//axios.header("Access-Control-Allow-Origin", "*");

/*NProgress.inc(1.2)
NProgress.configure({ easing: 'ease', speed: 6000, showSpinner: false })

axios.interceptors.request.use(function (config) {
  // 出现进度条
  NProgress.start()
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})


axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        ElMessageBox.alert("服务器异常，请稍后再试！")
        return Promise.reject(res)
    }
    if (res.data.resultCode != 200) {
        if (res.data.message) ElMessageBox.alert(res.data.message)
        if (res.data.resultCode == 416) {
            router.push({path: '/login'})
        }
        return Promise.reject(res.data)
    }

    // 关闭进度条
    NProgress.done()

    return res.data
})*/

export default axios
