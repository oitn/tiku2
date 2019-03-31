<template>
	<div class='exam'>
		<progress-bar :rate='rate_all' class='grade'>
			<div class='info'>
				<div>总成绩</div>
				<div><span>{{rate_all}}</span>分</div>
			</div>
		</progress-bar>
		<!-- 单选 -->
		<progress-bar :rate='rate_radio' class='radio'>
			<div class='info'  @click='changeShow(0)'>
				<div class='left'>单选正确率</div>
				<div class='right'>{{rate_radio}}%</div>
			</div>
		</progress-bar>
		<div v-show='showErr[0]'>
			<div class='question' v-for='i in err_radio'>
				<tk-question 
					:identify="k[i].ID"
					:type='k[i].Mode' 
					:ifShowStar='true' 
					:ifStar='false'
					:index='i+1'
					:question='k[i].QuestionStr'
					:disable='true' 
					:answer='k[i].Answer'
					:option='[k[i].ChoosenA, k[i].ChoosenB, k[i].ChoosenC, k[i].ChoosenD]'
				>
				</tk-question>
			</div>
		</div>
		<!-- 多选 -->
		<progress-bar :rate='rate_checkbox' class='checkbox'>
			<div class='info'   @click='changeShow(1)'>
				<div class='left'>多选正确率</div>
				<div class='right'>{{rate_checkbox}}%</div>
			</div>
		</progress-bar>
		<div v-show='showErr[1]'>
			<div class='question' v-for='i in err_checkbox'>
				<tk-question 
					:identify="k[i].ID"
					:type='k[i].Mode' 
					:ifShowStar='true' 
					:ifStar='false'
					:index='i+1'
					:question='k[i].QuestionStr'
					:disable='true' 
					:answer='k[i].Answer'
					:option='[k[i].ChoosenA, k[i].ChoosenB, k[i].ChoosenC, k[i].ChoosenD]'
				>
				</tk-question>
			</div>
		</div>
		<!-- 判断 -->
		<progress-bar :rate='rate_judge' class='judge'>
			<div class='info'   @click='changeShow(2)'>
				<div class='left'>判断正确率</div>
				<div class='right'>{{rate_judge}}%</div>
			</div>
		</progress-bar>
		<div v-show='showErr[2]'>
			<div class='question' v-for='i in err_judge'>
				<tk-question 
					:identify="k[i].ID"
					:type='k[i].Mode' 
					:ifShowStar='true' 
					:ifStar='false'
					:index='i+1'
					:question='k[i].QuestionStr'
					:disable='true' 
					:answer='k[i].Answer'
					:option='[k[i].ChoosenA, k[i].ChoosenB, k[i].ChoosenC, k[i].ChoosenD]'
				>
				</tk-question>
			</div>
		</div>
	</div>
</template>

<script>
	import book from './store.js'
	import Bar from '../../plug/progress-bar.vue'
	import Question from '../../plug/tiku-question.vue'
	export default {
		components:{
		  'progress-bar': Bar,
		  'tk-question': Question
		},
		data() {
			return {
				k: book.text,
				rate_all: 0,
				rate_radio: 0,
				rate_checkbox: 0,
				rate_judge: 0,
				num_all: 100,
				num_radio: 0,
				num_checkbox: 0,
				num_judge: 0,
				err_radio:[],
				err_checkbox:[],
				err_judge:[],
				showErr:[false, false, false]
			};
		},
		methods:{
			changeShow(i){
				this.$set(this.showErr, i, !this.showErr[i])
			}
		},
		mounted(){
			for(let i = 0; i < 100; i ++){
				if(book.answer[i]===book.text[i].Answer){
					this.rate_all++;
				}
				if(book.text[i].Mode==='sig'){
					this.num_radio++;
					if(book.answer[i]===book.text[i].Answer){
						this.rate_radio++;
					}else{
						this.err_radio.push(i)
					}
				}else if(book.text[i].Mode==='mul'){
					this.num_checkbox++;
					if(book.answer[i]===book.text[i].Answer){
						this.rate_checkbox++;
					}else{
						this.err_checkbox.push(i)
					}
				}else if(book.text[i].Mode==='jud'){
					this.num_judge++;
					if(book.answer[i]===book.text[i].Answer){
						this.rate_judge++;
					}else{
						this.err_judge.push(i)
					}
				}
			}
			this.rate_judge = Math.floor(100*(this.rate_judge/this.num_judge))||0;
			this.rate_radio = Math.floor(100*(this.rate_radio/this.num_radio))||0;
			this.rate_checkbox = Math.floor(100*(this.rate_checkbox/this.num_checkbox))||0;
		}
	}
</script>

<style lang='scss'>
	.exam{
		padding-bottom: 1rem;
		.grade{
			width: 95vw;
			height: 10rem;
			margin-left: 2.5vw;
			.info{
				padding: 1.2rem 1.5rem;
				div:last-child{
					span{
						font-size: 3.2em;
					}
					text-align: center;
				}
			}
		}
		.radio, .checkbox, .judge{
			width: 95vw;
			height: 4rem;
			margin-left: 2.5vw;
			margin-top: .6rem;
			.info{
				line-height: 4rem;
				padding: 0 1.5rem;
				box-sizing: border-box;
				.left{
					display: inline-block
				}
				.right{
					display: inline-block;
					float: right;
				}
			}
		}
		.question{
			margin-left: 2.5vw;
			margin-top: .6rem;
		}
	}
</style>
