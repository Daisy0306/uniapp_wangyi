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
			<view class="navItem active">推荐</view>
			<view class="navItem" 
			v-for="item in indexData.kingKongModule.kingKongList" 
			:key="item.L1Id">{{item.text}}</view>
		</scroll-view>
		
		<!-- 首页底部区域 -->
		<Recommend/>
		
	</view>
</template>

<script>
	import {mapState} from "vuex";
	import Recommend from "../../components/Recommend/Recommend.vue"
	export default {
		data() {
			return {
			}
		},
		mounted(){
			this.$store.dispatch('getIndexData')
		},
		components:{
			Recommend
		},
		computed:{
			...mapState({
				indexData:state => state.home.indexData
			})
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
			height 80upx
			white-space nowrap
			.navItem
				display inline-block
				width 140upx
				height 80upx
				font-size 28upx
				line-height 80upx
				text-align center
				box-sizing border-box
				&.active
					border-bottom red solid 2upx
											
</style>
