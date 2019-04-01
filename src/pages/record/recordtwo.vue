<template>
<section>
      <group label-width="5em" label-margin-right="1.5em" label-align="right" style="clear:both">
         <x-address title="省份/城市:"  :list="addressDataes" @on-shadow-change="onShadowChanges" hide-district placeholder="请选择"  :show.sync="showAddresses" value-text-align="left" ref="cities" >{{dealt.city}}</x-address>
          <x-input title="代办人：" name="name" v-model="dealt.jxsname" placeholder="请输入代办人" ></x-input>               
         </group>
       <x-button type="primary"  style="margin-top:0.2rem" @click.native="dealCheck">查     询</x-button> 
        <div style="padding:15px;font-size:0.12rem">
      <x-table>
        <thead>
          <tr>
            <th style="width:25%">代办人</th>           
            <th style="width:25%">收费标准/单</th>
            <th style="width:25%">手机号</th>
            <th style="width:25%">是否代办</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,$index) in items" :key="$index" :class="[item.sign== '是' ?'classa':'classb']">
            <td style="width:0.6rem;padding:0.02rem" v-if="!item.remark">{{item.agentpeople}}</td>
            <td style="width:0.6rem;padding:0.02rem;color:blue" v-else @click="clickRmk(item)" >{{item.agentpeople}}</td>
            <td style="width:0.6rem;padding:0.02rem">{{item.cost}}</td>
            <!-- <td v-if="!item.agenttel">{{item.agenttel}}</td>  -->
            <td>{{item.agenttel}}</td> 
            <td>{{item.sign}}</td>                   
          </tr>
        </tbody>
      </x-table>
    </div>  
    <yd-popup id="contents" v-model="show" position="center" width="90%">
      <div style="background-color:#fff;"> 
        <p style="text-align:left;margin-left:0.15rem">经销商：{{dealer}}</p>      
        <p style="text-align:left;margin-left:0.15rem">备注：{{content}}</p>
        <p style="text-align:left;margin-left:0.15rem">是否代办: {{sign}}</p>
        <p style="text-align: center;">
          <yd-button @click.native="subx">确定</yd-button>
        </p>       
        </div>
    </yd-popup>
<!--     
  </yd-tab> -->
    
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
    tobeian() {
       this.$router.push({path:"/ding/record"})
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
          title : '代办查询',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
//备案查询
     onShadowChange (ids, names) {
      // this.value=names;
      // this.citys.push(names);
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
      // this.value=names;
      // this.citys.push(names);
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

