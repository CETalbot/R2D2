var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Text in the background
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Get Sherlock",10,50);

//the head
ctx.beginPath();
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();

//the neck
ctx.moveTo(240,265);
ctx.lineTo(240,240);
ctx.stroke();