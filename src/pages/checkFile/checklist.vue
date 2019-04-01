<template>
  <section>
    <div style="padding:15px;font-size:0.12rem">
       
      <!-- <p style="display: flex;justify-content: flex-end"><yd-button  type="primary" style="font-size: 0.14rem;height: 0.4rem;margin-bottom:0.1rem" @click.native="addNew">新增</yd-button></p> -->
      <x-table style="background:#fff">
        <thead>
          <tr id="head">
            <th>证件名称</th>
            <th>时间</th>        
          </tr>
        </thead>
        <tbody style="font-size:0.14rem">
          <tr v-for="(item,$index) in list" :key="$index" @click="clickDetial(item)" >
            <td >{{item.documentname}}</td>
            <td >{{item.cdate}}</td>
            
          </tr>
        </tbody>
      </x-table>
    </div>
  </section>
</template>
<script>
import { Indicator } from 'mint-ui';
import {GetCheckInfoList} from "@/api/visit";
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
          title : '证件点检',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
     getmessage(){
       let para ={
         //userid:"091562293124062567",
        userid: sessionStorage.getItem("userid"),
       }
       Indicator.open("加载中...");
       GetCheckInfoList(para).then(res =>{     
         if(res.data.success == 1){
           let data =res.data.data;
           if(res.data.data.length>0){
            this.list =data;  
            Indicator.close();
           }else{
             Indicator.close();
           }
           
         }else{
           Indicator.close();
         }        
       })
     },
     clickDetial(item){
       this.$router.push({path:"/ding/checkFile",query:{id:item.id,name:item.documentname}})
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

