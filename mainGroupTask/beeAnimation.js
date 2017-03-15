window.onload = function(){

var canvas = document.getElementById("canvasArea");
var ctx = canvas.getContext("2d");
/*function drawingCurve(cp1x,cp1y,cp2x,cp2y,x,y) {
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
ctx.stroke();
}
drawingCurve(200,100,165,107,200,120);
drawingCurve(200,120,230,115,200,100); */
function drawingCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}
drawingCircle(215,55,40);
ctx.fillStyle = "yellow";
ctx.fill();


/*var audio = new Audio("Bumble-bee-sound.mp3");
audio.oncanplaythrough = function(){
	audio.play();
}

audio.loop = false;

audio.onended = function(){
	audio.play();
}*/



document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("demo").innerHTML = "Bumble-bee-sound.mp3";
}


}