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
ctx.beginPath();
ctx.moveTo(220,227);
ctx.bezierCurveTo(230,250,230,240,230,260);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230,260);
ctx.bezierCurveTo(200,260,210,320,230,400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230,400);
ctx.bezierCurveTo(280,420,290,400,300,400);
ctx.stroke();

/*Get Sherlock text
ctx.font = "30px Arial";
ctx.fillText("GET SHERLOCK", 125, canvas.height/2); */

