<template>
  <div>
    <msg title="提 交 成 功"  :buttons="buttons" :icon="icon"></msg>
  </div>
</template>
<script>
import { Msg, Divider, XButton } from 'vux'

export default {
  components: {
    Msg,
    Divider,
    XButton
  },
  methods: {
    changeIcon () {
     this.$router.push({path:'/ding'})
    }
  },
  data () {
    return {
      description: '确  定',
      icon: '',
      buttons: [{
        type: 'primary',
        text: '确  定',
        onClick: this.changeIcon.bind(this)
      }]
    }
  }
}
</script>
