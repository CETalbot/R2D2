window.onload = function(){


var canvas = document.getElementById("canvasSpace");
var ctx = canvas.getContext("2d");

function rectangleDraw(x,y,w,h){
	ctx.rect(x,y,w,h);		
	ctx.stroke();
}
	rectangleDraw(180,230,400,300);
}