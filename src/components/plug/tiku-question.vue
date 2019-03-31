<template>
	<div class='tk-question'>
		<input type="radio" value='B' v-model="currentAnswer">
		<div class='q-title' :id="'question'+identify">{{index}}、{{question}}</div>
		<div class='q-option' v-for='(item, i) in tempOption'>
			<div class='q-checkbox' v-if='currentType==="checkbox"'>
				<input
					type='checkbox'
					:id="identify+'-'+i"
					:name='question'
					:value="check[i]"
					class='checkbox'
					:disabled="disable"
					v-model="currentAnswer[i]"
				>
				<label :for="identify+'-'+i"><div class='q-dot'></div></label>
			</div>
			<div class='q-checkbox' v-if='currentType!=="checkbox"'>
				<input
					type='radio'
					:id="identify+'-'+i" 
					:value="check[i]"
					class='checkbox'
					:disabled="disable"
					v-model="currentAnswer"
				>
				<label :for="identify+'-'+i"><div class='q-dot'></div></label>
			</div>
			&nbsp;&nbsp;<span v-show="type!=='jud'">{{check[i]}}、</span><span :id="'option'+identify+i">{{item}}</span>
		</div>
		<div class='q-star' v-show='ifShowStar'>
			<div class='onStar' v-show='ifStar' @click='offStar()'>★</div>
			<div class='offStar' v-show='!ifStar' @click='onStar()'>☆</div>
		</div>
		<transition name='star'>
			<div class='action' v-show='offStarAction'>
				<div class='star'>☆</div>
				<div class='text'>已移除错题本</div>
			</div>
		</transition>
		<transition name='star'>
			<div class='action' v-show='onStarAction'>
				<div class='star'>★</div>
				<div class='text'>已加入错题本</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		/*
			参数：
				indentify: ID
				type: 'sig', 'mul'， 'jud'，字符串形式，选择题目类型
				ifShowStar:右下角显不显示小星星
				ifStar:小星星是黑的还是白的，（可选）
				index: 题号
				question：题目
				option：答案，数组格式，（可选）
				disable: true,false，答案是否不可选
				answer: disable时提供正确答案，格式同旧版题库
			事件监听
				@offStar,@onStar: 小星星状态改变
				@change: 用户改变答案，返回的参数和answer一样
			使用参考wrong和exam/paper，不保证不会出bug
		*/
		
		props:['type', 'ifShowStar', 'ifStar', 'index', 'question', 'onChoose', 'disable', 'option', 'answer', 'identify', 'bold'],

		data() {
			return {
				tempOption:[],
				currentAnswer:[],
				currentType:'',
				check:["A", "B", "C", "D"],
				onStarAction: false,
				offStarAction: false
			};
		},
		watch:{
			currentAnswer:function(){
				let res;
				// console.log("return:"+this.currentAnswer)
				if(this.type==='sig'){
					res=this.currentAnswer
				}else if(this.type==='mul'){
					res="";
					for(let i = 0; i < this.option.length; i ++){
						if(this.currentAnswer[i]===true){
							res+=this.check[i];
						}
					}
				}else if(this.type = 'jud'){
					if(this.currentAnswer === 'A'){
						res = "是"
					}else{
						res = '否'
					}
				}
				// console.log(res);
				this.$emit('change', res);
			}
		},
		methods:{
			offStar(){
				this.offStarAction = true
				setTimeout(()=>{
					this.offStarAction = false
					this.$emit('offStar')
				}, 1000)
			},
			onStar(){
				this.onStarAction = true
				setTimeout(()=>{
					this.onStarAction = false
					this.$emit('onStar')
				}, 1000)
			},
			emitAnswer(){

			}
		},
		mounted(){
			if(this.type === 'sig'){
				this.currentType = 'radio'
			}else if(this.type === 'mul'){
				this.currentType = 'checkbox'
			}else if(this.type === 'jud'){
				this.currentType = 'judge'
			}
			this.tempOption = this.option
			if(this.currentType==='radio'){
				this.currentAnswer = this.answer
			}else if(this.currentType === 'checkbox'){
				for(let i = 0; i < this.option.length; i ++){
					this.currentAnswer.push(false)
				}
				// console.log(this.answer)
				if(this.answer){
					if(this.answer.indexOf('A') !== -1){
						this.currentAnswer[0] = true;
					}if(this.answer.indexOf('B') !== -1){
						this.currentAnswer[1] = true;
					}if(this.answer.indexOf('C') !== -1){
						this.currentAnswer[2] = true;
					}if(this.answer.indexOf('D') !== -1){
						this.currentAnswer[3] = true;
					}
					// console.log(this.currentAnswer)
				}
			}else{
				this.tempOption = ['是', '否']
				// console.log(this.answer)
				if(this.answer === '是'){
					this.currentAnswer = "A";
				}else if(this.answer === '否'){
					this.currentAnswer = "B";
				}
			}
		
			// 加粗
			if(this.bold){
				let question = document.getElementById('question'+this.identify);
				question.innerHTML = question.innerHTML.replace(this.bold, "<strong>" + this.bold + "</strong>" );
				setTimeout(()=>{
					let option0 = document.getElementById("option"+this.identify+0);
					let option1 = document.getElementById("option"+this.identify+1);
					let option2 = document.getElementById("option"+this.identify+2);
					let option3 = document.getElementById("option"+this.identify+3);
					if(option0) option0.innerHTML = option0.innerHTML.replace(this.bold, "<strong>" + this.bold + "</strong>" );
					if(option1) option1.innerHTML = option1.innerHTML.replace(this.bold, "<strong>" + this.bold + "</strong>" );
					if(option2) option2.innerHTML = option2.innerHTML.replace(this.bold, "<strong>" + this.bold + "</strong>" );
					if(option3) option3.innerHTML = option3.innerHTML.replace(this.bold, "<strong>" + this.bold + "</strong>" );
				}, 200)
			}
			
			let question = document.getElementById('question'+this.identify);
			question.innerHTML = question.innerHTML.replace("&amp;nbsp;", " " );
			question.innerHTML = question.innerHTML.replace("&amp;nbsp;", " " );
		
		}
	}
