<script>
	export default {
		onLaunch: function() {

			this.post("fangwei/version", {}, function(data) {
				uni.setStorageSync('login', data.login);
				let banben = 1.1; //版本号
				if (banben < parseFloat(data.version)) {
					uni.showModal({
						title: '提示',
						content: data.msg,
						confirmText: "立即更新",
						success: function(res) {
							if (res.confirm) {
								uni.getSystemInfo({
									success: function(res) {
										if (res.platform == "ios") {
											plus.runtime.openURL(data.ios);

										} else {
											plus.runtime.openURL(data.android);
										}
									},
								})
							}
						}
					});
				}



			})
		},
		onShow: function() {

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import"static/css/base.css";
	@import"static/css/style.css";
	@import 'static/css/iconfont.css';
</style>
