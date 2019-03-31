<template>
	<div class='wrong'>
		<div v-for='(unit, num1) in data'>
			<transition name='fade-in'>
				<div class='title' @click='showQ(num1)'>
					<div>第{{num1}}章</div>
					<div>{{chapterShow[num1]}}</div>
				</div>
			</transition>
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
					v-show='item.ID%9===0 && chapterShow[num1]'>
					<tk-question 
						:key='item.ID+item.QuestionStr'
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
	import {startLoading, stopLoading} from '../../plug/loading.js'
	export default {
		el: '#wrong',
		components:{
			'tk-question': Question
		},
		data() {
			return {

				chapterShow:[],

				data:[],
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
			startLoading();
			getText(0, 0).then(
				(res)=>{
					// console.log(res.data);
					this.data.push(res.data);
					this.chapterShow[this.data.length-1]=false
					getText(0, 1).then(
						(res)=>{
							// console.log(res.data);
							this.data.push(res.data);
							this.chapterShow[this.data.length-1]=false
							stopLoading();
						}
					)
				}
				
			);
			
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
