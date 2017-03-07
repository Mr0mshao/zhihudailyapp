<template>
	<div>
		<swiper  loop dots-position='center' height="180px" :aspect-ratio="650/650">
			<div v-for='list in DONE_NEWS_LIST_ROOT'>
				<swiper-item v-for='item in list.top_stories' >
					<router-link :to="{name:'newsdetail',params:{id:item.id}}">
						<img :src="url + item.image" class="crousel-img">
						<p class="img-info">{{item.title}}</p>
					</router-link>
				</swiper-item>
			</div>
		</swiper>
		<div v-if='DONE_NEWS_LIST_ROOT' v-for='list in DONE_NEWS_LIST_ROOT'>
			<sticky scroll-box="vux_view_box_body" :offset="46" :check-sticky-support="true" style="z-index: 9999;">
				<p class="data-mark">{{list.date | formatDate}}</p>
	        </sticky>
			<router-link :to="{name:'newsdetail',params:{id:item.id}}" class="weui-media-box weui-media-box_appmsg" v-for='item in list.stories'>
			<!-- 这里的classname 直接从vux上拿过来的，属于panel的样式 -->
				<div class="weui-media-box__hd">
					<img :src="url+item.images[0]" class="weui-media-box__thumb">
				</div>
				<div class="weui-media-box__bd">
					<p class="weui-media-box__desc">{{item.title}}</p>
				</div>
			</router-link>
		</div>
		<x-button type="default" @click.native="loadMore">加载更多...</x-button>
		<BackToTop v-show="backBtnShow" @click.native='backToTop'></BackToTop>
	</div>
</template>

<script>
	import { Panel,Swiper,SwiperItem,XButton,Sticky  } from 'vux'
	import { mapGetters } from 'vuex'
	import BackToTop from '../backToTop.vue'
	export default {
		data(){
			return {
				url:'http://lovestreet.leanapp.cn/zhihu/resource?url=',
			    backBtnShow : false
			}
		},
		components:{ Panel ,Swiper,SwiperItem,XButton,Sticky ,BackToTop},
		methods : {
			getData(){
				if(this.DONE_NEWS_LIST_ROOT.length>0){

				}else{
					this.$store.dispatch('FECTH_NEWS_LATEST')
				}	
			},
			loadMore(){
				this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
			},
			backToTop() {
				window.scrollTo(0,0)
				this.backBtnShow = false
			}
		},
		created(){
			this.getData();
			var _this = this
			setInterval(function(){
				if(window.scrollY > 650){
					_this.backBtnShow = true
				}else{
					_this.backBtnShow = false
				}
			},500)
		},
		computed: {
			...mapGetters(['DONE_NEWS_LATEST','DONE_NEWS_LIST_ROOT','DONE_LOADING']),
		},
	}	

</script>

<style>
	.crousel-img{
		width: 100%;height: 150px;
	}
	.data-mark{
		height: 46px;
		line-height: 46px;
		text-align: center;
		display: block;
		background: #2a5caa;
		font-size: 14px;
		color: #fff;
		letter-spacing:5px
	}
	.img-info{
		margin: 0;padding: 13px 5px 5px 5px;text-align: center;font-size: 12px;
		color:#333;
	}
</style>