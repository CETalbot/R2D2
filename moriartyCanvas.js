var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

<<<<<<< HEAD
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
=======

//Get Sherlock text
ctx.font = "30px Arial";
ctx.fillText("GET SHERLOCK", 125, canvas.height/2); 
>>>>>>> d50d967ec3a6b6f7eecf55a58533bcd785399c0b
