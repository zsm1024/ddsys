<template>
  <section>
    <div style="padding:15px;font-size:0.12rem">
       
      <!-- <p style="display: flex;justify-content: flex-end"><yd-button  type="primary" style="font-size: 0.14rem;height: 0.4rem;margin-bottom:0.1rem" @click.native="addNew">新增</yd-button></p> -->
      <x-table style="background:#fff">
        <thead>
          <tr id="head">
            <th>证件名称</th>
            <th>状态</th>        
          </tr>
        </thead>
        <tbody style="font-size:0.14rem">
          <tr v-for="(item,$index) in list" :key="$index" @click="clickDetial(item)" >
            <td >{{item.docname}}</td>
            <td >{{item.status}}</td>
            
          </tr>
        </tbody>
      </x-table>
    </div>
  </section>
</template>
<script>
import { Indicator } from 'mint-ui';
import {getdoclist} from "@/api/visit";
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,
    FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem,XTable, LoadMore,CellFormPreview,XTextarea} from 'vux'
export default {
   components: { CellFormPreview,Group, XInput,Cell,Datetime,PopupPicker,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem },
   data(){
     return {
       list:[],
      disable001:true
     }
   },
   methods:{
     changTitle(){
      dd.biz.navigation.setTitle({
          title : '点检历史',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
     getmessage(){
       
       let para ={
        //userid:"091562293124062567",
        userid: sessionStorage.getItem("userid"),
          // id:this.$route.query.id
       }
       Indicator.open("加载中...");
        getdoclist(para).then(res=>{
          let data= res.data
          if(data.success==1){
            this.list=data.data
            Indicator.close();
          }else{
            Indicator.close()
            this.$dialog.alert({msg:'接口调用失败！'})
          }
        })
     },
     clickDetial(item){
       this.$router.push({path:"/ding/historydetail",query:{id:item.id,title:item.docname}})
     },
   },
   mounted(){
      this.changTitle()
     this.getmessage()
     
   }
}

</script>
<style>
 #head th{font-size: 0.14rem;font-weight: bold}
</style>

