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
			<view class="navItem" :class="activeIndex===-1?'active':''"
			@click="changeActiveIndex(-1)">推荐</view>
			<view class="navItem" :class="activeIndex===index?'active':''"
			v-for="(item,index) in indexData.kingKongModule.kingKongList" 
			:key="item.L1Id"
			@click="changeActiveIndex(index)">{{item.text}}</view>
		</scroll-view>
		
		<!-- 首页底部区域 -->
		<scroll-view scroll-y="true" class="scrollContainer">
			<Recommend v-if="activeIndex===-1"/>
			<CateList v-else :activeIndex="activeIndex"/>
		</scroll-view>		
	</view>
</template>

<script>
	import {mapState} from "vuex";
	import Recommend from "../../components/Recommend/Recommend.vue"
	import CateList from "../../components/cateList/cateList.vue";
	export default {
		data() {
			return {
				activeIndex:-1
			}
		},
		mounted(){
			this.$store.dispatch('getIndexData')
		},
		components:{
			Recommend,
			CateList
		},
		computed:{
			...mapState({
				indexData:state => state.home.indexData
			})
		},
		methods:{
			changeActiveIndex(index){
				this.activeIndex = index;
			}
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
		.scrollContainer
			height calc(100vh - 80upx - 80upx - var(--window-bottom) - var(--window-top))
</style>
