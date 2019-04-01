<template>
  <div class="hello">
    <List></List>
  </div>
</template>

<script>
import HeaderBar from '@/pages/HeaderBar'
import List from '@/pages/content/list'
export default {
  components:{
    HeaderBar,
    List
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
