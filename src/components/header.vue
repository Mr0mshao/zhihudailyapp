<template>
	<div>
	<x-header >{{title}}</x-header>
	<sticky scroll-box="vux_view_box_body" :offset="46" :check-sticky-support="true" style="z-index: 9999">
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
	</sticky>
	</div>
</template>
<style>
.routerlink{
	display: block;
}
</style>
<script>
	import { XHeader,Tab, TabItem ,Sticky} from 'vux'
	export default {
		components : { XHeader,Tab, TabItem,Sticky},
		data(){
			return {
				title : '知乎日报',
			}
		},
	}

</script>