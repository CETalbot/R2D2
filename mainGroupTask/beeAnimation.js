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



/*document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("demo").innerHTML = "Bumble-bee-sound.mp3";
}*/



//Used https://siongui.github.io/2012/10/08/javascript-play-sound-onclick/ and https://www.w3schools.com/jsref/met_document_createelement.asp to get the sound playing by clicking on the button
function playBeeBuzzing() { //creating a function called 'playBeeBuzzing'. This function does not have any parameters declared. It is undefined
  var addingAudio = document.createElement('audio');//creating an audio element. We found that the sound would only work when the button has been pressed once we had added audio as an element
  addingAudio.setAttribute('src', 'Bumble-bee-sound.mp3');// used https://www.w3schools.com/jsref/met_element_setattribute.asp to understand how to setAttribute. This line is stating the path for the audio file
  addingAudio.play();//playing the audio element
};



}