<template>
  <section>
    <div id="postdetail">
         
       <yd-cell-group  style="margin-top:0.2rem"> 
            <h4>证件信息</h4>
            <yd-cell-item>
                <span slot="left">证件名称</span>
                <span slot="right">{{form.receiveCity}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">证件状态</span>
                <span slot="right">{{form.receiveCity}}</span>
            </yd-cell-item>
            <yd-flexbox style="padding-left:0.24rem;height:0.8rem">
            <div class="yd-cell-left">证件</div>
              <yd-lightbox style="padding-left:0.16rem;height:0.8rem">
                <yd-lightbox-img  style="max-height:0.8rem;max-width:0.8rem;overflow:hidden" :src="form.pic"></yd-lightbox-img>
               </yd-lightbox> 
              </yd-flexbox>

             <h4>收件信息</h4>
            <yd-cell-item>
                <span slot="left">接收城市</span>
                <span slot="right">{{form.receiveCity}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">接收经销商</span>
                <span slot="right">{{form.receiveJXS}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">接收人</span>
                <span slot="right">{{form.receivePerson}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">接收日期</span>
                <span slot="right">{{form.receiveTime}}</span>
            </yd-cell-item>
            <h4 >寄件信息</h4>
            <yd-cell-item>
                <span slot="left">寄出城市</span>
                <span slot="right">{{form.sendCity}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">寄出经销商</span>
                <span slot="right">{{form.sendJXS}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">寄件人</span>
                <span slot="right">{{form.sendPerson}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">寄件日期</span>
                <span slot="right">{{form.sendTime}}</span>
            </yd-cell-item>
            <h4 >快递信息</h4>
            <yd-cell-item>
                <span slot="left">快递公司</span>
                <span slot="right">{{form.sendCity}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">快递单号</span>
                <span slot="right">{{form.sendJXS}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">寄件日期</span>
                <span slot="right">{{form.sendTime}}</span>
            </yd-cell-item>       
            <yd-flexbox style="padding-left:0.24rem;height:0.8rem">
              <div class="yd-cell-left">快递单</div>
              <yd-lightbox style="padding-left:0.16rem;height:0.8rem">
                <yd-lightbox-img  style="max-height:0.8rem;max-width:0.8rem;overflow:hidden" :src="form.pic"></yd-lightbox-img>
              </yd-lightbox> 
            </yd-flexbox>
        </yd-cell-group>

      
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      form:{receiveCity:"保定",receiveJXS:"保定五洲汽车销售有限公司", receivePerson:"张三-1340000000",receiveTime:"2018-07-01",sendCity:"保定", sendJXS:"保定五洲汽车销售有限公司",sendPerson:"张三-1340000000", sendTime:"2018-07-01", pic: "http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg"},          
    }
  }
}
</script>
<style>
/* #postdetail{background: #fff} */
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
  border-bottom: 1px solid #ececec;
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
