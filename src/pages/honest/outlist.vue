<template>
<section id="history">
  <!-- <router-link to="/" slot="left">
    <x-header >廉洁历史记录</x-header>
  </router-link> -->
    <!-- <group label-width="5.5em" label-margin-right="2em" label-align="right" style="background:#f5f5f5;margin:0.1rem 0" >
      <datetime title="datetime" v-model="date"></datetime>
     </group> -->
     <yd-cell-item arrow>
        <span slot="left">出差月份：</span>
        <yd-datetime type="month" v-model="datetime"  start-year="2018"  slot="right" :init-emit="false" :placeholder="placeholder"></yd-datetime>
    </yd-cell-item>
    <div style="padding:0 15px;">   
      <x-table>
        <thead>
          <tr>
            <th>廉洁记录日期</th>
            <th>地点</th>
          </tr>
        </thead>
        <tbody>      
             <tr v-for="(item,$index) in items" :key="$index" @click="asd(item)">           
            <td>{{item.datesection}}</td>
            <td>{{item.travellocation}}</td>
            </tr>         
          <!-- <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr> -->
        </tbody>
      </x-table>
    </div>
</section>
</template>
<script>
import { XTable,LoadMore,PopupPicker,Group,Datetime} from 'vux'
import { gettravellist } from '@/api/visit';
 import { Indicator } from 'mint-ui';
export default {
  components: { XTable,LoadMore,PopupPicker,Group,Datetime },
  data() {
    return { 
    placeholder:"",
    datetime:"",
    datetime3:"",
    items: [],
    years : [],
    list2: [],
    month:[],
    value2:[]   
  }
  },
  watch:{
    datetime3:function(Value,old){
     this.datetime3=Value;
     if(!old){
       this.listhist()
     }else{
       this.listhist()
     }
      
    },
    datetime:function(Value,old){
     this.datetime3=Value;
    //  console.log("Value:"+Value);
    //  console.log("old"+old)
    //  if(!old){

    //    this.listhist()
    //  }else{
    //    this.listhist()
    //  }
      
    },
 },
  methods:{
    asd(item){
     this.$router.push({path:'/ding/honestHistory',query:{id:item.id}})
     sessionStorage.setItem("timerange",item.id)
    },
    listhist(){
      Indicator.open("加载中...");
      let para ={
        //userid:"000006813E7A80000U10",
        userid: sessionStorage.getItem("userid"),
        month:this.datetime3,
        iscommit:true,
      }
      gettravellist(para).then(res=>{
        if(res.data.success==1){
          if(res.data.data.length>0){
            let data =res.data.data
            this.items=data
            Indicator.close();
          }else{
            let data =res.data.data
            this.items=data
            this.$dialog.alert({mes:'暂无数据'});
            Indicator.close();
          }
        }else{
          this.$dialog.alert({mes:res.data.message});
          Indicator.close();
        }
        
      })
    }
  },
  mounted(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day =new Date(year,month,0);
    month = month < 10 ? "0" + month : month;
    this.datetime3 = year.toString() + "-" + month.toString();
    this.placeholder= year.toString() + "-" + month.toString();
  }
}
</script>
<style scoped>
  #history {font-size:0.14rem}

</style>
<style>
    #history .yd-cell-arrow,#history .yd-datetime-input{height:0.4rem}
  #history .yd-cell-arrow:after,#history .yd-cell-left,#history .yd-datetime-input{font-size: 0.16rem;height:0.4rem;line-height:0.4rem}
  #history .yd-cell-right{min-height:0}
  #history .yd-datetime-placeholder{color:#555}
</style>

