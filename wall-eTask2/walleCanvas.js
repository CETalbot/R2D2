window.onload = function(){


var canvas = document.getElementById("canvasSpace");
var ctx = canvas.getContext("2d");

function rectangleDraw(x,y,w,h){
	ctx.rect(x,y,w,h);		
	ctx.stroke();
};
	rectangleDraw(180,230,300,300);
	//rectangleDraw(200,370,30,40);//left side top of arm
	//rectangleDraw(530,370,30,40);//right side top of arm


//drawing arms
function bezierCurveDraw(a,b,c,d,e,f,x,y){
	ctx.beginPath();//beginning the path to draw the curve
    ctx.moveTo(a,b);//start point of the bezier curve
    ctx.bezierCurveTo(c,d,e,f,x,y);//the first four numbers are the control points of the bezier curve (the first two numbers are for one control point and the last two numbers of the four are for the second control point). The last two numbers are for the end point of the bezier curve    
    ctx.closePath();//closing the paths
    ctx.stroke();//drawing the curves
};
	bezierCurveDraw(173,423,200,430,180,430,203,423);//left side 

function lineDraw(a,b,c,d){
	ctx.moveTo(a,b);//beginning the drawing of the line by saying what co-ordinates the line will start from
	ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
	ctx.stroke();//drawing the lines
};
	

	lineDraw(213,373,173,373);//left arm top line connecting hand to arm
	lineDraw(173,373,173,423);//left arm left line connecting hand to arm
	lineDraw(203,400,203,423);//left arm right line connecting hand to arm
	lineDraw(173,373,103,393);//top line left arm
	lineDraw(173,423,103,443);//bottom line left arm
	lineDraw(103,393,103,443);//closing left arm

//drawing hands

//top claw left hand - back
	lineDraw(230,330,200,400);//back line of left hand
	lineDraw(230,363,226,373);//second back line of the left side at the back
	lineDraw(230,330,276,340);//top line of left hand back line
	lineDraw(220,360,265,372);//second line of left hand back line
	lineDraw(276,340,265,372);//closing line of the left side at the back

//bottom claw left hand - back
	
	lineDraw(212,370,259,382);//third line of left hand back line
	lineDraw(245,414,200,400);//fourth line of left hand
	lineDraw(258,383,245,415);//closing line of the left side at the back



//top claw left hand - front
	lineDraw(276,340,319,360);//top line of left hand back line
	lineDraw(265,372,306,392);//second line of left hand back line
	lineDraw(306,392,319,359);//closing line of the left side at the front

//bottom claw left hand - front
	lineDraw(259,382,299,402);//third line of left hand back line
	lineDraw(245,414,285,434);//fourth line of left hand
	lineDraw(285,434,300,401);//closing line of the left side at the front





};