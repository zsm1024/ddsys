<template>
  <section id="productDetial">
    <h4 style="margin-top:0.1rem">竞品基本信息</h4>
   <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >    
     <x-input title="金融机构" v-model="active.forgname" disabled ></x-input>
     <x-input title="竞品范围" v-model="active.rangetypename" disabled ></x-input>
     <x-input title="录入时间" v-model="active.entrydate"  disabled></x-input>
     <x-input title="录入人"    v-model="active.username" disabled ></x-input>
     <x-input title="是否过期"    v-model="active.overdatename" disabled ></x-input>
     <x-input title="开始时间" v-model="active.begindate" disabled ></x-input>
     <x-input title="结束时间" v-model="active.enddate" disabled ></x-input>
   </group>
   <h4>地理信息</h4>
  <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >   
    <x-input title="省份/城市" v-model="active.cityname" disabled ></x-input>
    <x-textarea  title="经销商" v-model="active.spname" disabled></x-textarea>
  </group>
  <h4>定价与返利</h4>
   <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >
     <x-input title="每单手续费" v-model="active.fee" disabled ><span slot="right">元</span></x-input>
     <x-input title="其它收费描述" v-model="active.otherfeedescription" disabled ></x-input>
      <x-input title="返利规则" v-model="active.rebaterule" disabled ></x-input>
      <cell id="chang" style="text-align:left" title="年化利率%"></cell>
      <x-input title="1年" v-model="active.RATEONE" disabled ></x-input>
      <x-input title="2年" v-model="active.RATETWO" disabled ></x-input>
      <x-input title="3年" v-model="active.ratethree" disabled ></x-input>
      <x-input title="3年以上" v-model="active.ratethreemore" disabled ></x-input>
      </group>
      <h4>其它重要信息</h4>
      <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >
          <x-input title="是否见发票" v-model="active.loanflagname" disabled ></x-input>
          <x-input title="是否有附加贷" v-model="active.attachflagname" disabled></x-input>
          <x-input title="附加贷准入条件" v-model="active.loanrule" disabled></x-input>
          <x-textarea  title="附加贷产品描述" disabled  v-model="active.attachdescription" :rows="1" autosize></x-textarea> 
          <x-textarea  title="其它重要信息" disabled  :rows="1" v-model="active.otherattachinfo" autosize></x-textarea>  
      </group>
      <h4>平均时效</h4>
       <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >
          <x-input title="审批时效" v-model="active.approvaltime" disabled></x-input>
          <x-input title="放款时效" v-model="active.loantime" disabled></x-input>
       </group>
  </section>
</template>
<script>
import { Indicator } from 'mint-ui';
import {getcompetitordetail} from '@/api/product'
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,
    FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem} from 'vux'
import { XTable, LoadMore, XTextarea  } from 'vux'
export default ({
   components: { PopupPicker,Group, XInput,Cell,Datetime,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem,XTextarea  },
   data() {
     return {
       active:[]
      //  active:{    
      //   type:"11",
      //   area:"经销商",
      //   time:"2018-02-11",
      //   person:"张三",
      //   startTime:"2018-01-22",
      //   endTime:"2018-02-11"
      //  },
      //  position:{
      //    province:""
      //  }
     }
   },
   methods:{
  getmessages(){
       Indicator.open("加载中...");
       let para={
        //userid:"091562293124062567",
        userid: sessionStorage.getItem("userid"),
         id:this.$route.query.id
      }
      getcompetitordetail(para).then(res =>{
        let data=res.data.data
        this.active=data[0]
        Indicator.close();
      })
     }
   },
   mounted(){
      this.getmessages()
   }
})
</script>
<style>
  #productDetial h4{text-align: left;padding: 0.05rem;font-size:0.15rem}
  #productDetial .weui-cells{margin-top: 0}
  .vux-flexbox.vux-flex-row{position: relative}
  .vux-flexbox.vux-flex-row:before{
    content: " ";
    position: absolute;
    left: 0.1rem;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);}
    #chang .vux-label{width: 100%!important}
 </style>


