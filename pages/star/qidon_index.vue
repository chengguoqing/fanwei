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
			if (uni.getStorageSync('diyici') == 2) { //第一次启动了轮播图

				if (!uni.getStorageSync('user_info')) {//已登录
					uni.redirectTo({
						url: '/pages/user/denglu'
					});
				}else{
					uni.redirectTo({
						url: '/pages/index/index'
					});
				}



			} else {
				uni.redirectTo({
					url: '/pages/star/index'
				});
			}

		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped></style>
