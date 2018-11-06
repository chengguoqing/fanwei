<template>
	<view class="sd_jh_deer">
		<view class="fz30 cf cen df_ddrtxdr">
			<image src="../../static/img/logo.png" class="logo_ert"></image>
			<br>
			苍鸟防伪
		</view>

		<view class="form_deng">
			<!-- <view class="sd_jh_deert">
				<input type="text" placeholder="请输入用户名" placeholder-class="df_jh_der" />
				<view class="d_ijh_righte">
					<image src="../../static/img/dfd_a.png" class="cz"></image>

				</view>
			</view>


			<view class="sd_jh_deert mt30">
				<input password="true" placeholder="请输入密码" placeholder-class="df_jh_der" />
				<view class="d_ijh_righte">
					<image src="../../static/img/dfd_b.png" class="cz ab"></image>

				</view>
			</view>

			<view class="pt20 pm30 fz30 dx_row cf  pl10 pr10">
				<view class="dx_col_12">注册</view>
				<view class="dx_col_12 tr">登录</view>

			</view>
 -->
			<view class="ls sdf_jh_dert yj4 bgff fz30" @click="weixin">
				<image src="../../static/img/weixin.png" class="cz"></image>
				微信一键登录

			</view>



		</view>

		<image src="../../static/img/qiu.png" class="qiu_deet"></image>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			weixin() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(JSON.stringify(loginRes));
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								uni.setStorageSync('user_info', infoRes);
								uni.navigateTo({
									url: '/pages/index/index'
								})
								
							}
						});
					}
				});
			}
		},
		mounted() {},
	}
</script>
<style>
	.df_jh_der {
		color: #8F93B6;
	}
</style>
<style scoped>
	.df_ddrtxdr{
		margin-top: 200upx;
	}
	.form_deng {
		width: 580upx;
		margin: auto;
		margin-top: 50upx;
	}
	

	.sd_jh_deert {
		border: 1px solid #fff;
		height: 90upx;
		overflow: hidden;
		position: relative;
		border-radius: 8upx;
	}

	.sd_jh_deert input {
		color: #fff;
		font-size: 30upx;
		position: relative;
		top: 25upx;
		left: 20upx;
	}

	.d_ijh_righte {
		background: #1F307F;
		position: absolute;
		right: 0px;
		top: 15upx;
		width: 105upx;
		text-align: center;
		line-height: 60upx;
		border-left: 1px solid #8F97BF;
	}

	.d_ijh_righte image {
		width: 45upx;
		height: 32upx;

	}

	.d_ijh_righte image.ab {
		width: 38upx;
		height: 44upx;
	}

	.sdf_jh_dert {
		line-height: 90upx;
		text-align: center;
	}

	.sdf_jh_dert image {
		width: 65upx;
		height: 55upx;
	}

	.qiu_deet {
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
		height: 279upx;
	}
</style>
