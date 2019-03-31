<template>
	<div class='answerSheet'>
		<div class='type'>单选题<hr></div>
		<div class='radio'>
			<div
				:class="{'circle':true, 'blank':(a[index]===0)||(a[index]==='')}"
				v-for='(item, index) in k'
				@click='gotoPaper(index)'
				v-show='item.Mode==="sig"'
			>
				{{index+1}}
			</div>
		</div>
		<div class='type'>多选题<hr></div>
		<div class='checkbox'>
			<div
				:class="{'circle':true, 'blank':(a[index]===0)||(a[index]==='')}"
				v-for='(item, index) in k'
				@click='gotoPaper(index)'
				v-show='item.Mode==="mul"'
			>
				{{index+1}}
			</div>
		</div>
		<div class='type'>判断题<hr></div>
		<div class='judge'>
			<div
				:class="{'circle':true, 'blank':(a[index]===0)||(a[index]==='')}"
				v-for='(item, index) in k'
				@click='gotoPaper(index)'
				v-show='item.Mode==="jud"'
			>
				{{index+1}}
			</div>
		</div>
		<div class='submit' @click='submitPaper()'>交卷</div>
	</div>
</template>

<script>
	import book from './store.js'
	export default {
		data() {
			return {
				a: book.answer,
				k: book.text
			};
		},
		methods:{
			gotoPaper(num){
				book.on = num;
				this.$router.go(-1)
			},
			submitPaper(){
				this.$router.push("ensure")
			}
		},
		mounted(){
			this.a = book.answer;
			console.log(this.a)
		}
	}
</script>

<style lang='scss'>
	@import "../../../style/mixin";
	@import "../../../style/style";
	.answerSheet{
		padding: 2.5vw;
		box-sizing: border-box;
		.type{
			font-size: .9em;
			color: #fff;
			margin-left: .6rem;
			margin-top: .4rem;
			display: inline-block;
			line-height: 1.8em;
		}
		.circle{
			height: 11vw;
			width: 11vw;
			display: inline-block;
			border-radius: 100%;
			background-color: #FFFFFF;
			color:#A4845D;
			border: #A07A4C 2px solid;
			line-height: 2.5rem;
			text-align: center;
			margin: .6vw;
			font-size: .8em;
		}
		.blank{
			background-color: #E3E3E3;
		}
		.submit{
			@include card(100%, 4.3rem, 1rem);
			margin-top: .6rem;
			text-align: center;
			line-height: 4.3rem;
		}
	}
</style>
