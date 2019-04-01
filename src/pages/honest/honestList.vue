<template>
   <section>
     <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for=" (item,$index) in list" :key="$index">
       <div  @click="godetial(item.id)">
          <h4 class="cell weui-cell"><span >出差日期：</span><span>{{item.datesection}}</span></h4>
        <p class="cell weui-cell"><span  class="">出差地点：</span><span>{{item.travellocation}}</span></p>
        <p  class="cell weui-cell"><span >出差事项：</span><span>{{item.tripcontent}}</span></p>
       </div>
       
     </group>
     <div v-if="list.length==0" style="font-size:0.16rem">暂无数据</div>          
   </section>
</template>
<script>
import dingWISDK from "../../lib/ding";
import { Indicator } from 'mint-ui';
import { gettravellist } from "@/api/visit";
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem,XTable, LoadMore,CellFormPreview,XTextarea} from 'vux'
export default {
   components: { CellFormPreview,PopupPicker,Group, XInput,Cell,Datetime,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem,XTextarea  },
   data(){
     return{
        list:[]

     }
   },
   methods:{
     changTitle(){
      dd.biz.navigation.setTitle({
          title : '廉洁记录',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
     getlist(){
        Indicator.open("加载中...");
       let para={
        iscommit:false,
        //userid:"091562293124062567",
        userid: sessionStorage.getItem("userid"),
       }
       gettravellist(para).then(res =>{
         if(res.data.success==1){
           let data =res.data.data
          this.list=data
            Indicator.close();
         }else{
           this.$dialog.alert({mes:res.data.message});
            Indicator.close();
         }      
       })
     },
    godetial(item){
      sessionStorage.setItem("timerange",item)
     this.$router.push({path:'/ding/honestDetial',query:{id:item}})
     
    }
   },
   mounted(){
     this.changTitle()
     this.getlist()
   }
}
</script>
<style>
  .cell{display: flex;justify-content: space-between;padding: 0.05rem 0}
  .cell span:first-child{display: inline-block;width:30%;text-align:right}
  .cell span:last-child{display: inline-block;width:70%;text-align: left}
.cell-x-icon {
  display: block;
  fill: rgb(85, 157, 240);
}
/* .weui-cells:first{margin-top: 0!important} */
</style>

