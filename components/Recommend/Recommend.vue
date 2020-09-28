<template>
  <view class="recommendContainer">
  	<!-- 首页轮播图区域 -->
  	<swiper class="bannerSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<image class="bannerImg" src="https://yanxuan.nosdn.127.net/b4f1825564cb1c071ef3b96a11ae11a8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
		</swiper-item>
		<swiper-item>
			<image class="bannerImg" src="https://yanxuan.nosdn.127.net/3cdf019e3111d65b861d93c6182f7596.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
		</swiper-item>
		<swiper-item>
			<image class="bannerImg" src="https://yanxuan.nosdn.127.net/7a67e59b334b50c6d94f13bedc50d2c3.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
		</swiper-item>
		<swiper-item>
			<image class="bannerImg" src="https://yanxuan.nosdn.127.net/b4f1825564cb1c071ef3b96a11ae11a8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
		</swiper-item>
		<swiper-item>
			<image class="bannerImg" src="https://yanxuan.nosdn.127.net/3cdf019e3111d65b861d93c6182f7596.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
		</swiper-item>
	</swiper>
	
	<!-- policyDescList区域 -->
	<view class="moreServices">
		<view class="service" v-for="item in indexData.policyDescList" :key="item.desc">
			<image :src="item.icon" mode=""></image>
			<text>{{item.desc}}</text>
		</view>
	</view>
	
	<!-- 小图分类导航区域  kingKongList-->
	<view class="imgNavWrapper">
		<view class="imgNavItem" v-for="imgNavItem in indexData.kingKongModule.kingKongList" :key="imgNavItem.text">
			<image :src="imgNavItem.picUrl" mode=""></image>
			<text>{{imgNavItem.text}}</text>
		</view>
	</view>
	
	<Categorys />
  </view>
</template>

<script>
import {mapState} from "vuex";
import Categorys from "../Categorys/Categorys.vue"
export default {
  name: 'Recommend',
  data(){
	  return{
		  
	  }
  },
  computed:{
	  ...mapState({
		  indexData:state => state.home.indexData
	  })
  },
  components:{
	  Categorys 
  }
}
</script>

<style lang="stylus">
.recommendContainer
	.bannerSwiper
		height 350upx
		.bannerImg
			width 100%
			height 100%
	.moreServices
		display flex
		margin 8upx 0
		.service
			flex-grow 1
			text-align center
			image
				width 32upx
				height 32upx
				vertical-align middle
			text
				font-size 24upx
				vertical-align middle
	.imgNavWrapper
		display flex
		flex-wrap wrap
		margin-top 20upx
		.imgNavItem
			display flex
			flex-direction column
			align-items center
			margin 0 20upx
			image
				width 110upx
				height 110upx
			text
				font-size 24upx
</style>
