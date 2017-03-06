<template>
	<div>
	<x-header >{{title}}</x-header>
	<tab :line-width="1">
      <tab-item selected>
		<router-link to='/' class='routerlink'>日报</router-link>
      </tab-item>
      <tab-item>
		<router-link to='/themesList' class='routerlink'>专题</router-link>
      </tab-item>
      <tab-item>
      	<router-link to='/about' class='routerlink'>关于</router-link>
      </tab-item>
    </tab>
	</div>
</template>
<style>
.routerlink{
	display: block;
}
</style>
<script>
	import { XHeader,Tab, TabItem } from 'vux'
	export default {
		components : { XHeader,Tab, TabItem},
		data(){
			return {
				title : '知乎日报',
			}
		},
	}

</script>