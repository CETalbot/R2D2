window.onload = function(){


var canvas = document.getElementById("canvasSpace");
var ctx = canvas.getContext("2d");

function drawCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}


function drawRectangle(x,y,w,h){
	ctx.rect(x,y,w,h);
	ctx.stroke();
};


//bezier curve function
function DrawBezierCurve(a,b,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.beginPath(); // Begin path to draw curve.
ctx.moveTo(a,b); // Starting point (move to of curve)
ctx.bezierCurveTo(cp1x,cp1y,cp2x ,cp2y,x,y); //cp are the control points of the curve for x and y. Last x and y are the ending points of the curve.
ctx.stroke();
;
};

// Walle.E's Head

// Walles Left Eye
ctx.beginPath();
drawLine(100,26,232,2); // line position for the top of WaLL.E's left eye)
ctx.closePath();
ctx.fillStyle="#000000";
ctx.fill();

ctx.beginPath();
drawLine(110,30,228,8); // inner top line of left line
ctx.closePath();
ctx.fillStyle="#000000";
ctx.fill();

ctx.beginPath();
DrawBezierCurve(110,30,110,277, 300, 120, 228, 9); // curve for outer left eye.


ctx.beginPath();
DrawBezierCurve(100,25,90,267,312,160,232,2); //curve for inner left eye.



	// drawing left eye
	ctx.beginPath();
	drawCircle(185,75,40,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#00000"
	ctx.fill();

	ctx.beginPath();
	drawCircle(185,75,30,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();

ctx.beginPath();
	drawCircle(185,75,20,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#FFFFFF"
	ctx.fill();

ctx.beginPath();
	drawCircle(185,75,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();


ctx.beginPath();
	// bolts on left eye
	drawCircle(220,25,5,0,2 * Math.PI); // top right bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();


	ctx.beginPath();
	drawCircle(125,60,5,0,2 * Math.PI); // left bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

	ctx.beginPath();
	drawCircle(180,140,5,0,2 * Math.PI); // bottom bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

	// right eye
	ctx.beginPath();
drawLine(450,10,280,5); // top right outer eye line
drawLine(450,16,290,13); // point of right eye
ctx.closePath();


ctx.beginPath();
	DrawBezierCurve(280,5,430,240,518,124,450,9); // outer right eye curve
	ctx.closePath();


ctx.beginPath();
	// drawing right eye
	drawCircle(400,60,40,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();


ctx.beginPath();
	drawCircle(400,60,30,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();


ctx.beginPath();
	drawCircle(400,60,20,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#FFFFFF"
	ctx.fill();


ctx.beginPath();
	drawCircle(400,60,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

ctx.beginPath();
DrawBezierCurve(290,12,431,225,510,124,450,15); // inner right eye curve
ctx.closePath();


//Drawing bolts right eye
	ctx.beginPath();
	drawCircle(320,25,5,0,2 * Math.PI); // top right bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();


	drawCircle(445,30,5,0,2 * Math.PI); // left bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

	drawCircle(420,120,5,0,2 * Math.PI); // bottom bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

// Arch between Eyes
ctx.beginPath();
	DrawBezierCurve(240,20,240,10,280,5,292,23); // curve between eyes
	DrawBezierCurve(248,44,260,54,319,51,304,42);
	DrawBezierCurve(250,56,256,74,311,91,315,57);
ctx.closePath();






ctx.beginPath();
drawLine(270,159,320,159); //bottom line
drawLine(271,160,271,90);
drawLine(319,160,319,89);
drawLine(270,89,280,89);
drawLine(279,89,279,105);
drawLine(279,105,310,105);
drawLine(309,89,309,105);
drawLine(308,89,320,89);
ctx.closePath();



ctx.beginPath();
// Diagnal shape of neck
drawLine(280,85,250,75);
drawLine(310,85,280,85);
drawLine(330,75,310,85);
ctx.closePath();
ctx.fillStyle="FFFFFF"
ctx.fill();

ctx.beginPath();
// shape in middle of neck 1
drawLine(286,90,286,105);
drawLine(303,90,303,105);
drawLine(304,90,285,90);
ctx.closePath();
//ctx.fillStyle="#"
//ctx.fill();

ctx.beginPath();
// inner square on neck
drawLine(304,110,285,110);
drawLine(305,109,305,145);
drawLine(285,109,285,145);
drawLine(305,145,285,145);
ctx.closePath();


ctx.beginPath();
// left curves connecting neck to eyes
DrawBezierCurve(239,120,231,150,270,132,270,122);
DrawBezierCurve(232,131,233,149,260,149,270,132);
ctx.closePath();


ctx.beginPath();
// right curves connecting neck to eyes
DrawBezierCurve(320,95,312,130,370,118,350,97);
DrawBezierCurve(320,110,312,130,360,135,365,111);
ctx.closePath();


ctx.beginPath();
// top of mouth
drawLine(260,153,270,153);// top line left
drawLine(260,152,260,181); // left line
drawLine(295,159,295,190); // middle line
drawLine(259,180,331,180);// bottom line
drawLine(330,153,318,153); // top right line
drawLine(330,152,330,181);//right line

ctx.beginPath();
// middle of mouth
drawLine(270,180,270,200) // left
drawLine(320,180,320,200) // right
ctx.closePath();


ctx.beginPath();
//bottom of mouth
DrawBezierCurve(320,195,322,217,269,219,270,198);
DrawBezierCurve(268,209,273,236,316,231,320,211);
ctx.closePath();


ctx.beginPath();
// Tongue
DrawBezierCurve(271,183,291,201,301,197,319,183);
ctx.closePath();
ctx.beginPath();
// bottom of neck
drawLine(258,172,258,208);// left line
drawLine(248,197,248,230);// bottom line
drawLine(259,198,248,198);

drawLine(332,172,332,208);// left line
drawLine(342,198,333,198);
drawLine(342,197,342,229);
ctx.closePath();


ctx.beginPath();
// curves connecting body to neck
DrawBezierCurve(258,208,260,211,255,220,273,230);//left
DrawBezierCurve(332,207,330,210,330,225,315,230);//right
ctx.closePath();



  ctx.beginPath();
  drawRectangle(180,230,300,300);//main body shape
  ctx.closePath();
  ctx.fillStyle = "#eec107";
  ctx.fill();

  //left shoulder pad
  ctx.beginPath();
  drawRectangle(180,230,70,20);
  ctx.closePath();
  ctx.fillStyle = "#181717";
  ctx.fill();

  //right shoulder pad
  ctx.beginPath();
  drawRectangle(410,230,70,20);
  ctx.closePath();
  ctx.fillStyle = "#181717";
  ctx.fill();

  //right silver section under shoulder pad
  ctx.beginPath();
  drawRectangle(410,250,70,40);
  ctx.closePath();
  ctx.fillStyle = "#cecdc8";
  ctx.fill();

  //left silver section under shoulder pad
  ctx.beginPath();
  drawRectangle(180,250,70,40);
  ctx.closePath();
  ctx.fillStyle = "#cecdc8";
  ctx.fill();

  //right pad at bottom of body
  ctx.beginPath();
  drawRectangle(450,460,30,70);
  ctx.closePath();
  ctx.fillStyle = "#181717";
  ctx.fill();

  //left pad at bottom of body
  ctx.beginPath();
  drawRectangle(180,460,30,70);
  ctx.closePath();
  ctx.fillStyle = "#181717";
  ctx.fill();

  //outside tag at the top of the body to the left hand side
  ctx.beginPath();
  drawRectangle(265,250,60,40);
  ctx.closePath();
  ctx.fillStyle = "#cecdc8";
  ctx.fill();

  //inside tag at the top of the body to the left hand side
  ctx.beginPath();
  drawRectangle(270,255,50,30);
  ctx.closePath();
  ctx.fillStyle = "#a5a4a0";
  ctx.fill();

  //grey tag at the top of the body to the right hand side
  ctx.beginPath();
  drawRectangle(335,250,60,40);
  ctx.closePath();
  ctx.fillStyle = "#cecdc8";
  ctx.fill();



//drawing legs
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



function drawLine(a,b,c,d){
  ctx.moveTo(a,b);//beginning the drawing of the line by saying what co-ordinates the line will start from
  ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
  ctx.stroke();//drawing the lines
};

  //drawing arms
  //left arm
  ctx.beginPath();//beginning the path
  drawLine(213,373,173,373);//left arm top line connecting hand to arm
  drawLine(173,373,173,423);//left arm left line connecting hand to arm
  drawLine(203,400,203,423);//left arm right line connecting hand to arm
  drawLine(173,373,103,393);//top line left arm
  drawLine(173,423,103,443);//bottom line left arm
  drawLine(103,393,103,443);//closing left arm
  drawLine(173,423,203,423);//bottom front line
  drawLine(153,430,180,430);//line underneath arm
  ctx.closePath();//closing the path
  ctx.strokeStyle = "brown";//choosing the colour of the stroke
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";//choosing the colour of the fill
  ctx.fill();//filling the path

//drawing hands
//top claw left hand - back
  ctx.beginPath();
  drawLine(230,330,200,400);//back line of left hand
  drawLine(230,363,226,373);//second back line of the left side at the back
  drawLine(230,330,276,340);//top line of left hand back line
  drawLine(220,360,265,372);//second line of left hand back line
  drawLine(276,340,265,372);//closing line of the left side at the back
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();


//bottom claw left hand - back
  ctx.beginPath();
  drawLine(212,370,259,382);//third line of left hand back line
  drawLine(245,414,200,400);//fourth line of left hand
  drawLine(258,383,245,415);//closing line of the left side at the back
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();

//top claw left hand - front
  ctx.beginPath();
  drawLine(276,340,319,360);//top line of left hand back line
  drawLine(265,372,306,392);//second line of left hand back line
  drawLine(306,392,319,359);//closing line of the left side at the front
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();


//bottom claw left hand - front
  ctx.beginPath();
  drawLine(259,382,299,402);//third line of left hand back line
  drawLine(245,414,285,434);//fourth line of left hand
  drawLine(285,434,300,401);//closing line of the left side at the front
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();


//right arm
  ctx.beginPath();
  drawLine(443,371,488,371);//right arm top line connecting hand to arm
  drawLine(488,370,488,422);//right arm left line connecting hand to arm
  drawLine(461,400,461,424);//right arm right line connecting hand to arm
  drawLine(488,372,563,395);//top line right arm
  drawLine(488,423,563,445);//bottom line right arm
  drawLine(563,395,563,445);//closing right arm
  drawLine(492,423,461,423);//bottom front line
  drawLine(480,430,515,430);//line underneath arm
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();


//drawing hands
//top claw right hand - back
  ctx.beginPath();
  drawLine(461,400,420,338);//back line of right hand
  drawLine(428,375,436,385);//second back line of the right side at the back
  drawLine(420,340,370,355);//top line of right hand back line
  drawLine(394,386,442,370);//second line of right hand back line
  drawLine(370,355,395,386);//closing line of the right side at the back
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();

//bottom claw right hand - back
  ctx.beginPath();
  drawLine(400,395,448,378);//third line of right hand back line
  drawLine(460,405,420,425);//fourth line of right hand
  drawLine(420,425,400,395);//closing line of the right side at the back
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();


//top claw right hand - front
  ctx.beginPath();
  drawLine(340,382,376,352);//top line of right hand back line
  drawLine(358,410,395,385);//second line of right hand back line
  drawLine(340,382,360,410);//closing line of the right side at the front
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();


//bottom claw right hand - front
  ctx.beginPath();
  drawLine(365,420,400,395);//third line of right hand back line
  drawLine(385,445,420,425);//fourth line of right hand
  drawLine(385,445,365,420);//closing line of the right side at the front
  ctx.closePath();
  ctx.strokeStyle = "brown";
  ctx.stroke();//drawing the lines
  ctx.fillStyle = "brown";
  ctx.fill();

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

  //yellow lines on tag at the top of body
  //First line
  ctx.beginPath();
  drawLine(360,265,390,265);
  ctx.strokeStyle = "yellow";
  ctx.stroke();
  ctx.closePath();
  //second line
  ctx.beginPath();
  drawLine(360,275,390,275);
  ctx.strokeStyle = "yellow";
  ctx.stroke();
  ctx.closePath();





  //circle part of name tag at the bottom of the body section
  drawCircle(440,500,22);
  ctx.fillStyle = "red";
  ctx.fill();
  //circle part of the name at the bottom of the body
  drawCircle(405,500,4);
  ctx.fillStyle = "black";
  ctx.fill();
  // yellow circle on tag at the top of the body
  drawCircle(345,270,6);
  ctx.fillStyle = "yellow";
  ctx.fill();
  //referenced by https://www.w3schools.com/graphics/canvas_text.asp
  //font of name
  ctx.font = "40px Calibri";
  ctx.fillStyle = "black";
  ctx.fillText("Wall",323,510);

  ctx.font = "40px Calibri";
  ctx.fillStyle = "white";
  ctx.fillText("E",425,510);

};
