import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import honest from '@/pages/honest/honest'
import honestHistory from '@/pages/honest/honestHistory'
import outlist from '@/pages/honest/outlist'
import success from '@/pages/honest/success'
import visit from '@/pages/honest/visit'
import record from '@/pages/record/record'
import recordtwo from '@/pages/record/recordtwo'
import product from '@/pages/product/product'
import productDetial from '@/pages/product/productDetial'
import compare from '@/pages/compare/compare'
import compareDetial from '@/pages/compare/compareDetial'
import honestlist from '@/pages/honest/honestlist'
import honestDetial from '@/pages/honest/honestDetial'
import count from '@/pages/count/count'
import checkfile from '@/pages/checkFile/checkfile'
import checklist from '@/pages/checkFile/checklist'
import historylist from '@/pages/checkFile/historylist'
import historydetail from '@/pages/checkFile/historydetail'
import postList from '@/pages/post/postList'
import postDetial from '@/pages/post/postDetial'
import postSearch from '@/pages/post/postSearch'
import listDetial from '@/pages/post/listDetial'

const _import = file => () =>
  import ('@/pages/' + file + '.vue')
Vue.use(Router)

export default new Router({
  //mode: 'history', //后端支持可开
  routes: [
    {
      path: '/',
      redirect: '/ding',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ding',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ding/honestlist',
      name: 'honestlist',
      component: honestlist
    },
    {
      path: '/ding/honestDetial',
      name: 'honestDetial',
      component: honestDetial
    },
    {
      path: '/ding/honest',
      name: 'honest',
      component: honest
    },
    {
      path: '/ding/honestHistory',
      name: 'honestHistory',
      component: honestHistory,
      redirect: '/ding/visit',
      children:[{
        path: '/ding/visit',
        name: 'visit',
        component:visit,
      },
      
    ]

    },
    {
      path: '/ding/outlist',
      name: 'outlist',
      component: outlist
    },
    {
      path: '/ding/success',
      name: 'success',
      component: success
    },
    {
      path: '/ding/product',
      name: 'product',
      component: product
    },
    {
      path: '/ding/productDetial',
      name: 'productDetial',
      component: productDetial
    },
    {
      path: '/ding/compare',
      name: 'compare',
      component: compare
    },
    {
      path: '/ding/compareDetial',
      name: 'compareDetial',
      component: compareDetial
    },
    {
      path: '/ding/count',
      name: 'count',
      component: count
    },
    {
      path: '/ding/checkfile',
      name: 'checkfile',
      component: checkfile
    },
    {
      path: '/ding/checklist',
      name: 'checklist',
      component: checklist
    },
    {
      path: '/ding/historylist',
      name: 'historylist',
      component: historylist
    },
    {
      path: '/ding/historydetail',
      name: 'historydetail',
      component: historydetail
    },
    {
        path: '/ding/record',
        name: 'record',
        component:record,
    },
    {
      path: '/ding/recordtwo',
      name: 'recordtwo',
      component:recordtwo,
  },
    {
      path: '/ding/postDetial',
      name: 'postDetial',
      component:postDetial,
    },
    {
      path: '/ding/postList',
      name: 'postList',
      component:postList,
    },
    {
      path: '/ding/postSearch',
      name: 'postSearch',
      component:postSearch,
    },
    {
      path: '/ding/listDetial',
      name: 'listDetial',
      component:listDetial,
    },
    
  ]
})