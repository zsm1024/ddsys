<template>
<section>

<yd-accordion id="timelist">
  <group  v-for="(item,index) in items " :key='index' >
      <cell title= '时间' :value="item.time"></cell>
      <cell-form-preview :list="item.list" ></cell-form-preview>
  </group>
</yd-accordion>
    <!-- <yd-popup v-model="show1" position="center" width="90%" id="dialogs">
     <group label-width="4.5em" label-margin-right="2em" label-align="right">
       <h3 style="margin:0.1rem">新增行程记录</h3>
            <div style="background-color:#fff; font-size:0.13rem">
                <x-input title="开始时间" v-model="table.time1" placeholder="例:10:03"></x-input>
                <x-input title="结束时间" v-model="table.time2" placeholder="例:10:03"></x-input>
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
        </yd-popup> -->
  </section>
</template>
<script>
import {getconcreterecorddetail} from '@/api/visit'
import { Group,XInput,Cell,Datetime,PopupPicker, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name,Checklist,Flexbox,
    FlexboxItem,TransferDomDirective as TransferDom,XDialog,Tab, TabItem,XTable, LoadMore,CellFormPreview} from 'vux'
export default {
    components: { CellFormPreview,Group, XInput,Cell,Datetime,PopupPicker,XAddress, XButton,Checklist,Flexbox,FlexboxItem,XDialog,XTable,LoadMore,Tab, XTable,LoadMore, TabItem },
   data() {
     return {
       show1: false,
       detials:[],
        items: [],
        time:"",
        table:{
           time1:"",
           time2:'',
           notice:"",
           value:"",
           person:"",
           conpany:"",
           destination:""
        },
       
     }
   },
   methods:{
       getrecorddetials(){
        let para={
          //userid:"000088654C24B0000U96",
          userid: sessionStorage.getItem("userid"),
          id:this.$route.query.id
        }
        getconcreterecorddetail(para).then(res =>{
          let data =res.data.data
          data.dayrecord.forEach(ele => {
            this.detials.push(
              {"label":"目的地","value":ele.destination},
              {"label":"接洽人公司","value":ele.receptionagency},
              {"label":"接洽人姓名","value":ele.receptionist},
              {"label":"行程","value":ele.tripcontent},
              {"label":"敏感事项","value":ele.sentivememo},
              ); 
          this.items.push({"time":ele.time,"list":this.detials})         
          });

        })
      }
   },
   mounted(){
     this.getrecorddetials()
   }
}
</script>
<style >
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
</style>



