<template>
	<div class='search'>
		<div class='input'>
			<input type="search" @keyup.13="trySearch()" placeholder="请输入关键词" v-model="tempKey" ref="input1">
			<div class='icon'>☆</div>
		</div>
		<div v-for='(item, index) in tableData' class='question'>
			<tk-question 
				:key='item.ID+key+index'
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
				:bold='key'
			>
			</tk-question>
		</div>
	</div>
</template>

<script>
	import {getText} from '../../../axios/api.js'
	import Question from '../../plug/tiku-question.vue'
	export default {
		data() {
			return {
				key:'',
				tempKey:'',
				tableData:[]
			};
		},
		components:{
			'tk-question': Question
		},
		methods:{
			trySearch(){
				this.$refs.input1.blur();
				this.key = this.tempKey;
				this.tableData = [];
				this.tableData.push({
					ID: 101,
					Mode: 'sig',
					QuestionStr: this.key + '啦啦啦啦啦啦',
					Answer: 'C',
					ChoosenA: 'A',
					ChoosenB: 'A',
					ChoosenC: 'A',
					ChoosenD: 'A',
				})
				this.tableData.push({
					ID: 104,
					Mode: 'jud',
					QuestionStr: this.key + '啦啦啦',
					Answer: '是'
				})
				this.tableData.push({
					ID: 144,
					Mode: 'jud',
					QuestionStr: this.key + '啦啦啦',
					Answer: '是'
				})
				this.tableData.push({
					ID: 102,
					Mode: 'mul',
					QuestionStr: this.key + '哇咔咔',
					Answer: 'ABC',
					ChoosenA: 'A',
					ChoosenB: 'A',
					ChoosenC: 'A',
					ChoosenD: 'A',
				})
				this.tableData.push({
					ID: 103,
					Mode: 'mul',
					QuestionStr: this.key + '哇咔咔',
					Answer: 'ABC',
					ChoosenA: 'A',
					ChoosenB: 'A',
					ChoosenC: 'A',
					ChoosenD: 'A',
				})
				this.tableData.push({
					ID: 104,
					Mode: 'jud',
					QuestionStr: this.key + '啦啦啦',
					Answer: '是'
				})
				this.tableData.push({
					ID: 144,
					Mode: 'jud',
					QuestionStr: this.key + '啦啦啦',
					Answer: '是'
				})
			}
		}
	}
</script>

<style lang='scss'>
	@import "../../../style/mixin";
	@import "../../../style/style";
	.search{
		padding: 0 0 2rem 0;
		.input{
			position: relative;
			input{
				width: 95vw;
				margin-left: 2.5vw;
				outline: none;
				font-size: 1.05rem;
				color: $tk-bc;
				padding: 0.7rem 1rem 0.7rem 2.8rem;
				box-sizing: border-box;
				border-radius: 1.4rem;
				border: none;
				box-shadow: rgba(0, 0, 0, .2) 0 -3px 10px;
				&::-webkit-input-placeholder {
					color: $tk-bc;
				}
			}
			.icon{
				position: absolute;
				top: 0;
				height: 1rem;
				width: 1rem;
				left: 6.2vw;
				font-size: 1.8rem;
			}
		}
		.question{
			margin-left: 2.5vw;
			margin-top: .5rem;
		}
	}
</style>
