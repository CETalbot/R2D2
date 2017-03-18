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
	bezierCurveDraw(173,423,100,100,100,100,203,423);

function lineDraw(a,b,c,d){
	ctx.moveTo(a,b);//beginning the drawing of the line by saying what co-ordinates the line will start from
	ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
	ctx.stroke();//drawing the lines
};
	//lineDraw(160,410,180,410);//left side body to arm conection
	//lineDraw(580,410,600,410);//right side body to arm conection

	lineDraw(213,373,173,373);//left arm top line connecting hand to arm
	lineDraw(173,373,173,423);//left arm left line connecting hand to arm
	lineDraw(203,400,203,423);//left arm right line connecting hand to arm


//drawing hands

//top claw left hand
	lineDraw(230,330,200,400);//back line of left hand
	lineDraw(230,363,226,373);//second back line of the left side at the back
	lineDraw(230,330,276,340);//top tine of left hand back line
	lineDraw(220,360,265,372);//second line of left hand back line
	lineDraw(276,340,265,372);//closing line of the left side at the back

//bottom claw left hand
	
	lineDraw(212,370,259,382);//third line of left hand back line
	lineDraw(245,414,200,400);//fourth line of left hand
	lineDraw(258,383,245,415);//closing line of the left side at the back
};


