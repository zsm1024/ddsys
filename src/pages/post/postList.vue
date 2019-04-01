<template>
  <section>
    <div style="padding:15px;font-size:0.12rem">
       
      <!-- <p style="display: flex;justify-content: flex-end"><yd-button  type="primary" style="font-size: 0.14rem;height: 0.4rem;margin-bottom:0.1rem" @click.native="addNew">新增</yd-button></p> -->
      <x-table style="background:#fff">
        <thead>
          <tr id="head">
            <th>证件名称</th>
            <th>寄出信息</th>        
          </tr>
        </thead>
        <tbody style="font-size:0.14rem">
          <tr v-for="(item,$index) in list" :key="$index" @click="clickDetial(item.id)" >
            <td >{{item.receptionist}}</td>
            <td >{{item.sendMessage}}</td>
            
          </tr>
        </tbody>
      </x-table>
    </div>
  </section>
</template>
<script>
import { Indicator } from 'mint-ui';
import { getdayrecordlist,deletedayrecord,committravelrecord} from "@/api/visit";
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,
    FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem,XTable, LoadMore,CellFormPreview,XTextarea} from 'vux'
export default {
   components: { CellFormPreview,Group, XInput,Cell,Datetime,PopupPicker,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem },
   data(){
     return {
       list:[
         {receptionist:"营业执照副本1",sendMessage:"保定五洲汽车销售有限公司",id:"1"},
         {receptionist:"营业执照副本2",sendMessage:"保定五洲汽车销售有限公司",id:"2"}
       ],
      disable001:true
     }
   },
   methods:{
     getmessage(){
       
       let para ={
         //userid:"091562293124062567",
          userid: sessionStorage.getItem("userid"),
          id:this.$route.query.id
       }
      //  Indicator.open("加载中...");
      //  getdayrecordlist(para).then(res =>{
       
      //    if(res.data.success == 1){
      //      let data =res.data.data;
      //      this.list =data;  
      //      if(this.list.length>0){
      //        this.disable001=false
      //      }
      //      Indicator.close();
      //    }        
      //  })
     },
     clickDetial(item){
       this.$router.push({path:"/ding/listDetial",query:{id:item}})
     },
   },
   mounted(){
     this.getmessage()
   }
}

</script>
<style>
 #head th{font-size: 0.14rem;font-weight: bold}
</style>

