<template>
  <section id="productDetial">
    <h4 style="margin-top:0.1rem">活动基本信息</h4>
   <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >    
     <x-input title="活动目的" v-model="active.activitytype" disabled  ></x-input>
     <x-input title="活动范围" v-model="active.activityrangename" disabled ></x-input>
     <x-input title="录入时间" v-model="active.cdate" disabled ></x-input>
     <x-input title="录入人"    v-model="active.username" disabled ></x-input>
     <x-input title="开始时间" v-model="active.begindate" disabled ></x-input>
     <x-input title="结束时间" v-model="active.enddate" disabled ></x-input>
   </group>
   <h4>地理信息</h4>
  <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >   
    <x-input title="省份/城市" v-model="active.cityname" disabled ></x-input>
    <x-textarea  title="经销商" disabled v-model="active.spname"></x-textarea>
  </group>
  <h4>活动详情</h4>
   <group label-width="4.5em" label-margin-right="1.5em" label-align="left" >
     <x-input title="活动名称" v-model="active.activityname" disabled ></x-input>
     <x-input title="活动成本" v-model="active.activitycost" disabled ><span slot="right">元</span></x-input>
    <x-input title="活动描述" v-model="active.description" disabled ></x-input>
     <x-textarea  title="效果评估" disabled  :rows="1" v-model="active.effectevaluation"  autosize></x-textarea>          
     <!-- <x-input title="附件" v-model="type">
       <x-button slot="right" type="primary" mini>查看</x-button>
     </x-input>    -->
      </group>
      <h4>附件</h4>
       <yd-lightbox :num="list.length">
        <yd-lightbox-img  v-for="(item, key) in list" :key="key" :src="item.src" :original="item.original"></yd-lightbox-img>
    </yd-lightbox>
  </section>
</template>
<script>
import { Indicator } from 'mint-ui';
import {getactivitiesdetail} from '@/api/product'
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,
    FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem} from 'vux'
import { XTable, LoadMore, XTextarea  } from 'vux'
export default ({
   components: { PopupPicker,Group, XInput,Cell,Datetime,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem,XTextarea  },
   data() {
     return {
       path:window.g.ApiUrl,
       active:[],     
      //  position:{
      //    province:""
      //  },
       list: [
        //  {src:'http://gwmfctest.vaiwan.com/activity/piclink/6c08a056d4284ecdb8c07ab65766ef80/th',original:'http://static.ydcss.com/uploads/lightbox/meizu_1.jpg'},
        //  {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg', original:'http://static.ydcss.com/uploads/lightbox/meizu_1.jpg'},
        // {src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg', original: 'http://static.ydcss.com/uploads/lightbox/meizu_2.jpg'},    
       ]
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
      getactivitiesdetail(para).then(res =>{
        let data=res.data.data
        this.active= data.activitydetail[0]
          // let lists=data.piclist;
        data.piclist.forEach(el => {
          this.list.push({"src":path+"/activity/piclink/"+el.attachmentpath+"/th",
          original:path+"/activity/piclink/"+el.attachmentpath+"/a"})
        });
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
</style>


