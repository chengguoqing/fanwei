<template>
	<view class="sd_jh_deer" v-if="is_sdf">
		<view class="fz30 cf cen df_ddrtxdr " :class="login==1?'act':''">
			<image src="../../static/img/logo.png" class="logo_ert"></image>
			<br>
			苍鸟防伪
		</view>

		<view class="form_deng pr" v-if="login==1">

			<view class="sd_jh_deert">
				<input type="text" placeholder="请输入用户名" placeholder-class="df_jh_der" v-model="user_name" />
				<view class="d_ijh_righte">
					<image src="../../static/img/dfd_a.png" class="cz"></image>

				</view>
			</view>


			<view class="sd_jh_deert mt30">
				<input password="true" type="text" placeholder="请输入密码" placeholder-class="df_jh_der" v-model="user_paw" />
				<view class="d_ijh_righte">
					<image src="../../static/img/dfd_b.png" class="cz ab"></image>

				</view>
			</view>

		<view class="pt20 pm30 fz30 dx_row cf  pl10 pr10">
				<!-- <view class="dx_col_12">注册</view> -->
				<!-- <view class="dx_col_12 tr">登录</view> -->

			</view> 

			<view class="ls sdf_jh_dert yj4 bgff fz30 mt60" @tap="denglu">

				登录

			</view>
			<navigator class="ls sdf_jh_dert yj4 bgff fz30 mt40 ab" url="/pages/user/zhuce">
			
				注册
			
			</navigator>
			
		</view>

		<view class="form_deng pr" v-else>
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
			return {
				user_name: "",
				user_paw: "",
				login: "",
				is_sdf: false
			}
		},
		onLoad: function() {
			this.login = uni.getStorageSync('login');
			this.is_sdf = true
		},
		components: {},
		methods: {
			denglu() {
				if (!this.user_name) {
					uni.showToast({
						icon: "none",
						title: "请输入用户名"
					})
					return
				}
				if (!this.user_paw) {
					uni.showToast({
						icon: "none",
						title: "请输入密码"
					})
					return
				}
				if (this.user_name != "test" && this.user_paw != "test") {
					uni.showToast({
						icon: "none",
						title: "用户名或密码错误"
					})
					return
				}
			uni.setStorageSync('user_info', 'true');

				uni.showToast({
					title: "登录成功!",
					duration: 3000
				})
				uni.hideKeyboard()
				setTimeout(function() {

					uni.navigateTo({
						url: '/pages/index/index'
					})
				}, 2000)

			},
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
					},
					fail: function(dat) {
						uni.showToast({
							icon: "none",
							title: JSON.stringify(dat)
						})
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

	[v-cloak] {
		display: none;
	}
</style>
<style scoped>
	.df_ddrtxdr {
		margin-top: 200upx;
	}

	.df_ddrtxdr.act {
		margin-top: 0upx;

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
		height: 40upx;
		line-height: 40upx;
		position: relative;
		top: 24upx;
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
	.sdf_jh_dert.ab{
		background: transparent !important;
		color: #fff;
		border: 1px solid #fff;
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
		z-index: 1;
	}
</style>
