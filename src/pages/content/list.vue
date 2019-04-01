<template>
<section>
  <!-- <x-header>员工管理</x-header> -->
  <div class="lsjl">
    <h3>廉洁记录</h3>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item :link="{ path: '/ding/honestlist'}">
         <p><span  class="iconTy mr">
           <!-- <i class="fa fa-edit fa-2x" style="color:#fff"></i> -->
           </span></p>
          <p class="names"><span >每日记录</span></p> 
      </grid-item>
       <grid-item :link="{ path: '/ding/outlist'}">
         <p><span  class="iconTy ls"><i class="fa fa-reorder fa-2x" style="color:#fff"></i></span></p>
          <p class="names"><span >历史记录</span></p> 
      </grid-item>    
    </grid>
    <h3>活动及竞品</h3>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
       <grid-item :link="{ path: '/ding/product'}">
         <p><span  class="iconTy hd"></span></p>
          <p class="names"><span >活动查询</span></p> 
      </grid-item>
       <grid-item :link="{ path: '/ding/compare'}">
         <p><span  class="iconTy jp"></span></p>
          <p class="names"><span >竞品查询</span></p> 
      </grid-item>
    </grid>
    <h3>备案查询</h3>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
       <grid-item :link="{ path: '/ding/record'}">
         <p><span  class="iconTy ba"></span></p>
          <p class="names"><span >备案查询</span></p> 
      </grid-item>
      <grid-item :link="{ path: '/ding/recordtwo'}">
         <p><span  class="iconTy db"></span></p>
          <p class="names"><span >代办查询</span></p> 
      </grid-item>
    </grid>
     <h3>证件管理</h3>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
       <grid-item :link="{ path: '/ding/checklist'}">
         <p><span  class="iconTy zj"></span></p>
          <p class="names"><span >证件点检</span></p> 
      </grid-item>
       <grid-item :link="{ path: '/ding/historylist'}">
         <p><span  class="iconTy dj"></span></p>
          <p class="names"><span >点检历史</span></p> 
      </grid-item>
       <!-- <grid-item :link="{ path: '/ding/postList'}">
         <p><span  class="iconTy"><i class="fa fa-truck fa-2x" style="color:#fff"></i></span></p>
          <p class="names"><span >证件邮寄</span></p> 
      </grid-item> -->
       <grid-item :link="{ path: '/ding/postSearch'}">
         <p><span  class="iconTy yj"></span></p>
          <p class="names"><span >邮寄查询</span></p> 
      </grid-item>
    </grid>
    <h3>计算器</h3>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
       <grid-item :link="{ path: '/ding/count'}">
         <p><span  class="iconTy jsq"></span></p>
          <p class="names"><span >计算器</span></p> 
      </grid-item>
    </grid>
  </div>
</section>
</template>
<script >
import {sign} from '@/api/visit'
import { getuserinfo,testpic} from "@/api/visit";
// import { quitCode } from '@/lib/share';
import { Indicator } from "mint-ui";
import dingWISDK from "../../lib/ding";
import { Grid, GridItem } from "vux";
import { setInterval, clearInterval } from "timers";
export default {
  name: "home",
  components: { Grid, GridItem },
  data() {
    return {
      testids: 0,
      timer: null,
      file: '',
      dialogImageUrl: '',
        dialogVisible: false
    };
  },
  methods: {  
      changTitle(){
      dd.biz.navigation.setTitle({
          title : '日常事务',//控制标题文本，空字符串表示显示默认文本
          onSuccess : function(result) {
          },
          onFail : function(err) {}
      });
     },

    getUserId() {
      if (!sessionStorage.getItem("userid")||sessionStorage.getItem("userid")=='null') {
        Indicator.open("加载用户中...");
        dd.ready(function() {
          dd.runtime.permission.requestAuthCode({
            // corpId: "ding893a259d2152e5e635c2f4657eb6378f",
            corpId:window.g.corpId,                     
            onSuccess: function(result) {
              sessionStorage.setItem("authCode", result.code);
              let para = {
                infocode: result.code
              };
              getuserinfo(para).then(res => {
                let data = res.data.data;
                if (res.data.success == 1) {
                  Indicator.close();
                  sessionStorage.setItem("userid", data.userid);                 
                }else{
                  Indicator.close();
                  this.$dialog.alert({mes:res.data.message});
                }
              });
            },
            onFail: function(err) {
              Indicator.close();
              this.$dialog.alert({mes:err});
              reject(err);
            }
          });
        });
      }     
    },
  },
  mounted() {
    this.changTitle()
    this.getUserId();
  },

};
</script>
<style  scoped>
.lsjl h3 {
  padding: 0.05rem;
}
.lsjl .weui-grid {
  width: 25% !important;
}
.lsjl .weui-grids {
  border-bottom: 1px solid #e7e7e7;
}
.weui-grid:after {
  border-bottom: none;
}
.lsjl {
  padding: 0.1rem;
  font-size: 0.14rem;
  font-weight: 600;
  text-align: left;
}
.lsjl ul {
  margin: 0.2rem 0;
  list-style: none;
}
.iconTy {
  display: inline-block;
   height: 0.5rem;
  width: 0.5rem; 
  /* background: #26a2ff; */
  text-align: center;
  line-height: 0.57rem;
}
.names {
  color: rgb(146, 148, 150);
  margin-top: 0.08rem;
}
.mr{background: url("../../assets/imgs/icon_mrjl.png") no-repeat;}
.ls{background: url("../../assets/imgs/icon_lsjl.png") no-repeat;}
.hd{background: url("../../assets/imgs/icon_hdcx.png") no-repeat;}
 .jp{background: url("../../assets/imgs/icon_xsxt.png") no-repeat;}
 .ba{background: url("../../assets/imgs/icon_bacx.png") no-repeat;}
 .db{background: url("../../assets/imgs/icon_ljjl.png") no-repeat;} 
.zj{background: url("../../assets/imgs/icon_zjdj.png") no-repeat;}
.dj{background: url("../../assets/imgs/icon_djls.png") no-repeat;}
.yj{background: url("../../assets/imgs/icon_yjcx.png") no-repeat;}
.jsq{background: url("../../assets/imgs/icon_jsq.png") no-repeat;} 
</style>
