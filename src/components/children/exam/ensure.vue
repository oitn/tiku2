<template>
	<div class='ensure'>
		<div class='message'>
			<div>?</div>
			<div>是否提交试卷</div>
		</div>
		<div class='button'>
			<div class='yes' @click='$router.push("grade")'>是</div><div class='no' @click='$router.go(-1)'>否</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 今天晚上是持续不开心的一晚上╭(╯^╰)╮
				
			};
		}
	}
</script>

<style lang='scss'>
	@import "../../../style/mixin";
	@import "../../../style/style";
	.ensure{
		.message{
			margin-top: .2rem;
			@include card(95vw, 13rem, $tk-radius);
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			margin-left: 2.5vw;
			div:first-child{
				font-size: 3em;
				margin-bottom: .6rem;
			}
		}
		.button{
			.yes, .no{
				@include card(46.1vw, 3.3rem, $tk-radius);
				margin-left: 2.5vw;
				margin-top: .6rem;
				display: inline-block;
				line-height: 3.3rem;
				text-align: center;
			}
			.yes{
				border-radius: $tk-radius .5rem .5rem $tk-radius;
			}
			.no{
				border-radius: .5rem $tk-radius $tk-radius .5rem;
				opacity: .95;
			}
		}
	}
</style>
