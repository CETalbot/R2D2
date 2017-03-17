var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Text in the background
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Get Sherlock",10,50);

function drawCircle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
}
//the head
drawCircle(250,200,40);

function drawCurve (a,b,cp1x,cp1y,cp2x,cp2y,x,y) {
	ctx.beginPath();
	ctx.moveTo(a,b);
	ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
	ctx.stroke();
}
//the neck
drawCurve(220,227,230,250,230,240,230,260);
//the left side of body
drawCurve(230,260,200,260,210,320,230,400);
// the waist
drawCurve(230,400,280,420,290,400,300,400);
//back side of the left leg
drawCurve(230,400,220,440,280,440,250,560);
//left foot
drawCurve(276,540,310,580,260,560,250,560);
//front side of the left leg
drawCurve(278,436,272,440,299,440,276,540);
//back side of the right leg
drawCurve(278,436,278,450,300,440,320,555);
//right foot
drawCurve(335,525,380,550,325,553,320,555);
//front side of the right leg
drawCurve(300,400,320,460,320,450,335,525);
//right side of the body
drawCurve(272,260,318,266,275,340,300,400);
//right side of neck
drawCurve(281,225,270,250,265,240,272,260);
//arm
drawCurve(295,300,300,310,310,320,350,300);

drawCurve(293,317,305,335,325,325,350,317);

drawCurve(295,290,305,305,315,315,350,292);
//hand
drawCurve(350,300,375,285,380,320,350,317);

drawCurve(350,292,370,280,380,303,365,315);
//eye
drawCurve(285,180,275,180,287,200,290,195);
//hair
drawCurve(267,164,215,230,230,195,215,220);
//mouth
drawCurve(270,220,270,220,275,230,285,220);
//nose
drawCurve(290,200,300,200,300,215,286,215);
/*Get Sherlock text
ctx.font = "30px Arial";
ctx.fillText("GET SHERLOCK", 125, canvas.height/2); */

