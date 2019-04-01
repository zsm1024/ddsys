<template>
<section id="historydetail">
  <h3>{{title}}</h3>
  <div>
    <yd-cell-group v-for="(item,index) in items" :key="index">
      <yd-cell-item>
        <span slot="left">提交时间</span>
        <span slot="right">{{item.submitdate}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">审核时间</span>
        <span slot="right">{{item.auditdate}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">证件状态</span>
        <span slot="right">{{item.docstatus}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">状态</span>
        <span slot="right">{{item.checkstatus}}</span>
      </yd-cell-item>
        <yd-flexbox style="padding-left:0.24rem;height:0.8rem" >
            <div class="yd-cell-left">点检图片</div>
              <yd-lightbox style="padding-left:0.16rem;height:0.8rem" :num="items.length">
                <yd-lightbox-img  style="max-height:0.8rem;max-width:0.8rem;overflow:hidden" :src="path+item.imagepath+'/a'"></yd-lightbox-img>
               </yd-lightbox> 
        </yd-flexbox>
          </yd-cell-group>
  </div>
</section>  
</template>
<script>
import{getdochistory} from '@/api/visit'
import { Indicator } from 'mint-ui';
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      path:window.g.ApiUrl+'/activity/piclink/',
      show:false,
      title: this.$route.query.title,
      items: [],
    };
  },
  methods:{
    gethistory(){
      let para={
        userid: sessionStorage.getItem("userid"),
        //userid:"091562293124062567",
        id:this.$route.query.id,
        //id:"00001M1SMQV8V000HA0L"
        
      }
      getdochistory(para).then(res =>{
        let data = res.data
        if(res.data.success==1){
          this.items=res.data.data          
        }
      })
    }
  },
  mounted(){
    this.gethistory()
  }
};
</script>
<style >
#historydetail .yd-cell-left,
#historydetail .yd-cell-right {
  font-size: 0.16rem;
  min-height: 0;
  height: 0.4rem;
  line-height: 0.4rem;
}
#historydetail h3 {
  border-bottom: 1px solid #ececec;
  width: 100%;
  padding: 0.1rem;
  text-align: left;
  padding-bottom: 0.1rem;
  background:#fff;
}
#historydetail .yd-cell-left {
  width: 0.8rem;
  text-align: right;
  justify-content: flex-end;
}
#historydetail .yd-cell-right {
  justify-content: flex-start;
  padding-left: 0.16rem;
}
#historydetail .yd-cell-box {
  margin-bottom: 0.2rem;
}
</style>




