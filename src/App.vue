<template>
  <div id="app">
  	<layoutHeader></layoutHeader>
    <router-view></router-view>
	<loading v-show="DONE_LOADING"></loading>
  </div>
</template>

<script>
import layoutHeader from './components/header.vue'
import { Loading } from 'vux'
import { mapGetters } from 'vuex'
export default {
  data () {
        return {
            isShow:true
        }
  },
  name: 'app',
  components:{ layoutHeader, Loading},
  methods : {
  	showLoading(){
  		setTimeout(()=>{
	  		this.isShow = false
	  	},2000)
  	},
  },
  mounted () {
  },
  computed: {
      ...mapGetters(['DONE_LOADING'])
    },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
