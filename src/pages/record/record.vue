<template>
<section>
         <group label-width="5em" label-margin-right="1.5em" label-align="right"  style="clear:both">
         <x-address title="省份/城市:"  :list="addressData" @on-shadow-change="onShadowChange" hide-district placeholder="请选择"  :show.sync="showAddress" value-text-align="left" ref="cityn" @on-hide="hides" v-model="form.city" ></x-address>
          <x-input title="车管所：" class="inputs" name="name"  v-model="form.carname" placeholder="请输入车管所" ></x-input>
          <x-input title="经销商：" class="inputs" name="name"  v-model="form.jxsname" placeholder="请输入经销商" ></x-input>               
         </group>
  
        <div class="bottomsearch">
              <x-button type="primary" style="margin-top:0.4rem" @click.native="searchInfo">查     询</x-button>
        </div>
         <div style="padding:15px;font-size:0.12rem">
      <x-table id="heads">
        <thead>
          <tr >
            <th style="width:25%">车管所</th>
            <th style="width:25%">经销商</th>
            <th style="width:25%">是否有效</th>
            
          </tr>
        </thead>
        <tbody style="font-size:0.12rem" >
          <tr v-for="(item,index) in recordItems" :key="index" :class="[item.isuse=='否'?'classb':'classa']">
            <td  style="width:33%">{{item.name}}</td>
            <td style="width:33%">{{item.distributorname}}</td>
            <td  style="width:33%">{{item.isuse}}</td>
            
          </tr>
        </tbody>
      </x-table>
     </div>
   
      
    
  <!-- </yd-tab> -->
    
    </section>
</template>
<script>
import {getapproves,getmortgage} from '@/api/visit'
import { Selector,Group,XInput, XAddress, ChinaAddressV4Data,Datetime,XButton,XTable, } from 'vux'
import { setTimeout } from 'timers';
export default {
   components: {
    Selector, Group,XInput, XAddress, ChinaAddressV4Data,Datetime,XButton,XTable,
  },
  data(){
    return{
      addressData: ChinaAddressV4Data,
      addressDataes: ChinaAddressV4Data,
      showAddress: false,
      showAddresses: false,
      show: false,
      content:"",
      dealer:"",
      sign: "",
      form:{
        city:[],
        carname:"",
        jxsname:""

      },
       dealt:{
        city:[],
        jxsname:""
      },
      recordItems:[],
      items:[]     
    }
  },
  methods:{
    todiya() {
      this.$router.push({path:"/ding/recordtwo"})
    },
    tosome() {
      setTimeout(function() {
        target.scrollIntoView(true)
      },100)
    },
    fn(label, key) {
      this.label = label;
    },
     changTitle(){
      dd.biz.navigation.setTitle({
          title : '备案查询',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
//备案查询
     onShadowChange (ids, names) {
    },
    searchInfo(){
      let para={
        //userid:"091562293124062567",
        userid:sessionStorage.getItem("userid"),
        province: this.$refs.cityn.nameValue.split(" ").shift(),
        city:this.$refs.cityn.nameValue.split(" ").pop(),
        vehicleoffice:this.form.carname,
        dealer:this.form.jxsname
      }
      getapproves(para).then(res =>{
        let data =res.data
        if(data.success==1){
          if(data.data.length>0){
            this.recordItems=data.data
          }else{
             this.recordItems=data.data
             this.$dialog.alert({mes:"暂无数据！"});
          }        
        }
      })
    },   
//抵押查询
    onShadowChanges (ids, names) {
    },
    dealCheck(){
      let para={
        //userid:"091562293124062567",
        userid:sessionStorage.getItem("userid"),
        province: this.$refs.cities.nameValue.split(" ").shift(),
        cityname:this.$refs.cities.nameValue.split(" ").pop(),
        dealer:this.dealt.jxsname
      }
      getmortgage(para).then(res =>{
        let data= res.data
        if(data.success==1){
          this.items=data.data
        }
      })
    },
    clickRmk(item){
      this.show=true;
      this.content=item.remark
      this.dealer=item.dealer
      this.sign=item.sign
    },
    subx(){
      this.show=false;
    },
    hides(item){ 
    if(!item){
     this.form.city=[]
    }
    }
  },
  mounted(){
    this.changTitle()
  }
}
</script>
<style> 
.ullist{
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
}
.ullist li{
  background-color: #fff;
  width: 50%;
 float: left;
}
.active{
 border-bottom: 1px solid red;
}
.yd-tab-panel-item.yd-tab-active{
  position: static!important;
}
  #record .yd-cell-left,#record .yd-cell-right input,#record .yd-cell-right,#record .yd-tab-nav-item{font-size: 0.14rem;min-height:0;height: 0.4rem;line-height: 0.5rem!important}
  #countNum .yd-btn-block{margin-top: 0.2rem;font-size: 0.24rem;height:0.4rem}
  .bottomsearch .weui-btn{margin-top: 0.2rem}
  #heads th{width:30%}
  #heads td{width:30%;word-break: break-all;}
  #record .weui-input{color: #999}
  .classa{background:#fff}
  .classb{background:#f0f0f0}
  #contents  p{padding-top: 0.1rem}
  #contents .yd-btn{font-size: 0.14rem;height: 0.3rem;margin: 0.1rem 0}
</style>

