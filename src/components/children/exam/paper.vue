<template>
	<div class='paper'>
		<tk-question 
			:key='k[i].QuestionStr'
			:type='k[i].Mode' 
			:ifShowStar='false' 
			:index='i+1'
			:question='k[i].QuestionStr'
			:disable='false' 
			:answer='a[i]'
			:option='[k[i].ChoosenA, k[i].ChoosenB, k[i].ChoosenC, k[i].ChoosenD]'
			@change="getAnswer"
		>
		</tk-question>
		<div>{{answer}}</div>
		<br>
		<div class='footer'>
			<div class='last' v-show='i!==0' @click="changeQ(-1)">上一题</div>
			<div class='last' v-show='i===0'>第一题</div>
			<div class='sheet' @click='$router.push("/马克思/exam/answerSheet")'>答题卡</div>
			<div class='next' v-show='i!==99' @click='changeQ(1)'>下一题</div>
			<div class='next' v-show='i===99' @click='$router.push("ensure")'>交卷</div>
		</div>
	</div>
</template>

<script>
	import book from './store.js'
	import Question from '../../plug/tiku-question.vue'
	export default {
		components:{
			'tk-question': Question
		},
		data() {
			return {
				i: book.on,
				k:book.text,
				a:book.answer,
				option:[]
			}
		},
		methods:{
			getAnswer(res){
				book.answer[this.i] = res
			},
			changeQ(num){
				this.i += num;
				book.on += num;
				// console.log(this.k[this.i])
			}
		},
		mounted(){
		}
	}
</script>

<style lang='scss'>
	@import "../../../style/mixin";
	@import "../../../style/style";
	.paper{
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.footer{
			position: absolute;
			left: .6rem;
			right: .6rem;
			height: 4rem;
			bottom: .6rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			div{
				line-height: 4rem;
				text-align: center;
				display: inline-block;
			}
			.last{
				@include card(27vw, 4rem, $tk-radius);
				border-radius: 1rem .5rem .5rem 1rem;
			}
			.next{
				@include card(27vw, 4rem, $tk-radius);
				border-radius: .5rem 1rem 1rem .5rem;

			}
			.sheet{
				@include card(35vw, 4rem, $tk-radius);
				border-radius: .5rem .5rem .5rem .5rem;
			}
		}
	}
</style>
