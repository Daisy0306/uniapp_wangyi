<template>
	<view class="indexContainer">
		<!-- 头部搜索区域 -->
		<view class="header">
			<image src="../../static/images/logo.png"></image>
			<view class="search">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button type="default">七月</button>
		</view>
		<!-- 头部导航区域 -->
		<scroll-view class="navBar" scroll-x v-if="indexData.kingKongModule">
			<view class="navItem active" 
			v-for="item in indexData.kingKongModule.kingKongList" 
			:key="item.L1Id">{{item.text}}</view>
		</scroll-view>
		<!-- 首页轮播图区域 -->
		<swiper class="slideshow" 
		indicator-dots indicator-color="green" 
		indicator-active-color="rgba(255,255,255,.5)"
		autoplay
		>
			<swiper-item class="slideItem">
				<image src="../../static/images/test/1.jpg"></image>
			</swiper-item>
			<swiper-item class="slideItem">
				<image src="../../static/images/test/2.jpg"></image>
			</swiper-item>
			<swiper-item class="slideItem">
				<image src="../../static/images/test/3.jpg"></image>
			</swiper-item>
			<swiper-item class="slideItem">
				<image src="../../static/images/test/1.jpg"></image>
			</swiper-item>
			<swiper-item class="slideItem">
				<image src="../../static/images/test/2.jpg"></image>
			</swiper-item>
		</swiper>
		<!-- 热销商品区域 -->
		<view class="hotGoods">
			<view class="title">热销爆款</view>
			<view class="desc">人气好物放心购</view>
			<scroll-view scroll-y class="goodsWrapper">
				<view class="goodsLine">
					<view class="goodsItem">
						<image src="../../static/images/test/4.jpg"></image>
						<view class="goodsDesc">女士户外派克羽绒服</view>
						<view class="price">$<text>1039</text></view>
					</view>
					<view class="goodsItem">
						<image src="../../static/images/test/5.jpg"></image>
						<view class="goodsDesc">挑色狐狸毛领设计，女士户外超长羽绒服</view>
						<view class="price">$<text>1199</text></view>
					</view>
				</view>
				<view class="goodsLine">
					<view class="goodsItem">
						<image src="../../static/images/test/4.jpg"></image>
						<view class="goodsDesc">女士户外派克羽绒服</view>
						<view class="price">$<text>1039</text></view>
					</view>
					<view class="goodsItem">
						<image src="../../static/images/test/5.jpg"></image>
						<view class="goodsDesc">挑色狐狸毛领设计，女士户外超长羽绒服</view>
						<view class="price">$<text>1199</text></view>
					</view>
				</view>
				<view class="goodsLine">
					<view class="goodsItem">
						<image src="../../static/images/test/4.jpg"></image>
						<view class="goodsDesc">女士户外派克羽绒服</view>
						<view class="price">$<text>1039</text></view>
					</view>
					<view class="goodsItem">
						<image src="../../static/images/test/5.jpg"></image>
						<view class="goodsDesc">挑色狐狸毛领设计，女士户外超长羽绒服</view>
						<view class="price">$<text>1199</text></view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import request from "../../utils/request.js";
	import indexData from "../../utils/datas/index.json";
	export default {
		data() {
			return {
				indexData:[]
			}
		},
		async mounted(){
			let result = await request("/getIndexData");
			// 引入json数据，如果发请求拿不到数据，就可以用备用的
			if(!result){
				result = indexData;
			}
			//console.log(result); // 测试是否拿到数据
			this.indexData = indexData;
		}

	}
</script>

<style lang="stylus">
	.indexContainer
		.header
			display flex
			margin 20upx 0
			align-items center
			image
				width 140upx
				height 40upx
				margin 0 20upx
				flex-shrink 0
			.search
				height 60upx
				width 100%
				position relative
				background-color #eee
				border-radius 10upx
				padding-left 70upx				
				.iconfont
					position absolute
					left 20upx
					top 50%
					transform translateY(-50%)
				input
					height 60upx
					.placeholder
						font-size 24upx	
						text-align center
						text-indent -50upx
			button
				height 60upx
				font-size 26upx
				margin 0 20upx
				width 140upx
				text-align center
				line-height 60upx
				color #BB2C08
				flex-shrink 0					
		.navBar
			height 70upx
			white-space nowrap
			font-size 0
			.navItem
				display inline-block	
				height 100%
				box-sizing border-box
				padding 10upx 10upx
				margin 0 20upx
				font-size 28upx
				&.active
					border-bottom red solid 2upx
		.slideshow
			width 100%
			height 370upx
			.slideItem
				width 100%
				image
					width 100%
					height 370upx
					display block
		.hotGoods
			width 100%
			text-align center
			.title
				font-size 34upx
				margin 15upx 0 
			.desc
				font-size 24upx
				color #999
			.goodsWrapper
				width 100%
				.goodsLine
					padding 8upx 15upx
					display flex
					justify-content space-between
				.goodsItem
					width 345upx
					text-align left
					font-size 28upx
					line-height 45upx
					vertical-align top
					image
						width 345upx
						height 345upx
					.price
						color red
						font-weight bold
						text
							margin-left 10upx
																
</style>
