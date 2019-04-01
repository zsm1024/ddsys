<template>
  <section>
    <div id="postdetail">
      <h3>{{title}}</h3>
      <h4>最新邮寄信息</h4>    
       <yd-cell-group v-for="(form,index) in items" :key="index" style="margin-top:0.2rem">
            <yd-cell-item>
                <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
                <span slot="left">快递单号</span>
                <span slot="right">{{form.expressno}}</span>
             </yd-cell-item>
             <h4>收件信息</h4>
            <yd-cell-item>
                <span slot="left">接收城市</span>
                <span slot="right">{{form.recvcity}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">接收经销商</span>
                <span slot="right">{{form.recvdealer}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">接收人</span>
                <span slot="right">{{form.recver}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">接收日期</span>
                <span slot="right">{{form.recvdate}}</span>
            </yd-cell-item>
            <h4 >寄件信息</h4>
            <yd-cell-item>
                <span slot="left">寄出城市</span>
                <span slot="right">{{form.sendcity}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">寄出经销商</span>
                <span slot="right">{{form.senddealer}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">寄件人</span>
                <span slot="right">{{form.sender}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">寄件日期</span>
                <span slot="right">{{form.senddate}}</span>
            </yd-cell-item>
        </yd-cell-group>

      
    </div>
  </section>
</template>
<script>
import {getpsotmsgdetail} from '@/api/visit'
export default {
  data(){
    return{
      title:this.$route.query.name,
      items:[],     
    }
  },
  methods:{
    getPostMsg(){
      let para={
        //userid:"091562293124062567",
        userid:sessionStorage.getItem("userid"),     
        id:this.$route.query.id,
      }
      getpsotmsgdetail(para).then(res=>{
        let data=res.data
        if(data.success==1){
           if(data.data.length>0){
              this.items=data.data
            }else{
              this.items=data.data
              this.$dialog.alert({mes:"暂无数据"})
            }
        }else{
          this.$dialog.alert({mes:data.message})
        }
       
      })
    }
  },
  mounted(){
    this.getPostMsg()    
  },
}
</script>
<style>
#postdetail h2 {
  border-bottom: 1px solid #ececec;
  width: 100%;
  padding: 0.1rem;
  text-align: left;
  font-size: .24rem;
  padding-bottom: 0.1rem;
  background:#fff;
}
#postdetail h4{
  text-align: left;
  padding: 0.1rem;
  background:#fff;
}
#postdetail .yd-cell-left,
#postdetail .yd-cell-right {
  font-size: 0.16rem;
  min-height: 0.4rem;
  /* line-height: 0.4rem; */
}
#postdetail .yd-cell-right{text-align: left}
#postdetail h3 {
  border-bottom: 1px solid #ececec;
  width: 100%;
  padding: 0.1rem;
  text-align: left;
  padding-bottom: 0.1rem;
  background:#fff;
}
#postdetail .yd-cell-left {
  width: 0.8rem;
  text-align: right;
  justify-content: flex-end;
}
#postdetail .yd-cell-right {
  justify-content: flex-start;
  padding-left: 0.16rem;
}
#postdetail .yd-cell-box {
  margin-bottom: 0.2rem;
}
#postdetail  .yd-cell-icon{margin: 0;}
#postdetail .yd-icon-order{font-size: 0.24rem!important;color: #5252f5!important;}
</style>
