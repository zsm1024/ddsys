<template>
<section>
   <div ref="vies">
    <group label-width="4.5em" label-margin-right="2em" label-align="right" id="times">
      <x-input title="出差时间" name="time1"  v-model="concreterecord.rtime" readonly placeholder="出差时间" ></x-input>
       <!-- <popup-picker title="出差时间" :data="list1" v-model="time1" value-text-align="left"  placeholder="出差时间" style="text-align:left"></popup-picker> -->
       <x-input title="记录日期" name="time2" v-model="concreterecord.ctime"  readonly placeholder="记录日期" ></x-input>
       <!-- <datetime title="记录日期" v-model="form.time2"  value-text-align="left" placeholder="请选择"></datetime>      -->
       <!-- <x-address title="出差地点"  :list="addressData" @on-shadow-change="onShadowChange" hide-district placeholder="请选择"  :show.sync="showAddress" value-text-align="left" ref="citys" @on-hide="onhide">{{value}}</x-address> -->
      <x-textarea title="出差地点"  v-model="concreterecord.destination" readonly>{{concreterecord.destination}}</x-textarea>
    </group>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" class="foodtype">
        <checklist title="早餐" :options="commonList" v-model="radioValue" readonly :max="1" style="display:flex"></checklist>
    </group>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" class="foodtype foodtype1">
      <checklist title="午餐" :options="commonList2" v-model="radioValue1" readonly :max="1" style="display:flex"></checklist>   
       </group>
       <group label-width="4.5em" label-margin-right="2em" label-align="right" class="foodtype foodtype1">
      <checklist title="晚餐" :options="commonList2" v-model="radioValue2" readonly :max="1" style="display:flex"></checklist>
  </group>
  <group  label-width="4.5em" label-margin-right="2em" label-align="right">
    <x-input title="酒店名称" name="username"  v-model="concreterecord.hotelname" readonly placeholder="请输入酒店名称" ></x-input>
    <x-input title="电话号码" name="phone" v-model="concreterecord.phone"   readonly placeholder="请输入电话号码" ></x-input>
    <x-input title=" 房间号" name="number"  v-model="concreterecord.roomnum"  readonly placeholder="请输入房间号" ></x-input>
    <x-input title="  金额" name="money" v-model="concreterecord.fee"   readonly placeholder="请输入金额"></x-input>
    <group label-width="4.5em" label-align="right" class="foodtype" id="stay">
        <checklist title="住宿承担" :options="commonList3" readonly v-model="radioValue3" :max="1"  style="display:flex"></checklist>
    </group>
  </group>
  </div>
  <!-- <flexbox>
        <flexbox-item>
          <x-button type="primary">保存</x-button>
        </flexbox-item>
        <flexbox-item>
            <x-button type="primary" @click.native="addInfo">提交</x-button>
        </flexbox-item>
  </flexbox> -->
  </section>
</template>
<script>
import {getconcreterecorddetail} from '@/api/visit'
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,
    FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem} from 'vux'
import { XTable, LoadMore, XTextarea  } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: { PopupPicker,Group, XInput,Cell,Datetime,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem,XTextarea  },
   data() {
     return {
       concreterecord:[],
        radioValue: [],
        radioValue1: [],
        radioValue2: [],
        radioValue3: [],
      commonList: [ '合作方', '自费', '酒店' ],
      commonList2: [ '合作方', '自费' ],
      commonList3: [ '合作方', '金融公司' ],
     }
   },
    methods: {
      getdetials(){
        let para={
         //userid:"000088654C24B0000U96",
          userid: sessionStorage.getItem("userid"),
          id:this.$route.query.id
        }
        getconcreterecorddetail(para).then(res =>{
          let data =res.data.data
          this.concreterecord=data.concreterecord[0]
          this.radioValue.push(this.concreterecord.breakfastname)
          this.radioValue2.push(this.concreterecord.dinnername)
          this.radioValue1.push(this.concreterecord.lanchname)
          this.radioValue3.push(this.concreterecord.lodgingtype)
        })
      }
  },
  mounted(){
    this.getdetials()
  }
}
</script>
<style>
 .city .vux-popup-picker-select{text-align: left!important}
 .foodtype .weui-cells{display:flex!important}
 .foodtype1 .weui-cells{margin-top: 0}
 .foodtype .weui-cells>a{text-decoration:none}
 #times .weui-cell {text-decoration: none!important;}
#times .weui-cell p {margin: 0 0.34rem 0 0}
 /* .foodtype a.weui-cell {padding:0.1rem!important;text-decoration:none} */
 .foodtype .weui-cells>div{align-items: center;}
 .foodtype .weui-cells__title{font-size:0.15rem;color:#000;margin:0;padding-left:0.2rem;padding-right: 0}
#stay>div{margin-top: 0}
.yd-notify{font-size: 0.16rem;line-height: 0.2rem;padding: 0.15rem}
</style>

