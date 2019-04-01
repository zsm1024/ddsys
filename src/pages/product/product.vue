<template>
  <section id="products">
  <group label-width="4.5em" label-margin-right="2em" label-align="right" >
    
    <div class="weui-cell" style="display:flex;height:0.4rem;line-height:0.4rem">
      <p class="weui-cell__hd" style="width: 4.5em;text-align: right;margin-right: 1.5em;font-size:0.15rem" >活动范围</p>
      <select v-model="form.defaultValue" style="width:70%;border:none;color:#999;font-size:0.15rem">
      <option value="" disabled selected style="display:none" >请选择</option>
      <option value="省份">省份</option>
      <option value="城市">城市</option>
      <option value="经销商">经销商</option>
      <option value="全部">全部</option>
    </select>
      </div>
    <!-- <selector  title="活动范围"  placeholder="活动范围" :options="list"  v-model="form.defaultValue" @on-change="change"></selector> -->
    <x-input title="活动名称" name="name" v-model="form.name" placeholder="请输入活动名称" ></x-input>
    <x-address title="省份城市"  :list="addressData" @on-shadow-change="onShadowChange" hide-district placeholder="请选择"  :show.sync="showAddress" value-text-align="left" ref="citys"  @on-hide="onhide">{{form.value}}</x-address>
     <datetime title="开始时间"  value-text-align="left" v-model="form.startTime" placeholder="请选择"></datetime> 
     <datetime title="结束时间"  value-text-align="left" v-model="form.endTime"  placeholder="请选择"></datetime> 
     <!-- <selector title="是否过期" placeholder="是否过期"  :options="list1" v-model="form.flag"></selector> -->
     <div class="weui-cell" style="display:flex;padding:0.03rem 0;height:0.4rem;line-height:0.4rem">
      <p class="weui-cell__hd" style="width: 4.5em;text-align: right;margin-right: 1.5em;" >是否过期</p>
      <select  v-model="form.flag" style="width:70%;border:none;color:#999;font-size:0.15rem" name="111" placeholder="请选择">     
      <option value="" disabled selected style="display:none" >请选择</option> 
      <option value="是">是</option>
      <option value="否">否</option>
      <option value="全部">全部</option>
    </select>
      </div>
       <!-- <div class="weui-cell"></div> -->
     <x-button type="primary" style="margin-top:0.4rem" @click.native="getitems">查     询</x-button>
  </group> 
   <div style="padding:15px;font-size:0.12rem" :class="{'class-a':isA,'class-b':isB}">
      <x-table>
        <thead>
          <tr>
            <th>活动范围</th>
            <th>具体区域</th>
            <th>活动名称</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,$index) in items" :key="$index" @click="productDe(item)">
            <td style="width:0.6rem;padding:0.02rem">{{item.activityrangename}}</td>
            <td style="width:0.6rem;padding:0.02rem">{{item.cityname}}</td>
            <td>{{item.activityname}}</td>          
          </tr>
          <!-- <tr>
            <td>经销商</td>
            <td>哈博能集团</td>
            <td>哈博能集团旧换新活动</td>
          </tr> -->
        </tbody>
      </x-table>
    </div>
  </section>
</template>
<script>
import { Indicator } from 'mint-ui';
import {getactivitieslist} from '@/api/product'
import { Selector,Group,XInput, XAddress, ChinaAddressV4Data,Datetime,XButton,XTable, } from 'vux'
export default ({
  components: {
    Selector, Group,XInput, XAddress, ChinaAddressV4Data,Datetime,XButton,XTable,
  },
  data() {
    return {
    isA: false,
    isB: true,
    list: [{value:"省份"}, {value:"城市"},{value:"经销商"},{value:"全部"}],
    list1: [{value:"是"}, {value:"否"},{value:"全部"}],
     addressData: ChinaAddressV4Data,
    showAddress: false,
     citys:[],
     form:{
      name:"",
      defaultValue:"",
      begindate:"",
      enddate:"",
      flag:"",
      value:[]
     },
     items:[
      // {range:"省级",area:"湖北骏马",text:"湖北骏马以旧换新活动sdfdsfsdfsdfsfsdfsdfsdfsdfsdf",id:"1"},
      // {range:"经销商",area:"哈博集团",text:"湖北骏马以旧换新活动sdfdsfsdfsdfsf",id:"1"}
     ]
    }
  },
  methods:{
      changTitle(){
      dd.biz.navigation.setTitle({
          title : '活动查询',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
    getitems(){
      Indicator.open("查询中...");
        let para ={
          //userid:"091562293124062567",
          userid: sessionStorage.getItem("userid"),
          activityrange:this.form.defaultValue,
          activityname:this.form.name,
          province: this.$refs.citys.nameValue.split(" ").shift(),
          city:this.$refs.citys.nameValue.split(" ").pop(),
          sentrydate:this.form.startTime,
          eentrydate:this.form.endTime,
          validflag:this.form.flag,

        }
        getactivitieslist(para).then(res =>{
          if(res.data.success==1){
            let data=res.data.data;
            this.items=data;
            this.isA=true,
            Indicator.close();
          }
        })
    },
    productDe(item){
       this.$router.push({path:'/ding/productDetial',query:{id:item.id}})
    },
     onShadowChange (ids, names) {
      this.value=names;
      this.citys.push(names);
    },
     onhide(){ 
       console.log(this.$refs.citys.nameValue.split(" ").pop())
      // this.city.push()  
      // this.city=this.dedupe(this.city)
      // this.city1= this.city.toString()
    },
  },
  mounted(){
    this.changTitle()
  }
})
</script>
<style>
 #products .weui-input{color:#999}
 .class-b{display: none}
 .class-a{display: block}
 .mint-indicator-wrapper{
    font-size: 0.12rem!important
  }
  #products button, #products input,#products select{
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
 } 
</style>


