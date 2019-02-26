<template>
	<view>

	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		onLoad: () => {
			uni.showLoading({
				title: '加载中'
			});



		},
		components: {},
		methods: {},
		mounted() {
		
			setTimeout(function() {
				if (uni.getStorageSync('login') == 1) {
					if (!uni.getStorageSync('user_info')) { //已登录
						uni.hideLoading();
						uni.redirectTo({
							url: '/pages/user/denglu'
						});
					} else {
						uni.hideLoading();
						uni.redirectTo({
							url: '/pages/index/index'
						});
					}
					return
				}

				if (uni.getStorageSync('diyici') == 2) { //第一次启动了轮播图
					if (!uni.getStorageSync('user_info')) { //已登录
						uni.hideLoading();
						uni.redirectTo({
							url: '/pages/user/denglu'
						});
					} else {
						uni.hideLoading();
						uni.redirectTo({
							url: '/pages/index/index'
						});
					}
				} else {
					uni.hideLoading();
					uni.redirectTo({
						url: '/pages/star/index'
					});
				}
			}, 1000)
		},
	}
</script>
<style scoped></style>
