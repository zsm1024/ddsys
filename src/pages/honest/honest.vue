<template>
<section style="margin-bottom:0.1rem" id="writenote" >  
    <div ref="vies">
    <group label-width="4.5em" label-margin-right="1em" label-align="right" id="times" style="margin-top:0.15rem">
      <x-input title="出差地点" name="place" v-model="times.travellocation" readonly></x-input>
      <x-input title="开始时间" name="starttime" v-model="times.begindate" readonly></x-input>
      <x-input title="结束时间" name="endtime" v-model="times.enddate" readonly></x-input>     
       <!-- <x-input id="special" title="出差事项" readonly >      
       </x-input> -->     
    </group>
     <group  label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-textarea id="textar" name="description" :rows="2" v-model="times.tripcontent"  autosize readonly></x-textarea>
    </group>
    <cell title="记录日期" style="text-align:left;background:#fff;font-weight: bold;" class='write' >
        <i slot="icon" class="fa  fa-calendar-check-o fa-lg" style="color:#0093ff;margin-right:0.1rem"></i> 
        <datetime v-model="form.time2"  placeholder="请选择" clear-text="clear" @on-clear="clearValue"></datetime>
    </cell>
   
    <cell title="三餐记录" style="text-align:left;background:#fff;font-weight: bold;">
        <i slot="icon" class="fa fa-coffee fa-lg" style="color:#0093ff;margin-right:0.1rem"></i>
    </cell>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" class="foodtype">  
        <checklist title="早餐" :options="commonList" v-model="form.radioValue" :max="1" @on-change="change" style="display:flex"></checklist>
    </group>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" class="foodtype foodtype1">
      <checklist title="午餐" :options="commonList2" v-model="form.radioValue1" :max="1" @on-change="change1" style="display:flex"></checklist>   
       </group>
       <group label-width="4.5em" label-margin-right="2em" label-align="right" class="foodtype foodtype1">
      <checklist title="晚餐" :options="commonList2" v-model="form.radioValue2" :max="1" @on-change="change2" style="display:flex"></checklist>
  </group>
  <cell title="酒店记录" style="text-align:left;background:#fff;font-weight: bold;">
        <i slot="icon" class="fa fa-hospital-o fa-lg" style="color:#0093ff;margin-right:0.1rem"></i>
    </cell>
  <group  label-width="4.5em" label-margin-right="2em" label-align="right">
    <x-input title="酒店名称" name="username" v-model="form.name" placeholder="请输入酒店名称" ></x-input>
    <x-input title="电话号码" name="phone" v-model="form.phone"  placeholder="请输入电话号码" ></x-input>
    <x-input title=" 房间号" name="number" v-model="form.number" placeholder="请输入房间号" ></x-input>
    <x-input title="  金额" name="money" v-model="form.money" placeholder="请输入金额"></x-input>
    <group label-width="4.5em" label-align="right" class="foodtype" id="stay">
        <checklist title="住宿承担" :options="commonList3" v-model="form.radioValue3" :max="1" @on-change="change3" style="display:flex"></checklist>
    </group>
  </group>
    <cell title="接洽人" style="text-align:left;background:#fff;font-weight: bold;">
        <i slot="icon" class="fa fa-handshake-o fa-lg" style="color:#0093ff;margin-right:0.1rem"></i>
    </cell>
    <group  label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-textarea v-model="form.receptionist" :rows="2" autosize placeholder="请输入当天接洽人的职务、姓名，可输入多个接洽人" ></x-textarea>
    </group>
    <cell title="行程记录" style="text-align:left;background:#fff;font-weight: bold;">
        <i slot="icon" class="fa fa-car fa-lg" style="color:#0093ff;margin-right:0.1rem"></i>
    </cell>
    <group  label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-textarea v-model="form.daycontent" :rows="2" autosize  placeholder="请输入当天详细行程信息"></x-textarea>
    </group>
  </div>

  <flexbox class="bottombutton">
      <x-button type="primary" @click.native="addInfo">保存</x-button>
  </flexbox>
  <!-- </mt-tab-container-item>
  <mt-tab-container-item id="2">
     <div id="historys">
      <cell title="新增" style="text-align:right" @click.native="show" >
        <x-icon type="ios-plus-outline" size="30" class="cell-x-icon"></x-icon>
      </cell>  
</div> 
<yd-accordion id="timelist">
  <group  v-for="(item,index) in items " :key='index' >
      <cell title= '时间' :value="item.time"></cell>
      <cell-form-preview :list="item.list" ></cell-form-preview>
  </group>
