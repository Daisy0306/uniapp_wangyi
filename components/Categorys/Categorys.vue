<template>
  <view class="floorWrapper">
  	<view class="floor">
  		  <image class="titleImg" :src="categoryObj.titlePicUrl"></image>
  		  <scroll-view scroll-x class="goodsList">
  		  	<view class="listItem"  v-for="goodsItem in categoryObj.itemList"
		  :key="goodsItem.name">
  				<image :src="goodsItem.showPicUrl"></image>
  				<text>{{goodsItem.name}}</text>
  			</view>
  		  </scroll-view>
  	</view>
  </view>
</template>

<script>
export default {
  name: 'Categorys',
  data(){
	  return{
		  
	  }
  },
  props:{
	  categoryObj:Object
  }
}
</script>

<style lang="stylus">
.floorWrapper
	.floor
		.titleImg
			width 100%
			height 370upx
			margin-top 20upx
		.goodsList
			white-space nowrap
			.listItem
				display inline-flex
				flex-direction column
				align-items center
				width 200upx
				margin 15upx 20upx
				white-space pre-wrap
				image
					width 200upx
					height 200upx
					background-color #eee
				text
					font-size 24upx
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					height 64upx
					overflow hidden
					
		
</style>
