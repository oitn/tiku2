<template>
	<div class='wrong'>
		<div v-for='(unit, num1) in data'>
<<<<<<< HEAD
			<div class='title' @click='showQ(num1)'>
				<div>第{{num1}}章</div>
				<div>{{chapterShow[num1]}}</div>
=======
			<div class='title'>
				<div>第{{chapter.num}}章</div>
				<div>{{chapter.title}}</div>
			</div>
			<div class='question' v-for='(item, num2) in unit' :key='item.ID' v-show='item.ID%18===0'>
				<tk-question
					:identify="item.ID"
					:type='item.Mode'
					:ifShowStar='true'
					:ifStar='true'
					:index='item.ID'
					:question='item.QuestionStr'
					:disable='true'
					:answer='item.Answer'
					:option='[item.ChoosenA, item.ChoosenB, item.ChoosenC, item.ChoosenD]'
					@offStar="remove(num1, num2)"
				>
				</tk-question>
>>>>>>> 7c664f607e83fd354a4f38af30f8471c155d791d
			</div>
			<transition-group
				name="list-fade"
				v-bind:css="false"
				v-on:before-enter="beforeEnter"
				v-on:enter="enter"
				v-on:leave="leave"
			>
				<div
					class='question'
					v-for='(item, num2) in unit'
					:key='item.ID'
					:data-index="num2"
					v-show='item.ID%38===0 && chapterShow[num1]'>
					<tk-question 
						:key='item.ID'
						:identify="item.ID"
						:type='item.Mode' 
						:ifShowStar='true' 
						:ifStar='true'
						:index='item.ID'
						:question='item.QuestionStr'
						:disable='true' 
						:answer='item.Answer'
						:option='[item.ChoosenA, item.ChoosenB, item.ChoosenC, item.ChoosenD]'
						@offStar="remove(num1, num2)"
					>
					</tk-question>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
	import {getText} from '../../../axios/api.js'
	import Question from '../../plug/tiku-question.vue'
	export default {
		el: '#wrong',
		components:{
			'tk-question': Question
		},
		data() {
			return {

				chapterShow:[],
<<<<<<< HEAD
				data:[],
				
=======

				data:[],

				chapter:[
					{
						num: 1,
						title: '你的思想有问题',
						questions:[
							{
								type: 'radio',
								index: 1,
								question: '人生观的核心是()',
								option:[
									'人生价值',
									'人生目的',
									'人生态度',
									'人生信仰'
								],
								answer: [2]
							},
							{
								type: 'checkbox',
								index: 100,
								question: '下列哪些选项内容代表了拜金主义的人生观',
								option:[
									'人生的价值',
									'人生的目的',
									'人生的态度',
									'人生的信仰'
								],
								answer: [0, 1]
							},
						]
					},
					{
						num: 2,
						title: '你的思想依然有问题',
						questions:[
							{
								type: 'radio',
								index: 1,
								question: '人生观的核心是什么()',
								option:[
									'人生价值',
									'人生目的',
									'人生态度',
									'人生信仰'
								],
								answer:[3]
							},
							{
								type: 'checkbox',
								index: 100,
								question: '下列哪些选项内容代表了拜金主义的人生观()',
								option:[
									'人生价值',
									'人生目的',
									'人生态度',
									'人生信仰'
								],
								answer:[1, 2]
							},
							{
								type: 'judge',
								index: 150,
								question: '人的生命过程只是一个自然过程吗',
								answer:false
							},
						]
					}
				]
>>>>>>> 7c664f607e83fd354a4f38af30f8471c155d791d
			};
		},
		methods:{
			output(str){
				// console.log(str);
			},
			remove(num1, num2){
				// this.chapter[num1].questions.splice(num2, 1);
				// alert("错题已经移除")
			},
			showQ(i){
				console.log(this.chapterShow[i])
				this.$set(this.chapterShow, i, !this.chapterShow[i])
				// this.chapterShow[i] = !this.chapterShow[i]
			},
			beforeEnter(el){
				el.style.opacity = '0';
				// el.style.height = 0;
			},
			enter(el, done){
				let delay = el.dataset.index/38*15;
				setTimeout(()=>{
					el.style.opacity = '1';
					// el.style.height = 'auto';
				},delay+80)
			},
			leave(){
// 				let delay = el.dataset.index/38*15;
// 				setTimeout(()=>{
// 					el.style.opacity = '0'
// 					el.style.height = 0;
// 					el.style.margin = 0;
// 				}, delay+100)
			}
		},
		mounted(){
			getText(0, 0).then(
				(res)=>{
					// console.log(res.data);
					this.data.push(res.data);
					this.chapterShow[this.data.length-1]=false
				}
			);
			getText(0, 1).then(
				(res)=>{
					// console.log(res.data);
					this.data.push(res.data);
					this.chapterShow[this.data.length-1]=false
				}
			)
		}
	}
</script>

<style lang='scss'>
	@import "../../../style/mixin";
	@import "../../../style/style.scss";
	.wrong{
		padding: 2.5vw;
		box-sizing: border-box;
		.title{
			z-index: 6;
			@include card(95vw, 10rem, $tk-radius);
			margin: .5rem 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 2rem;
			box-sizing: border-box;
			line-height: 2.2em;
			div:first-child{

			}
			div:last-child{
				font-size: .8em;
			}
		}
		.question{
			position: relative;
			transition: .4s;
			margin: .3rem 0;
			display: inline-block;
			overflow: hidden;
		}
	}

</style>
