<template>
<section>
    <yd-cell-group id="countNum">
        <yd-cell-item>
            <span slot="left">贷款金额：</span>
            <yd-input slot="right" type="number" v-model="loan" placeholder="请输入贷款金额"></yd-input>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left">贷款期限：</span>
            <yd-input slot="right" type="number" v-model="range" placeholder="请输入贷款期限"></yd-input>
        </yd-cell-item>
          <yd-tab  :callback="fn">
            <yd-tab-panel label="年化利率">
              <yd-cell-item>
                <yd-input slot="right" type="number" class="inputs" v-model="year" placeholder="请输入年化率"></yd-input>
                <span slot="right">%</span>
              </yd-cell-item>
            </yd-tab-panel>
            <yd-tab-panel label="月供">
              <yd-cell-item>
                <yd-input slot="right" type="number" class="inputs"  v-model="month" placeholder="请输入月供"></yd-input>
                <span slot="right">元</span>
              </yd-cell-item>
            </yd-tab-panel>
            <yd-tab-panel label="费率">
              <yd-cell-item>
                <yd-input slot="right" type="number" class="inputs" v-model="fee" placeholder="费率"></yd-input>
                <span slot="right">%</span>
              </yd-cell-item>
            </yd-tab-panel>
          </yd-tab>
          <yd-flexbox>
            <yd-flexbox-item><yd-button size="large" type="primary" @click.native="count(label)">计算</yd-button></yd-flexbox-item>
            <yd-flexbox-item> <yd-button size="large" type="primary" @click.native="reseat">重置</yd-button></yd-flexbox-item>
        </yd-flexbox>
            
           
    </yd-cell-group>
     <yd-cell-group id="countresult">
        <yd-cell-item>
            <span slot="left">总还款额</span>
            <yd-input slot="right" readonly v-model="form.total"></yd-input>
             <span slot="right">元</span>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left">利息总额</span>
            <yd-input slot="right" readonly v-model="form.interest"></yd-input>
            <span slot="right">元</span>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">费率</span>
            <yd-input slot="right" readonly  v-model="form.rate"></yd-input>
            <span slot="right">%</span>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left">年利率</span>
            <yd-input slot="right" readonly  v-model="form.yearrate"></yd-input>
            <span slot="right">%</span>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left">月供</span>
            <yd-input slot="right" readonly  v-model="form.monthPay"></yd-input>
            <span slot="right">元</span>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left">月供万元系数</span>
            <yd-input slot="right" readonly  v-model="form.supply"></yd-input>
            <span slot="right">元</span>
        </yd-cell-item>
     </yd-cell-group>
     </section>
</template>

<script type="text/babel">
import { getannualrate, getmonthly,getrate } from "@/api/count";
export default {
  data() {
    return {
      label: "年化利率",
      loan: "",
      range: "",
      year: "",
      month: "",
      fee: "",
      form: {
        total: "",
        interest: "",
        rate: "",
        yearrate: "",
        supply: "",
        monthPay: ""
      }
    };
  },
  methods: {
     changTitle(){
      dd.biz.navigation.setTitle({
          title : '计算器',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },
    fn(label, key) {
      this.label = label;
    },
    count(item) {
      if (item == "年化利率") {
        let para = {
          loanmoney: this.loan,
          month: this.range,
          rate: this.year
        };
        getannualrate(para).then(res => {
          if (res.data.success == 1) {
            let data = res.data.data;
            this.form.total = data.totalmoney;
            this.form.interest = data.accrual;
            this.form.monthPay = data.paymonth;
            this.form.rate = data.rate;
            this.form.supply = data.rateper;
            this.form.yearrate = this.year;
          }
        });
      }
      if (item == "月供") {
        let para = {
          loanmoney: this.loan,
          month: this.range,
          paymonth: this.month
        };
        getmonthly(para).then(res => {
          if (res.data.success == 1) {
            let data = res.data.data;
            this.form.total = data.totalmoney;
            this.form.interest = data.totalaccrual;
            this.form.monthPay=this.month
            this.form.rate = data.rate;
            this.form.yearrate = data.yearaccrual;
            this.form.supply = data.rateper;
          }
        });
      }
      if (item == "费率") {
        let para = {
          loanmoney: this.loan,
          month: this.range,
          rateper:this.fee
        };
          getrate(para).then(res => {
          if (res.data.success == 1) {
            let data = res.data.data;
            this.form.total = data.totalmoney;
            this.form.interest = data.totalaccrual;
            this.form.monthPay=data.paymonth
            this.form.rate = this.fee;
            this.form.yearrate = data.yearaccrual;
            this.form.supply = data.rateper;
          }
        }); 
      }
    },
    reseat(){
      this.loan= "",
      this.range="",
      this.year= "",
      this.month="",
      this.fee= "",
      this.form={}
    }

  },
  mounted(){
     this.changTitle()
   }

};
</script>
<style>
#countNum .yd-cell-left,
#countNum .yd-cell-right input,
#countNum .yd-cell-right,
#countNum .yd-tab-nav-item {
  font-size: 0.14rem;
  min-height: 0;
  height: 0.4rem;
  line-height: 0.4rem!important;
}
#countNum .yd-btn-block {
  margin-top: 0.2rem;
  font-size: 0.16rem;
  height: 0.4rem;
}
#countresult .yd-cell-left,
#countresult .yd-cell-right input,
#countresult .yd-cell-right,
#countresult .yd-tab-nav-item {
  font-size: 0.14rem;
  min-height: 0;
  height: 0.4rem;
  line-height: 0.4rem;
}
#countresult .yd-cell-left {
  display: inline-block;
  width: 1rem;
  text-align: left;
}
.yd-input-clear {
  display: none;
}
.yd-cell-right .yd-input input{
  text-align: right;
}
#countNum .yd-cell-box{margin-bottom: 0}
#countNum .yd-flexbox-item{margin:0  0.1rem 0.1rem 0.1rem;}
/* #countNum .yd-input-warn::after,#countNum .yd-input-success::after{} */
</style>

