<template>
	<view class="pd pt20 pm20 sdf_df_Ddff " :class="is_sdf?'act':''">
		<view class="fmeg_def yj4 ov">
			<image :src="sd.goods_thumb" mode="widthFix"></image>
		</view>


		<view class="pd pt20 pm20 cf_jhhddfg yj4 pr">
			<image src="../../static/img/jiaobiao_b.png" class="jiabao_der" v-if="is_sdf"></image>
			<image src="../../static/img/jiaobiao.png" class="jiabao_der" v-else></image>
			<image src="../../static/img/logo.png" class="logo_eertx"></image>

			<view class="pd yj4 bgff cen pt20 pm20 	mt50 ">
				<image src="../../static/img/close.png" class="success" v-if="is_sdf"></image>
				<image src="../../static/img/success.png" class="success" v-else></image>

				<view class="ln">


					<view class="z3 fz32" v-if="sd.status==2">
						二维码已失效 <text class="zhuse">谨防假冒</text>
					</view>
					<view class="z3 fz32" v-if="sd.status==0">
						无效二维码 <text class="zhuse">谨防假冒</text>
					</view>
					<view class="z3 fz32" v-if="sd.status==1">
						正规商品
					</view>
					<view class="fz26 zhuse" v-if="sd.status!=0">
						验证结果：【{{sd.code}}】
					</view>
				</view>
			</view>
			<view class="pd cen fz24 ln cf mt20 " v-if="sd.status!=0">
				您所查询的是{{sd.company}}所生产的
				“{{sd.goods_name}}” ，经苍鸟唯一验证，为正规产品，
				请放心使用
			</view>
			<view class="pd cen fz24 ln cf mt20 " v-if="sd.status==0">
				您所查询的商品非苍鸟防伪商品，<br>
如商品包装上存在苍鸟防伪标志，则该商品为假冒商品！
			</view>

		</view>

		<view class="pd er_jh_der mt40" v-if="sd.status!=0">
			<text class="fz32">查询记录</text>





		</view>


<view v-if="sd.status==0">


			<view class="fz20 z3 tl derf_jh_e_cert pl10 ab mt40">查询记录
						</view>
			
						<view class="uyt_lit_list yj4 pd pt20 pm20 mt20 pr ab" v-for="(sd,idx) in sd.list" >
							<image class="sd_jh_ceert yj cz fl" :src="sd.avatarUrl"></image>
							<view class="ov pl20 fz24 cf pt30 ln">
								<text class="ye">{{sd.nickName}}</text> 于{{sd.addtime_format}}
								查询了本商品
							</view>
							<image src="../../static/img/zheng_b.png" class="zheng_a_eerr"></image>
							<view class="qc"></view>
			
						</view>
						
		</view>



		<view v-if="sd.status>=1">


			<view class="fz20 z3 tl derf_jh_e_cert pl10">首次正品验证
			</view>

			<view class="uyt_lit_list yj4 pd pt20 pm20 mt20 pr" v-for="(sd,idx) in sd.list" v-if="idx==0">
				<image class="sd_jh_ceert yj cz fl" :src="sd.avatarUrl"></image>
				<view class="ov pl20 fz24 cf pt30 ln">
					<text class="ye">{{sd.nickName}}</text> 于{{sd.addtime_format}}
					查询了本商品
				</view>
				<image src="../../static/img/zheng_a.png" class="zheng_a_eerr"></image>
				<view class="qc"></view>

			</view>
		</view>

		<view v-if="sd.status==2">


			<view class="fz20 z3 tl derf_jh_e_cert pl10 ab mt40">失效验证
			</view>

			<view class="uyt_lit_list yj4 pd pt20 pm20 mt20 pr ab" v-for="(sd,idx) in sd.list" v-if="idx>0">
				<image class="sd_jh_ceert yj cz fl" :src="sd.avatarUrl"></image>
				<view class="ov pl20 fz24 cf pt30 ln">
					<text class="ye">{{sd.nickName}}</text> 于{{sd.addtime_format}}
					查询了本商品
				</view>
				<image src="../../static/img/zheng_b.png" class="zheng_a_eerr"></image>
				<view class="qc"></view>

			</view>

		</view>




	</view>
</template>
<script>
	export default {
		data() {
			return {
				sd: "",
				is_sdf: true //true伪  false 真
			}
		},
		components: {},
		methods: {},
		onLoad: function(e) {
			let check = {},
				th = this
			check.code = e.code
			this.post('fangwei/check', check, function(data) {
				th.sd = data
				if (data.status == 1) {
					th.is_sdf = false
				}

				console.log(JSON.stringify(data))
			})
		},
		mounted() {},
		onNavigationBarButtonTap() {
			uni.scanCode({
				success: function(res) {
					try{
						uni.redirectTo({
							url:"/pages/check_results/index?"+res.result.split("?")[1].split("&")[0]
						})
					}catch(e){
						uni.redirectTo({
							url:"/pages/check_results/index?code="
						})
					}
				
				}
			});
		}
	}
</script>
<style scoped>
	.sdf_df_Ddff.act .fmeg_def {
		border: 6upx solid #9B000B;
	}

	.sdf_df_Ddff.act .cf_jhhddfg {
		background: #9B000B;
	}

	.sdf_df_Ddff.act .zhuse {
		color: #9B000B !important;
	}

	.fmeg_def {
		height: 400upx;
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

	.ye {
		color: #ffd789 !important;
	}

	.success {
		width: 53upx;
		height: 53upx;

	}

	.zhuse {
		color: #11a994;
	}

	.er_jh_der {
		border-top: 1px solid #7484BB;
		text-align: center;
	}

	.er_jh_der text {
		background: #fff;
		padding: 10upx;
		position: relative;
		top: -20upx;
	}

	.derf_jh_e_cert {
		line-height: 1;
		border-left: 4upx solid #10A994;
	}

	.derf_jh_e_cert.ab {
		border-left: 4upx solid #9B000B;

	}

	.uyt_lit_list {
		background: #10A994;
		padding-right: 160upx;
	}

	.uyt_lit_list.ab {
		background: #9B000B;

	}

	.sd_jh_ceert {
		width: 120upx;
		height: 120upx;
		background: #fff;
	}

	.zheng_a_eerr {
		width: 130upx;
		height: 100upx;
		position: absolute;
		right: 20upx;
		top: 30upx;
	}
</style>
