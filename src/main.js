// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from './mock'
import * as dd from 'dingtalk-jsapi';
import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import YDUI from 'vue-ydui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import 'vue-ydui/dist/ydui.rem.css';
import Vuex from 'vuex'
import uploader from 'vue-easy-uploader'
import {DatetimePicker, } from 'mint-ui';
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
 if(process.env.NODE_ENV=='development'){
   Mock.bootstrap();
 }
 import { XHeader } from 'vux'
 Vue.use(ElementUI);
Vue.use(YDUI);
Vue.use(MintUI)
// Vue.use(VueLazyLoad,{
//   error:'./static/lazy.png',
//   loading:'./static/lazy.png'
// })
Vue.component('x-header', XHeader)
Vue.component(DatetimePicker.name, DatetimePicker)
 const FastClick = require('fastclick')
//  const store = new Vuex.Store({})
//  Vue.use(uploader,store)
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//window.vue = vue