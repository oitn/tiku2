<template>
	<div class='bar'>
		<div class='right' :style="style"></div>
		<div class='slot'>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:['rate'],
		computed:{},
		data() {
			return {
				style:"width:" + (100-this.rate) + "%"
			};
		},
		methods:{
		},
		mounted(){
			this.style="width:" + (100-this.rate) + "%"
		},
		updated(){
			this.style="width:" + (100-this.rate) + "%"
		}
	}
</script>

<style lang='scss'>
	@import "../../style/style.scss";
	.bar{
		overflow: hidden;
		position: relative;
		@include card(100%, 100%, $tk-radius);
		&>.right{
			position: absolute;
			background-color: rgb(227, 227, 227);
			top: 0;
			bottom: 0;
			right: 0;
			border-radius: 0 $tk-radius $tk-radius 0;
		}
		&>.slot{
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
		}
	}
</style>