</yd-accordion>
    <yd-popup v-model="show1" position="center" width="90%" id="dialogs">
     <group label-width="4.5em" label-margin-right="2em" label-align="right">
       <h3 style="margin:0.1rem">新增行程记录</h3>
            <div style="background-color:#fff; font-size:0.13rem">
              <yd-cell-item class="weui-cell" >
                <x-input title="目的地" v-model="table.value" placeholder="目的地"></x-input>
                <x-input title="行程" v-model="table.destination" placeholder="行程"></x-input>
                <x-input title="敏感事项" v-model="table.notice" placeholder="敏感事项"></x-input>
                 <x-input title="接洽人公司" v-model="table.conpany" placeholder="接洽公司"></x-input>                 
                <x-input title="接洽人" v-model="table.person" placeholder="接洽人"></x-input>  
            </div>
            <div class="buttons">
               <x-button mini type="primary" @click.native="submit">确定</x-button>
                <x-button mini type="warn" @click.native="cancle">取消</x-button>
            </div>          
          </group>
        </yd-popup>
  </mt-tab-container-item>
</mt-tab-container> -->
</section>
</template>
<script>
import {gettraveldetail,getconcreterecorddetail } from "@/api/visit";
// import dingWISDK from '../../lib/ding';
import { Indicator } from 'mint-ui';
import {setconcreterecord,gettraveltime,setdayrecord } from '@/api/visit'
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,
    FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem,XTable, LoadMore,CellFormPreview,XTextarea} from 'vux'
