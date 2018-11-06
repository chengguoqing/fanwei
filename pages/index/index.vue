<template>
	<view class="sd_jh_deer">
		<view class="fz30 cf cen">
			<image src="../../static/img/logo.png" class="logo_ert"></image>

			<view class="mt20">
				<image src="../../static/img/sjh_d.png" class="sd_deerty"></image>
			</view>
		</view>

		<view class="s_qc_derdf">
			<view class="saoma_sd cen" @click="saoma">
				<image src="../../static/img/qc_icon.png"></image>
				<view class="fz32 ls">开启扫描</view>
			</view>

			<view class="ls cen fz32 sdf_jh_de4ert">
				苍鸟如何做到防伪唯一性
			</view>


		</view>

		<view class="dibu_deer pt10 pm10 dx_row cen">
			<view class="dx_col_12 ">
				<image src="../../static/img/bottom/dsfdsfa_b.png" class="shouye_eet"></image>
				<view class="fz26 ls">
					首页
				</view>
			</view>
			<view class="dx_col_12 " @click="saoma">
				<image src="../../static/img/bottom/dsfdsfb_a.png" class="shouye_eet"></image>
				<view class="fz26 z9">
					查真伪
				</view>
			</view>

		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			saoma() {
				uni.scanCode({
					success: function(res) {
						uni.navigateTo({
							url:"/pages/check_results/index"
						})
					}
				});
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.sd_jh_deer {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #1F307F;
	}

	.sd_deerty {
		width: 438upx;
		height: 62upx;
	}

	.s_qc_derdf {
		width: 680upx;
		margin: auto;
	}

	.saoma_sd {
		height: 200upx;
		background: #fff;
		border-radius: 20upx;
		margin-top: 120upx;
		padding-top: 50upx;
	}

	.saoma_sd image {
		width: 60upx;
		height: 60upx;
	}

	.sdf_jh_de4ert {
		background: #fff;
		margin-top: 70upx;
		border-radius: 20upx;
		line-height: 120upx;
	}
</style>
