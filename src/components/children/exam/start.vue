<template>
	<div class='start'>
		<transition name='fade-out'>
			<img v-show='show' :src="require('../../../assets/'+$route.params.subject+'.png')" alt="没有图片吼" class='pic' @click='startExam()'>
		</transition>
		<!-- <div class='pic' style="background-image: url(../../../assets/马克思.png)"></div> -->
	</div>
</template>

<script>
	String.prototype.endWith=function(endStr){
	  var d=this.length-endStr.length;
	  return (d>=0&&this.lastIndexOf(endStr)==d)
	}
	import {getText} from '../../../axios/api.js'
	import book from './store.js'
	export default {
		data() {
			return {
				url: "url(../../../assets/"+this.$route.params.subject+".png)",
				show: true
			};
		},
		methods:{
			startExam(){
				this.show=false
				setTimeout(()=>{
					this.$router.push("paper")
				}, 200)
			}
		},
		mounted(){
			//拉取试题
			getText(1, 0).then(
				(res)=>{
					book.on = 0;
					for(let i = 0; i < 100; i ++){
						book.text[i] = res.data[i+10];
						book.answer[i] = 0;
					}
				}
			)
		}
	}
</script>

<style lang='scss'>
	
	@import "../../../style/mixin";
	@import "../../../style/style";
	.start{
		position: absolute;
		.text{
			position: absolute;
			top: 2rem;
			left: 2rem;
		}
		.pic{
			width: 95vw;
			margin: 2.5vw;
			background-size: 100%;
			border-radius: $tk-radius;
			position: absolute;
			top: 0;
			min-height: 95vw;
		}
	}
	
</style>
