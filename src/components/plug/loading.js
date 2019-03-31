export function startLoading(){
	var loading=document.createElement("div");
	var body=document.getElementsByTagName("body")[0];
	loading.style.cssText="display: inline-block;height: 20vw;width: 20vw;@include center;background-color: rgba(0, 0, 0, .4);border-radius: 20%;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
	loading.id='loading'
	body.appendChild(loading);
}
export function stopLoading(){
	var body=document.getElementsByTagName("body")[0];
	var loading = document.getElementById("loading");
	body.removeChild(loading);
}