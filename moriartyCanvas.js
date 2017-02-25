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
//the left side of body
ctx.beginPath();
ctx.moveTo(230,260);
ctx.bezierCurveTo(200,260,210,320,230,400);
ctx.stroke();
// the waist
ctx.beginPath();
ctx.moveTo(230,400);
ctx.bezierCurveTo(280,420,290,400,300,400);
ctx.stroke();
//back side of the left leg
ctx.beginPath();
ctx.moveTo(230,400);
ctx.bezierCurveTo(220,440,280,440,250,560);
ctx.stroke();
//left foot
ctx.beginPath();
ctx.moveTo(276,540);
ctx.bezierCurveTo(310,580,260,560,250,560);
ctx.stroke();
//front side of the left leg
ctx.beginPath();
ctx.moveTo(278,436);
ctx.bezierCurveTo(272,440,299,440,276,540);
ctx.stroke();
//back side of the right leg
ctx.beginPath();
ctx.moveTo(278,436);
ctx.bezierCurveTo(278,450,300,440,320,555);
ctx.stroke();
//right foot
ctx.beginPath();
ctx.moveTo(335,525);
ctx.bezierCurveTo(380,550,325,553,320,555);
ctx.stroke();
//front side of the right leg
ctx.beginPath();
ctx.moveTo(300,400);
ctx.bezierCurveTo(320,460,320,450,335,525);
ctx.stroke();
//right side of the body
ctx.beginPath();
ctx.moveTo(272,260);
ctx.bezierCurveTo(318,266,275,340,300,400);
ctx.stroke();
//right side of neck
ctx.beginPath();
ctx.moveTo(282,225);
ctx.bezierCurveTo(270,250,265,240,272,260);
ctx.stroke();
//arm
/*Get Sherlock text
ctx.font = "30px Arial";
ctx.fillText("GET SHERLOCK", 125, canvas.height/2); */

