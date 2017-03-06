<template>
	<div>
		<loading v-show='DONE_LOADING_TWO'></loading>
		<div style="margin: 10px;overflow: hidden;">	<masker style="border-radius: 2px;">
		        <div class="m-img" :style="{backgroundImage:'url('+ url+DONE_THEMES_LIST.image +')'}"></div>
		        <div slot="content" class="m-title">
		          {{DONE_THEMES_LIST.description}}
		          <br/>
		          <span>{{DONE_THEMES_LIST.name}}</span>
		        </div>
		    </masker>
	    </div>
	    <div v-if='DONE_THEMES_LIST'>
			<router-link :to="{name:'newsdetail',params:{id:item.id}}" class="weui-media-box weui-media-box_appmsg"  v-for='item in DONE_THEMES_LIST.stories'>
				<div class="weui-media-box__hd">
					<img :src="url+item.images" class="weui-media-box__thumb">
				</div>
				<div class="weui-media-box__bd">
					<p class="weui-media-box__desc">{{item.title}}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Loading,Masker,Panel } from 'vux'	
export default{
	name : 'Themes',
	data(){
		return {
			url:'http://lovestreet.leanapp.cn/zhihu/resource?url=',
		}
	},
	components:{Loading,Masker,Panel},
	computed:{
		...mapGetters(['DONE_THEMES_LIST','DONE_LOADING_TWO'])
	},
	created(){
		this.$store.dispatch('FETCH_THEMES_list', this.$route.params.id)
		window.scrollTo(0, 0)
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