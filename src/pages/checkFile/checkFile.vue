<template>
<section>
  <group label-width="5em" label-margin-right="1.5em" label-align="right" >
    <x-input title="证件名称：" name="name" v-model="form.cardname" placeholder="请输入证件名称" readonly ></x-input>
   <popup-picker title="证件状态：" :data="list1" v-model="form.cardStu" placeholder="请选择"></popup-picker> 
    <div class="weui-cell">证件照片上传</div>
  </group>
   <div class="add-img" style="background:#fff">
     <input @change="fileChange($event)" accept="image/*" type="file" id="upload_file" />
     <ul class="img-list">  
        <li v-for="(url,index) in imgList" :key="index">
            <span class="del fa fa-remove"  @click="delImg(index)"></span>
            <yd-lightbox>
                <div class="app-bg">
                    <yd-lightbox-img class="app-bg" :src="url.src"  v-lazy:background-image="{src: url.src}"></yd-lightbox-img>
                </div>
            </yd-lightbox>
        </li>
    </ul>
</div>
 <x-button type="primary"  style="margin-top:0.2rem" @click.native="subList" >提    交</x-button>
</section> 
</template>
<script>
import {SaveCheckInfo,SavePic} from '@/api/visit'
import {
  Selector,
  Group,
  XInput,
  XAddress,
  ChinaAddressV4Data,
  Datetime,
  XButton,
  XTable,
  XDialog,
  PopupPicker
} from "vux";
import { setTimeout, setInterval } from 'timers';
export default {
  components: {
    Selector,
    Group,
    XInput,
    XAddress,
    ChinaAddressV4Data,
    Datetime,
    XButton,
    XTable,
    PopupPicker
  },
  data() {
    return {
      tempname: '',
      form: {
        cardname:this.$route.query.name,
        cardStu:[]
      },
      disable:true,
      showFace: false,
      size: 0,
      list1: [['正常', '异常']],
      limit:6, //限制图片上传的数量
      tempImgs: [],
      templ:"",
      imgList: [
        // { src: "http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg" },
        // { src: "http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg" },
        // { src: "http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg" }
      ]
    };
  },
  methods: {
    chooseType() {
      document.getElementById("upload_file").click();
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      if (this.limit !== undefined) this.limit--;
      if (this.limit !== undefined && this.limit < 0) return;
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf("image") == -1) {
        this.$dialog.toast({ mes: "请选择图片文件" });
      } else {
        let reader = new FileReader();
        let image = new Image();
        let _this = this;
        this.tempname =  file.name
        reader.readAsDataURL(file);
        reader.onload = function() {
         
           file.src = this.result;
          image.onload = function() {
            let width =image.width;
            let height =image.height;
            file.width = width;
            file.height = height;
            _this.imgList.push({
              "src":file.src,
              "size":file.size
            });           
          };
           image.src = file.src;
          let params = new FormData() ; //创建一个form对象
          params.append('file',file,file.name);
           //append 向form表单添加数据
           SavePic(params).then(res =>{
            let data =res.data;
            if(res.data.success==1){
                _this.templ=res.data.data 
                _this.disable=false 
            }else{
              _this.$dialog.alert({mes:"获取MD5值失败！"});
            }
      })
        }; 
      }
    },
    delImg(index) {
      this.size = this.size - this.imgList[index].size; //总大小
      this.imgList.splice(index, 1);
      if (this.limit !== undefined) this.limit = 6 - this.imgList.length;
    },
    displayImg() {},
    //提交
    subList(){
      console.log(this.tempname)
     let para = {
       filename: this.tempname,
       userid: sessionStorage.getItem("userid"),
       //userid:"091562293124062567",
       md5:this.templ,
       status:this.form.cardStu.toString(),
       id:this.$route.query.id
     }
     if(para.status=="正常"&&para.md5){
       para.status="1"
      
     }else if(para.status=="异常"&&para.md5){
       para.status="0"
     }else{
       this.$dialog.alert({mes:"请将信息填写完整！"});
       return false
     }
      SaveCheckInfo(para).then(res =>{
        let data= res.data.success     
        if(res.data.success==1){ 
        this.$dialog.alert({mes:"提交成功！"});
          setTimeout(() =>{
           this.$router.push('/ding/checklist')
        },800)
        }else{
           this.$dialog.alert({mes:res.data.message})
        }       
      })           
    }
  }
};
</script>
<style>
.fileUpLoads {
  font-size: 0.16rem;
}
.app-bg img {
  width: 100%;
  height: 100%;
  -webkit-transform: scale(1.03);
  -moz-transform: scale(1.03);
  -ms-transform: scale(1.03);
  -o-transform: scale(1.03);
  transform: scale(1.03);
}
textarea {
  padding: 10px;
}

.text-length {
  font-size: 0.14rem;
  z-index: 999;
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
  color: #e4e4e4;
}

.warning {
  color: #fe9900;
}

.add-img {
  width: 100%;
  padding: 10px;
}

.add-img p {
  color: #999;
  font-size: 0.16rem;
}

.mui-content {
  padding-bottom: 0.6rem;
}

.mui-content .idea {
  margin-top: 8px;
  background-color: #ffffff;
}

.good-item {
  text-align: center;
  width: 33%;
  max-width: 100%;
  overflow: hidden;
  padding-right: 0.1rem;
  padding-bottom: 0.1rem;
  float: left;
}

.good-item span {
  font-size: 0.15rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.5rem;
  display: block;
  width: 100%;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 1px solid #cccccc;
}

.mui-table {
  padding-top: 10px;
  color: #333;
  padding-left: calc(0.5% + 10px);
}

.h-line-behind {
  line-height: 0.4rem;
  padding-left: 0.4rem;
}

.question {
  border: 0;
  margin-bottom: 0.1rem;
}

.add {
  display: inline-block;
  height:100%
}

.add-image {
  /* padding-top:0.15rem; */
  /* margin-left:0.1rem; */
  width: 100%;
  top: 0.2rem;
  height: 100%;
  border: 1px dashed rgba(0, 0, 0, 0.2);
}
.add-image i {
  margin-top: 30%;
}
.add-image .icon-camera {
  font-size: 0.24rem;
}

.good-item .choose {
  color: #fff;
  background-color: #87582e;
  color: #fff;
  border: 0;
}

.mui-btn-block {
  border: 0;
  border-radius: 0;
  background-color: #87582e;
  color: #fff;
  margin-bottom: 0;
  bottom: 0;
}

.mui-buttom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
}

/*九宫格*/
.img-list {
  overflow: hidden;
}

.img-list > li {
  float: left;
  width: 32%;
  text-align: center;
  padding-top: 31%;
  margin-left: 1%;
  margin-top: 1%;
  position: relative;
}

.img-list > li > div {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.img-list > li > div .app-bg {
  width: 100%;
  height: 100%;
}

.mui-fullscreen {
  z-index: 9999;
}

.del {
  position: absolute;
  width: 0.18rem;
  top: 0;
  right: 0;
  z-index: 999;
  font-size: 0.16rem;
}
.vux-popup-picker-value{font: 100% tahoma,\5b8b\4f53,arial;}
 .vux-popup-picker-select{text-align: left!important}
</style>
