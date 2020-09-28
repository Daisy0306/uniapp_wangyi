<template>
  <view class="floorWrapper">
  	<view class="floor">
  		  <image class="titleImg" src="https://yanxuan.nosdn.127.net/14318a2168c8c0b6d8e2ed60dcbed570.jpg" mode=""></image>
  		  <scroll-view scroll-x class="goodsList">
  		  	<view class="listItem">
  				<image src="https://yanxuan-item.nosdn.127.net/ea324a88d74978c5a11fe99ece5734ae.png" mode=""></image>
  				<text>随时随地喝热水 3秒即热便携式迷你开水机</text>
  			</view>
  			<view class="listItem">
  				<image src="https://yanxuan-item.nosdn.127.net/ea324a88d74978c5a11fe99ece5734ae.png" mode=""></image>
  				<text>随时随地喝热水 3秒即热便携式迷你开水机</text>
  			</view>
  			<view class="listItem"> 
  				<image src="https://yanxuan-item.nosdn.127.net/ea324a88d74978c5a11fe99ece5734ae.png" mode=""></image>
  				<text>随时随地喝热水 3秒即热便携式迷你开水机</text>
  			</view>
  			<view class="listItem">
  				<image src="https://yanxuan-item.nosdn.127.net/ea324a88d74978c5a11fe99ece5734ae.png" mode=""></image>
  				<text>随时随地喝热水 3秒即热便携式迷你开水机</text>
  			</view>
  			<view class="listItem">
  				<image src="https://yanxuan-item.nosdn.127.net/ea324a88d74978c5a11fe99ece5734ae.png" mode=""></image>
  				<text>随时随地喝热水 3秒即热便携式迷你开水机</text>
  			</view>
  		  </scroll-view>
  	</view>
  </view>
</template>

<script>
export default {
  name: 'Categorys',
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