export default {
  components: { CellFormPreview,PopupPicker,Group, XInput,Cell,Datetime,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem,XTextarea  },
  data (){
    return {
      disabled:true,
      exeId:"",
      selected:'1',
       form: {
          resource: '',         
          time2:"",
          value1:"",
          radioValue: [],
          radioValue1: [],
          radioValue2: [],
          radioValue3: [],
          name:"",
          phone:"",
          number:"",
          money:"",
          receptionist:"",
          daycontent:""
        },
      trid:sessionStorage.getItem("timerange"),
      citys:[],
      city:[],
      city1:"",
      time1:[],
      list1: [],
      list:[],
      times:[],
      concreterecord:[],
      showPopupPicker: false,
      value: [],
      outlist:"",
      addressData: ChinaAddressV4Data,
      showAddress: false,
      showPopup: false,
      demo4:"",
      commonList: [ '合作方', '自费', '酒店' ],
      commonList2: [ '合作方', '自费' ],
      commonList3: [ '合作方', '自费' ],
    //行程记录部分
    show1: false,
 
       
    }
  },
  methods: {
    //初始化数据
    getinitData(){
      if(this.$route.query.id){
         Indicator.open("加载中...");
        let paras={
         //userid:"091562293124062567",
          userid: sessionStorage.getItem("userid"),
          id:this.$route.query.id
        }
        getconcreterecorddetail(paras).then(res =>{
          if(res.data.success==1){
          let data =res.data.data[0]
          this.getfarterList()
            this.concreterecord=data
            this.form.time2=this.concreterecord.rtime
            this.form.radioValue.push(this.concreterecord.breakfastname)
            this.form.radioValue2.push(this.concreterecord.dinnername)
            this.form.radioValue1.push(this.concreterecord.lanchname)
            this.form.radioValue3.push(this.concreterecord.lodgingname)
            this.form.name=this.concreterecord.hotelname
            this.form.phone=this.concreterecord.phone
            this.form.number=this.concreterecord.roomnum
            this.form.money=this.concreterecord.fee
            this.form.receptionist=this.concreterecord.receptionist
            this.form.daycontent=this.concreterecord.daycontent       
          }else{
            this.getfarterList()
            this.$dialog.alert({mes:res.data.message});
          }
         
        })
      }else{
         Indicator.open("加载中...");
        this.getfarterList()
      }
    },
    getfarterList(){
      let para ={
          //userid:"091562293124062567",
          userid: sessionStorage.getItem("userid"),
          id:this.trid
        }     
       gettraveldetail(para).then(res =>{
         if(res.data.success==1){
           let data =res.data.data[0]; 
            this.times=data 
          Indicator.close();   
         }else{
            Indicator.close(); 
            this.$dialog.alert({
              mes:res.data.message,
          });
         }
           
        })
        
    },
        addInfo(vies){
        Indicator.open("提交中...");
        const para2 ={
            //userid:"091562293124062567",
            userid: sessionStorage.getItem("userid"),
            trid:this.trid,
            id:"", 
            date:this.form.time2,
            daycontent:this.form.daycontent,
            breakfasttype:this.form.radioValue.toString(),
            lanchtype:this.form.radioValue1.toString(),            
            dinnertype:this.form.radioValue2.toString(), 
            hotelname:this.form.name,
            phone:this.form.phone,
            lodgingtype:this.form.radioValue3.toString(),
            roomnum:this.form.number,
            fee:this.form.money,
            receptionist:this.form.receptionist,

          } 
          if(this.$route.query.id){
           para2.id=this.$route.query.id
          }else{
            para2.id=sessionStorage.getItem("exeId")
          }  
          setconcreterecord(para2).then(res =>{ 
            Indicator.close();
            let data = res.data
            if(data.success==1){          
               // 清空出差记录
            this.time1=[];
            this.form.time2="";
            this.city1="";
            this.form.radioValue=[];
            this.form.radioValue1=[];
            this.form.radioValue2=[];
            this.form.name="";
            this.form.phone='';
            this.form.radioValue3=[];
            this.form.number="";
            this.form.money="";           
            this.form.daycontent="";
            this.form.receptionist=""
          
            //  this.$dialog.alert({mes:'保存成功！'});s
            this.$router.push({path:'/ding/honestDetial',query:{id:this.trid}})
            //  this.$router.push({path:'/ding/success'})
            }else{
               this.$dialog.alert({mes:data.message});
              Indicator.close();
            }        
          }) ;   
      },
       onItemClick (index) {
      console.log('on item click:', index)
    },
    doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange (ids, names) {
      this.value=names;
      this.citys.push(names);
    },
    
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    onItemClick (value, disabled) {
      if (!this.disabled) {
        this.showPopup = false
      }
    },
    onhide(){ 
      this.city.push(this.$refs.citys.nameValue)  
      this.city=this.dedupe(this.city)
      this.city1= this.city.toString()
    },
    change (val, label) {
      this.form.radioValue=val
    },
    change1 (val, label) {
     this.form.radioValue1=val
    },
    change2 (val, label) {
      this.form.radioValue2=val
    },
    change3 (val, label) {
      this.form.radioValue3=val
    },

     onChange (val) {
      this.time1=val    
    },
    dedupe(array){
    return Array.from(new Set(array));
    },
//行程记录部分
     clearValue (value) {
       
      this.form.time2 = ''
    },
     uuid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
 
    var uuid = s.join("");
    return uuid;
}
  },
  mounted(){
  // this.getfarterList()
  this.getinitData()
  },
  created(){
    let a= this.uuid(9,16).slice(-9);
    let exeId=('0000'+ a +"0000" + 'u'+a).substring(0,20);
    console.log(a);
    console.log(exeId.substring(0,20))
     sessionStorage.setItem("exeId",exeId)
  },
  
}
</script>
<style>
 .goto{height: 100%;
    display: inline-block;
    width: 100%;}
  .mint-navbar .mint-tab-item.is-selected {border-bottom: 3px solid #26a2ff;color: #26a2ff;}
   .foodtype .weui-cells.weui-cells_checkbox{display:flex!important}
   .weui-cells{margin-top: 0!important;}
 .foodtype .weui-cells>a{text-decoration:none}
 #times .weui-cell {text-decoration: none!important;}
#times .weui-cell p {margin: 0 0.34rem 0 0!important;}
 .foodtype .weui-cells>div{align-items: center!important;}
 .foodtype .weui-cells__title{font-size:0.15rem;color:#000;margin:0;padding-left:0.2rem;padding-right: 0}
#stay>div{margin-top: 0}
.yd-notify{font-size: 0.16rem;line-height: 0.2rem;padding: 0.15rem} 
.bottombutton{margin-top:10px}
#historys {font-size:0.14rem}
 #historys .vux-table{line-height: 0.25rem;background: #fff}
#historys .vux-table td{width: 0.4rem}
#historys .vux-x-icon {
  fill: #F70968;
}
#historys .cell-x-icon {
  display: block;
  fill: #637fea;
}
.buttons{margin: 0.2rem}
.yd-notify{font-size: 0.16rem;line-height: 0.2rem;padding: 0.15rem}
 #timelist .yd-accordion-head{height: 0.4rem!important}
#timelist .yd-accordion-title{font-size: 0.15rem !important}
#writenote h5{font-size: 0.12rem;color: red;margin:0.1rem  0 0 0.1rem;text-align: left}
#writenote .mint-tab-item-label{font-size: 0.16rem}
#writenote .yd-cell-left ,#writenote .yd-datetime-input{font-size: 0.15rem}
#writenote .yd-cell-item,#writenote .yd-datetime-input{height: 0.4rem}
#writenote .yd-datetime-input{margin-left: 0.3rem}
.write .vux-cell-primary{flex:0.5}
.write .weui-cell__ft {text-align: left;flex: 2;color: #000; font-weight: normal;}
#times .weui-cells input,#textar textarea{background: #f0f0f0;text-indent:0.1rem}
#special .weui-cells input{background: #fff!important}
</style>


