import router from "./index.js";
import state from '../store/state'

router.beforeEach((to, from, next)=>{
	console.log("guard open");
	console.log("from: ");
	console.log(from);
	console.log("to:");
	console.log(to);
	if(from.name==='grade'&&to.name==='ensure'){
		router.go(-3);
	}
	else if(from.name==='paper'&&to.name==='start'){
		next({path:'exit'})
	}
	else{
		next();
	}
})