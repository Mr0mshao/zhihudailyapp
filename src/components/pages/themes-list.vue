<template>
	<div>
		<div style="margin: 10px;overflow: hidden;" v-for="item in DONE_THEMES.others">
	      <router-link :to="{name:'themesdetail',params:{id:item.id}}">
			<masker style="border-radius: 2px;">
		        <div class="m-img" :style="{backgroundImage:'url('+ url+item.thumbnail +')'}"></div>
		        <div slot="content" class="m-title">
		          {{item.description}}
		          <br/>
		          <span>{{item.name}}</span>
		        </div>
		    </masker>
	      </router-link>
	    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Group,Cell,Masker } from 'vux'	
export default{
	name : 'Themes',
	data(){
		return {
			url:'http://lovestreet.leanapp.cn/zhihu/resource?url=',
		}
	},
	components:{ Group,Cell,Masker},
	computed:{
		...mapGetters(['DONE_THEMES','DONE_LOADING'])
	},
	mounted(){
	},
	created(){
		this.$store.dispatch('FETCH_THEMES')
	},

}
</script>

<style>
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}	
</style>