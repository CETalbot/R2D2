window.onload = function(){


var canvas = document.getElementById("canvasSpace");
var ctx = canvas.getContext("2d");

function drawingCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

function rectangleDraw(x,y,w,h){
	ctx.rect(x,y,w,h);		
	ctx.stroke();
};
	rectangleDraw(180,230,300,300);//main body shape


//drawing legs
function drawRectangle(x,y,w,h){
	ctx.rect(x,y,w,h);		
	ctx.stroke();
};
	drawRectangle(200,530,110,80);//left leg
    drawRectangle(210,610,10,10);//first rectangle in left leg
    drawRectangle(230,610,20,10);//second rectangle in left leg
    drawRectangle(260,610,20,10);//third rectangle in left leg
    drawRectangle(290,610,10,10);//fourth rectangle in left leg

    drawRectangle(350,530,110,80);//right leg
    drawRectangle(360,610,10,10);//first rectangle in right leg
    drawRectangle(380,610,20,10);//second rectangle in right leg
    drawRectangle(410,610,20,10);//third rectangle in right leg
    drawRectangle(440,610,10,10);//fourth rectangle in right leg




//drawing arms
function bezierCurveDraw(a,b,c,d,e,f,x,y){
	ctx.beginPath();//beginning the path to draw the curve
    ctx.moveTo(a,b);//start point of the bezier curve
    ctx.bezierCurveTo(c,d,e,f,x,y);//the first four numbers are the control points of the bezier curve (the first two numbers are for one control point and the last two numbers of the four are for the second control point). The last two numbers are for the end point of the bezier curve    
    ctx.closePath();//closing the paths
    ctx.stroke();//drawing the curves
};
	bezierCurveDraw(173,423,200,430,180,430,203,423);//left side 

function drawLine(a,b,c,d){
	ctx.moveTo(a,b);//beginning the drawing of the line by saying what co-ordinates the line will start from
	ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
	ctx.stroke();//drawing the lines
};
	
  //drawing arms
  //left arm
	drawLine(213,373,173,373);//left arm top line connecting hand to arm
	drawLine(173,373,173,423);//left arm left line connecting hand to arm
	drawLine(203,400,203,423);//left arm right line connecting hand to arm
	drawLine(173,373,103,393);//top line left arm
	drawLine(173,423,103,443);//bottom line left arm
	drawLine(103,393,103,443);//closing left arm
  drawLine(153,430,180,430);//line underneath arm

//drawing hands
//top claw left hand - back
	drawLine(230,330,200,400);//back line of left hand
	drawLine(230,363,226,373);//second back line of the left side at the back
	drawLine(230,330,276,340);//top line of left hand back line
	drawLine(220,360,265,372);//second line of left hand back line
	drawLine(276,340,265,372);//closing line of the left side at the back

//bottom claw left hand - back
	drawLine(212,370,259,382);//third line of left hand back line
	drawLine(245,414,200,400);//fourth line of left hand
	drawLine(258,383,245,415);//closing line of the left side at the back

//top claw left hand - front
	drawLine(276,340,319,360);//top line of left hand back line
	drawLine(265,372,306,392);//second line of left hand back line
	drawLine(306,392,319,359);//closing line of the left side at the front

//bottom claw left hand - front
	drawLine(259,382,299,402);//third line of left hand back line
	drawLine(245,414,285,434);//fourth line of left hand
	drawLine(285,434,300,401);//closing line of the left side at the front


//right arm
  drawLine(213,373,173,373);//right arm top line connecting hand to arm
  drawLine(173,373,173,423);//right arm left line connecting hand to arm
  drawLine(203,400,203,423);//right arm right line connecting hand to arm
  drawLine(173,373,103,393);//top line right arm
  drawLine(173,423,103,443);//bottom line right arm
  drawLine(103,393,103,443);//closing right arm
  drawLine(480,430,507,430);//line underneath arm

//drawing hands
//top claw right hand - back
  drawLine(230,330,200,400);//back line of right hand
  drawLine(230,363,226,373);//second back line of the right side at the back
  drawLine(230,330,276,340);//top line of right hand back line
  drawLine(220,360,265,372);//second line of right hand back line
  drawLine(276,340,265,372);//closing line of the right side at the back

//bottom claw right hand - back
  drawLine(212,370,259,382);//third line of right hand back line
  drawLine(245,414,200,400);//fourth line of right hand
  drawLine(258,383,245,415);//closing line of the right side at the back

//top claw right hand - front
  drawLine(276,340,319,360);//top line of right hand back line
  drawLine(265,372,306,392);//second line of right hand back line
  drawLine(306,392,319,359);//closing line of the right side at the front

//bottom claw right hand - front
  drawLine(259,382,299,402);//third line of right hand back line
  drawLine(245,414,285,434);//fourth line of right hand
  drawLine(285,434,300,401);//closing line of the right side at the front





//drawing legs
  drawLine(180,530,200,550);//line connecting to left leg from the body
  drawLine(480,530,460,550);//line connecting to right leg from the body
  drawLine(310,560,333,560);//straight line between two legs
  drawLine(333,560,350,545);//diagonal line between two legs
    
    //////////left leg/////////
    //first horizontal in left leg
  drawLine(230,545,210,555);//first line in left leg
  drawLine(230,550,210,560);//second line in left leg
  drawLine(230,565,210,575);//third line in left leg
  drawLine(230,570,210,580);//fourth line in left leg 
  drawLine(230,585,210,595);//fifth line in left leg
  drawLine(230,590,210,600);//sixth line in left leg

   //second horizontal in left leg
  drawLine(230,545,250,555);//first line in left leg
  drawLine(230,550,250,560);//second line in left leg
  drawLine(230,565,250,575);//third line in left leg
  drawLine(230,570,250,580);//fourth line in left leg
  drawLine(230,585,250,595);//fifth line in left leg
  drawLine(230,590,250,600);//sixth line in left leg
   //third horizontal in left leg
  drawLine(280,545,260,555);//first line in left leg
  drawLine(280,550,260,560);//second line in left leg
  drawLine(280,565,260,575);//third line in left leg
  drawLine(280,570,260,580);//fourth line in left leg
  drawLine(280,585,260,595);//fifth line in left leg
  drawLine(280,590,260,600);//sixth line in left leg
 
   //fourth horizontal in left leg
  drawLine(280,545,300,555);//first line in left leg
  drawLine(280,550,300,560);//second line in left leg
  drawLine(280,565,300,575);//third line in left leg
  drawLine(280,570,300,580);//fourth line in left leg
  drawLine(280,585,300,595);//fifth line in left leg
  drawLine(280,590,300,600);//sixth line in left leg
   //////////right leg////////
   //first horizontal in right leg
  drawLine(380,545,360,555);//first line in left leg
  drawLine(380,550,360,560);//second line in left leg
  drawLine(380,565,360,575);//third line in left leg
  drawLine(380,570,360,580);//fourth line in left leg 
  drawLine(380,585,360,595);//fifth line in left leg
  drawLine(380,590,360,600);//sixth line in left leg
   //second horizontal in left leg
  drawLine(380,545,400,555);//first line in left leg
  drawLine(380,550,400,560);//second line in left leg
  drawLine(380,565,400,575);//third line in left leg
  drawLine(380,570,400,580);//fourth line in left leg 
  drawLine(380,585,400,595);//fifth line in left leg
  drawLine(380,590,400,600);//sixth line in left leg

   //third horizontal in left leg
  drawLine(430,545,410,555);//first line in left leg
  drawLine(430,550,410,560);//second line in left leg
  drawLine(430,565,410,575);//third line in left leg
  drawLine(430,570,410,580);//fourth line in left leg
  drawLine(430,585,410,595);//fifth line in left leg
  drawLine(430,590,410,600);//sixth line in left leg
    //fourth horizontal in left leg
  drawLine(430,545,450,555);//first line in left leg
  drawLine(430,550,450,560);//second line in left leg
  drawLine(430,565,450,575);//third line in left leg
  drawLine(430,570,450,580);//fourth line in left leg
  drawLine(430,585,450,595);//fifth line in left leg
  drawLine(430,590,450,600);//sixth line in left leg





drawingCircle(440,500,22);
ctx.fillStyle = "red";
ctx.fill();

drawingCircle(405,500,4);
ctx.fillStyle = "black";
ctx.fill();
//referenced by https://www.w3schools.com/graphics/canvas_text.asp 
ctx.font = "40px Calibri";
ctx.fillStyle = "black";
ctx.fillText("Wall",323,510);

ctx.font = "40px Calibri";
ctx.fillStyle = "white";
ctx.fillText("E",425,510);

};


