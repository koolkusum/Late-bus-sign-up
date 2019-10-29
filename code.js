var r1 = document.getElementById("R1");
var r2 = document.getElementById("R2");
var r3 = document.getElementById("R3");

document.getElementById("R1L").onclick = function(){
	r1.style.visibility = "visible";
	r2.style.visibility = "hidden";
	r3.style.visibility = "hidden";
}
document.getElementById("R2L").onclick = function(){
	r1.style.visibility = "hidden";
	r2.style.visibility = "visible";
	r3.style.visibility = "hidden";
}
document.getElementById("R3L").onclick = function(){
	r1.style.visibility = "hidden";
	r2.style.visibility = "hidden";
	r3.style.visibility = "visible";
}
                                             