</script>

<style lang='scss'>
	@import "../../style/style.scss";
	@import "../../style/mixin.scss";
	.tk-question{
		position: relative;
		@include card(95vw, auto, $tk-radius);
		padding: 1rem;
		box-sizing: border-box;
		line-height: 2.2rem;
		overflow: hidden;
		.q-title{
		}
		.q-option{
			/* height: 2.2rem; */
			margin-left: .5rem;
			@include flex-line;
			.q-checkbox{
				position: relative;
				@include wh(1.5rem, 1.5rem);
				display: inline-block;
				input{
					@include center;
				}
				label{
					@include center;
				}
			}
		}
		.q-star{
			position: absolute;
			@include wh(6.1rem, 6.1rem);
			bottom: -3rem;
			right: -3rem;
			background-color: rgba(0, 0, 0, .1);
			border-radius: 100%;
			&>div{
				position: absolute;
				top: 1.2rem;
				left: 1.2rem;
				line-height: 1em;
			}
		}
		.action{
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: #E3E3E3;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.star{
				font-size: 5.5em;
				line-height: 1em;
			}
		}
		
	}


	/* 单选 */
	input[type="radio"] {
		position: absolute;
		@include wh(1rem, 1rem);
		opacity: 0;
	}
	label {
	  position: absolute;
	  width: 1rem;
	  height: 1rem;
	  border-radius: 50%;
	  border: 1px solid $tk-bc;
	  .q-dot{
		  @include wh(.7rem, .7rem);
		  display: inline-block;
		  @include center;
		  border-radius: 100%;
	  }
	}
	input[type="radio"]:checked+label {
	  .q-dot{
		  background-color: $tk-bc;
	  }
	}
	input[type="checkbox"] {
		position: absolute;
		@include wh(1rem, 1rem);
		opacity: 0;
	}
	input[type="checkbox"]+label {
	  position: absolute;
	  width: 1rem;
	  height: 1rem;
	  border-radius: .1rem;
	  border: 1px solid $tk-bc;
	  .q-dot{
		  @include wh(.7rem, .7rem);
		  display: inline-block;
		  @include center;
		  border-radius: .1rem;
	  }
	}
	input[type="checkbox"]:checked+label {
	  .q-dot{
		  background-color: #A4845D;
	  }
	}
	
	
.star-enter-active {
  transition: all .2s ease;
}
.star-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.star-enter
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-80vw);
  opacity: 0;
}
.star-leave-to{
	/* transform: translateX(80vw); */
  opacity: 0;
}	
	
</style>