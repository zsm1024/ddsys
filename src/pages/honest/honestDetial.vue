<template>
  <section>
    <div style="padding:15px;font-size:0.12rem">
       
      <!-- <p style="display: flex;justify-content: flex-end"><yd-button  type="primary" style="font-size: 0.14rem;height: 0.4rem;margin-bottom:0.1rem" @click.native="addNew">新增</yd-button></p> -->
      <x-table>
        <thead>
          <tr id="head">
            <th>时间</th>
            <th>接洽人</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody style="font-size:0.14rem">
          <tr v-for="(item,$index) in list" :key="$index" >
            <td @click="clickDetial(item.id)">{{item.entrydate}}</td>
            <td @click="clickDetial(item.id)">{{item.receptionist}}</td>
            <td @click='deleteList(item)'><i class="fa fa-trash-o fa-2x" style="color:#0093ff"></i></td>
          </tr>
        </tbody>
      </x-table>
     <flexbox style="margin-top:0.2rem">
        <flexbox-item>
          <x-button type="primary" @click.native="addNew">新增记录</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" :disabled="disable001" @click.native="subMessage">提交</x-button>
        </flexbox-item>
      </flexbox>
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
       list:[],
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
       Indicator.open("加载中...");
       getdayrecordlist(para).then(res =>{
       
         if(res.data.success == 1){
           let data =res.data.data;
           this.list =data;  
           if(this.list.length>0){
             this.disable001=false
           }
           Indicator.close();
         }        
       })
     },
     clickDetial(item){
       this.$router.push({path:"/ding/honest",query:{id:item}})
     },
     deleteList(item){
      
        this.$dialog.confirm({
              // title: '选填标题',
              mes: '你确定删除'+item.entrydate+"的廉洁记录吗？",
             opts: () => {
                  Indicator.open();
                  let para ={
                  //userid:"091562293124062567",
                    userid: sessionStorage.getItem("userid"),
                    id:item.id
                    } 
                  deletedayrecord(para).then(res =>{
                    if(res.data.success==1){
                        Indicator.close();
                      
                     this.$dialog.alert({mes: '删除成功！'});
                        this.getmessage()
                    }else{
                      Indicator.close();
                      this.$dialog.alert({
                          mes:res.data.message,
                      });
                        
                    }
                  })
              }
                });
       
     },
     addNew(){
       this.$router.push({path:"/ding/honest",query:{id:""}})
     },
     subMessage(){
       Indicator.open();
      let para ={
         //userid:"091562293124062567",
          userid: sessionStorage.getItem("userid"),
          id:this.$route.query.id
       }
       committravelrecord(para).then(res =>{
         if(res.data.success==1){
          Indicator.close();
          // this.$dialog.alert({mes: '操作成功！'});
          this.$router.push('/ding/success')
         }else{
          Indicator.close();
           this.$dialog.alert({
              mes:res.data.message,
          });
         }
       })
     }
   },
   mounted(){
     this.getmessage()
   }
}

</script>
<style>
 #head th{font-size: 0.14rem;font-weight: bold}
</style>

