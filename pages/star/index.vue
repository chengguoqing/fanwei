<template>
	<view>
		<swiper class="sd_deeerrt" :duration="duration" indicator-dots indicator-color="#D6D6D6" indicator-active-color="#FFDE00">
			<swiper-item>
				<image src="../../static/df_a.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/df_b.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/df_c.png" @click="sd_jhgh_der"></image>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	export default {
		data: {
			duration: 500
		},
		methods: {
			sd_jhgh_der() {
				uni.setStorageSync('diyici', '2');
				uni.redirectTo({
					url: '/pages/user/denglu'
				});
			},
			changeIndicatorDots: function(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay: function(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange: function(e) {
				this.interval = e.detail.value
			},
			durationChange: function(e) {
				this.duration = e.detail.value
			}
		}
	}
</script>
<style scoped>
	.sd_deeerrt {
		position: fixed;
		left: 0px;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.sd_deeerrt image {
		width: 100%;
		height: 100%;
	}
</style>
