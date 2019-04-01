<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {sign} from '@/api/visit'
  export default {
    name: 'App',
    methods:{    
       
    },
    mounted(){
    }
  }
 
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.16rem
  /* margin-top:0.3rem; */
}
.weui-cell{padding:0.1rem!important;font-size:0.15rem}
a{text-decoration: none}
ul,li{list-style:none}
.mint-indicator-wrapper{
    font-size: 0.12rem!important
}
</style>
