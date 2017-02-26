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
ctx.moveTo(281,225);
ctx.bezierCurveTo(270,250,265,240,272,260);
ctx.stroke();
//arm
ctx.beginPath();
ctx.moveTo(295,300);
ctx.bezierCurveTo(300,310,310,320,350,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(293,317);
ctx.bezierCurveTo(305,335,325,325,350,317);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(295,290);
ctx.bezierCurveTo(305,305,315,315,350,292);
ctx.stroke();

//hand
ctx.beginPath();
ctx.moveTo(350,300);
ctx.bezierCurveTo(375,285,380,320,350,317);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350,292);
ctx.bezierCurveTo(370,280,380,303,365,315);
ctx.stroke();
//eye
ctx.beginPath();
ctx.moveTo(285,180);
ctx.bezierCurveTo(275,180,287,200,290,195);
ctx.stroke();
//hair
ctx.beginPath();
ctx.moveTo(267,164);
ctx.bezierCurveTo(215,230,230,195,215,220);
ctx.stroke();
//mouth
ctx.beginPath();
ctx.moveTo(270,220);
ctx.bezierCurveTo(270,220,275,230,285,220);
ctx.stroke();
/*Get Sherlock text
ctx.font = "30px Arial";
ctx.fillText("GET SHERLOCK", 125, canvas.height/2); */

