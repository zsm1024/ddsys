<template>
  <section id="postlist">
      <group label-width="5em" label-margin-right="1.5em" label-align="right" >
        <x-input title="证件名称:" name="name" v-model="cardName" placeholder="请输入证件名称" ></x-input>
        <popup-picker title="证件状态" :data="list1" v-model="value1" placeholder="请选择"></popup-picker> 
                           
      </group>
      <div class="bottomsearch">
        <x-button type="primary" @click.native="searchInfo">查  询</x-button>
      </div>
      <div style="padding:15px;font-size:0.12rem">
        <x-table id="heads">
          <thead>
            <tr >
              <th>证件名称</th>
              <th>当前所在经销商</th>
            </tr>
          </thead>
          <tbody style="font-size:0.12rem">
            <tr v-for="(item,index) in items" :key="index" @click="checkDetial(item)">
              <td style="width:50%">{{item.name}}</td>
              <td style="width:50%">{{item.spname}}</td>
            </tr>
          </tbody>
        </x-table>
     </div>
  </section>
</template>
<script>
import {getpostmsg} from '@/api/visit'
import { Selector,Group,XInput, XAddress, ChinaAddressV4Data,Datetime,XButton,XTable,PopupPicker, } from 'vux'
export default {
   components: {
    Selector, Group,XInput, XAddress, ChinaAddressV4Data,Datetime,XButton,XTable,PopupPicker,
  },
  data(){
    return{
      show: false,
      content:"",
      value1:["全部"],
      list1: [['正常', '异常', '全部']],
      value2:["全部"],
      list2: [['是', '否', '全部']], 
      cardName:"",
      items:[],
        // {jxsName:"阿萨德是非得失儿我翁热无热热热若电热热热无是否是大学城VR发vgere11",cardName:"张三散",id:"1"},
        // {jxsName:"阿萨德是非得失儿我翁热无热热热若电热热",cardName:"张三散",id:"2"}
      
      
    }
  },
  methods:{
     changTitle(){
      dd.biz.navigation.setTitle({
          title : '邮寄查询',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
    searchInfo(){
      let para={
        //userid:"091562293124062567",
        userid:sessionStorage.getItem("userid"),     
        name:this.cardName,
        status:this.value1
      }
      if(para.status=="正常"){
        para.status="1"
      }else if(para.status=="异常"){
        para.status="0"
      }else{
        para.status="0,1"
      }
      if(para.valid=="正常"){
        para.valid="1"
      }else if(para.valid=="异常"){
        para.valid="0"
      }else{
        para.valid="0,1"
      }
      getpostmsg(para).then(res =>{
        let data =res.data
        if(data.success==1){
          if(data.data.length>0){
            this.items=data.data
          }else{
             this.items=data.data
             this.$dialog.alert({mes:"暂无数据"})
          }
          
        }else{
           this.$dialog.alert({mes:data.message})
        }
      })
    }, 
    checkDetial(item){
      this.$router.push({path:"/ding/postDetial",query:{id:item.id,name:item.spname}})
    }
  },
  mounted(){
    this.changTitle(),
    this.searchInfo()
  }
}
</script>

<style> 
  #postlist .yd-cell-left,#postlist .yd-cell-right input,#postlist .yd-cell-right,#postlist .yd-tab-nav-item{font-size: 0.14rem;min-height:0;height: 0.4rem;line-height: 0.4rem}
  #postlist .yd-btn-block{margin-top: 0.2rem;font-size: 0.24rem;height:0.4rem}
  .bottomsearch .weui-btn{margin-top: 0.2rem}
  #postlist th{width:30%}
  #postlist td{width:30%;word-break: break-all;}
  #postlist .weui-input{color: #999}
  #postlist .vux-popup-picker-select{text-align: left!important}
  /* .vux-popup-picker-value{font: 100% tahoma,\5b8b\4f53,arial;} */
</style>

