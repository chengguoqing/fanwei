<template>
	<view class="pd pt20 pm20 sdf_df_Ddff " :class="is_sdf?'act':''">
		<view class="fmeg_def yj4">
			<image src="../../static/img/sjhg_femian.jpg"></image>
		</view>


		<view class="pd pt20 pm20 cf_jhhddfg yj4 pr">
			<image src="../../static/img/jiaobiao_b.png" class="jiabao_der" v-if="is_sdf"></image>
			<image src="../../static/img/jiaobiao.png" class="jiabao_der" v-else></image>
			<image src="../../static/img/logo.png" class="logo_eertx"></image>

			<view class="pd yj4 bgff cen pt20 pm20 	mt50 ">
				<image src="../../static/img/close.png" class="success" v-if="is_sdf"></image>
				<image src="../../static/img/success.png" class="success" v-else></image>
				
				<view class="z3 fz32"  v-if="is_sdf">
					二维码已失效 <text class="zhuse">谨防假冒</text>
				</view>
				<view class="z3 fz32" v-else="">
					正规商品
				</view>
				<view class="fz26 zhuse">
					验证结果：【4047013456684270036】
				</view>

			</view>
			<view class="pd cen fz24 ln cf mt20">
				您所查询的是广州物美食品有限公司所生产的
				“健齿乐健康蔬果礼包” ，经苍鸟唯一验证，为正规产品，
				请放心使用
			</view>

		</view>
		
		<view class="pd er_jh_der mt40">
			<text>查询记录</text>
			
			
		
			
			
		</view>
		
	
		<view class="fz20 z3 tl derf_jh_e_cert pl10">首次正品验证
		</view>
		
		<view class="uyt_lit_list yj4 pd pt20 pm20 mt20 pr">
			<image class="sd_jh_ceert yj cz fl"></image>
			<view class="ov pl20 fz24 cf pt30">
				<text class="ye">大鼻子海盗LOL</text> 于2018-10-26 10:27:26 
查询了本商品
			</view>
			<image src="../../static/img/zheng_a.png" class="zheng_a_eerr"></image>
			<view class="qc"></view>
			
		</view>
		
		
		
			<view class="fz20 z3 tl derf_jh_e_cert pl10 ab mt40">失效验证
				</view>
				
				<view class="uyt_lit_list yj4 pd pt20 pm20 mt20 pr ab" v-for="sd in 5">
					<image class="sd_jh_ceert yj cz fl"></image>
					<view class="ov pl20 fz24 cf pt30">
						<text class="ye">大鼻子海盗LOL</text> 于2018-10-26 10:27:26 
		查询了本商品
					</view>
					<image src="../../static/img/zheng_b.png" class="zheng_a_eerr"></image>
					<view class="qc"></view>
					
				</view>
				
				
				
		
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				is_sdf:true//true伪  false 真
			}
		},
		components: {},
		methods: {},
		mounted() {},
		onNavigationBarButtonTap() {
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
				}
			});
		}
	}
</script>
<style scoped>
	.sdf_df_Ddff.act .fmeg_def{
		border: 6upx solid #9B000B;
	}
	
	.sdf_df_Ddff.act .cf_jhhddfg{
		background:  #9B000B;
	}
	.sdf_df_Ddff.act .zhuse{
		color: #9B000B !important;
	}
	
	.fmeg_def {
		height: 420upx;
		border: 6upx solid #10A994;
	}

	.fmeg_def image {
		width: 100%;
		height: 100%;
	}

	.cf_jhhddfg {
		min-height: 200upx;
		background: #10A994;
		margin-top: 100upx;
	}

	.jiabao_der {
		width: 229upx;
		height: 72upx;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: -70upx;
	}

	.logo_eertx {
		width: 57upx;
		height: 108upx;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: -60upx;
	}
	.ye{
		color: #ffd789 !important;
	}

	.success {
		width: 53upx;
		height: 53upx;

	}

	.zhuse {
		color: #11a994;
	}
	.er_jh_der{
		border-top: 1px solid #7484BB;
		text-align: center;
	}
	.er_jh_der text{
		background: #fff;
		padding: 10upx;
		position: relative;
		top: -20upx;
	}
	.derf_jh_e_cert{
		line-height: 1;
		border-left: 4upx solid #10A994;
	}
	.derf_jh_e_cert.ab{
		border-left: 4upx solid #9B000B;

	}
	.uyt_lit_list{
		background: #10A994;
		padding-right: 160upx;
	}
	.uyt_lit_list.ab{
		background: #9B000B;

	}
	.sd_jh_ceert{
		width: 120upx;
		height: 120upx;
		background: #fff;
	}
	.zheng_a_eerr{
		width: 130upx;
		height: 100upx;
		position: absolute;
		right: 20upx;
		top: 30upx;
	}
</style>
