<template>
	<div class='question'>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang = 'scss'>
	@import "style/mixin";
	@import "style/style.scss";
	.question{
		font-size: 1.2rem;
		.content{
			width: 100vw;
			min-height: 100vh;
			position: relative;
		}
	}
	*::-webkit-scrollbar
	{
	  display: none;
	}
	
	.fade-out-leave-active {
	  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.fade-out-leave-to{
	  opacity: 0;
	}
	
</style>
