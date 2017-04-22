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
drawLine(130,26,275,2); // line position for the top of WaLL.E's left eye)
ctx.closePath();//closing the path

ctx.beginPath();
drawLine(140,30,275,8); // inner top line of left line
ctx.closePath();
ctx.fillStyle="#FFFFFF";
ctx.fill();

ctx.beginPath();
DrawBezierCurve(130,25,110,297, 330, 120, 275, 1); // curve for outer left eye.
ctx.closePath();


ctx.beginPath();
DrawBezierCurve(140,30,130,237,290,160,275,9); //curve for inner left eye.
ctx.closePath();


	// drawing left eye
	ctx.beginPath();
	drawCircle(205,75,40,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();

	ctx.beginPath();
	drawCircle(205,75,30,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();

ctx.beginPath();
	drawCircle(205,75,20,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#FFFFFF"
	ctx.fill();

ctx.beginPath();
	drawCircle(205,75,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000";
	ctx.fill();


	// bolts on left eye
	ctx.beginPath();
	drawCircle(260,25,5,0,2 * Math.PI); // top right bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

 // left bolt
	ctx.beginPath();
	drawCircle(155,60,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

	// bottom bolt
	ctx.beginPath();
	drawCircle(190,140,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();



	// right eye
	ctx.beginPath();
drawLine(470,10,330,5); // top right outer eye line
drawLine(460,16,350,13); // inner right
ctx.closePath();

// outer right eye curve
ctx.beginPath();
	DrawBezierCurve(330,5,430,240,518,124,470,9);
	ctx.closePath();



	// inner right eye curve
 ctx.beginPath();
 DrawBezierCurve(350,12,431,225,510,124,460,15);
 ctx.closePath();

	// drawing right eye
	ctx.beginPath();
	drawCircle(420,60,40,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();


ctx.beginPath();
	drawCircle(420,60,30,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();


ctx.beginPath();
	drawCircle(420,60,20,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#FFFFFF"
	ctx.fill();


ctx.beginPath();
	drawCircle(420,60,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();






//Drawing bolts right eye
	ctx.beginPath();
	drawCircle(370,25,5,0,2 * Math.PI); // top right bolt
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

// left bolt
	drawCircle(457,30,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();

// bottom bolt
	drawCircle(440,120,5,0,2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle="#000000"
	ctx.fill();


// Arch between Eyes
ctx.beginPath();
	DrawBezierCurve(285,20,265,3,344,3,335,20); // curve between eyes
	ctx.closePath();
	ctx.fillStyle="#5d4730"
	ctx.fill();



// seccond curve
ctx.beginPath();
	DrawBezierCurve(287,15,260,30,368,80,337,20);
	ctx.closePath();
	ctx.fillStyle="#5d4730"
	ctx.fill();



// curve for third part
ctx.beginPath();
	DrawBezierCurve(285,25,270,87,381,72,342,37);
ctx.closePath();
ctx.fillStyle = "#5d4730";
ctx.fill();


// curve for fourth part
ctx.beginPath();
DrawBezierCurve(285,45,260,103,380,77,350,50);
ctx.closePath();
ctx.fillStyle = "#7e5946";
ctx.fill();







// Top left curves connecting neck to eyes
ctx.beginPath();
DrawBezierCurve(261,120,251,111,351,121,297,120)
ctx.closePath();
ctx.fillStyle ="#433a35";
ctx.fill();

//Bottom curves connecting neck to eyes
ctx.beginPath();
DrawBezierCurve(260,120,253,130,300,130,310,120);
ctx.closePath();
ctx.fillStyle ="#433a35";
ctx.fill();




// top right  curve connecting neck to eyes
ctx.beginPath();
DrawBezierCurve(350,122,335,130,370,106,400,122);
ctx.closePath();
ctx.fillStyle ="#433a35";
ctx.fill();

//bottom right curve connecting neck to eyes
ctx.beginPath();
DrawBezierCurve(350,121,352,130,370,135,400,121);
ctx.closePath();
ctx.fillStyle ="#433a35";
ctx.fill();


// neck
ctx.beginPath();
drawRectangle(301, 110, 47, 43);
ctx.closePath();
ctx.fillStyle = "#592b14";
ctx.fill();


// left rectangle on neck
ctx.beginPath();
drawRectangle(301, 80, 13, 30);
ctx.closePath();
ctx.fillStyle = "#6a433e";
ctx.fill();

// right rectangle on neck
ctx.beginPath();
drawRectangle(335, 75, 13, 35);
ctx.closePath();
ctx.fillStyle = "#6a433e";
ctx.fill();

// middle rectangle
ctx.beginPath();
drawRectangle(318, 88, 12,22);
ctx.fillStyle ="#956245";
ctx.fill();


// inner rectangle on neck
ctx.beginPath();
drawRectangle(313, 115, 22,32);
ctx.fillStyle ="#956245";
ctx.fill();

// rectangle at bottom of neck
ctx.beginPath();
drawRectangle(288, 155, 74, 25);
ctx.closePath();
ctx.fillStyle = "#865338";
ctx.fill();


// outer mouth
ctx.beginPath();
drawRectangle(288, 180, 74, 35);
ctx.closePath();
ctx.fillStyle = "#603008";
ctx.fill();

// inner mouth
ctx.beginPath();
drawRectangle(295, 180, 60, 25);
ctx.closePath();
ctx.fillStyle = "#000000";
ctx.fill()



//Tounge
ctx.beginPath();
DrawBezierCurve(300,180,280,202,360,205,355,180);
ctx.closePath();
ctx.fillStyle = "#662a2c";
ctx.fill();

// line inbetween mouth and Tounge
ctx.beginPath();
drawLine(325,155,325,190);
ctx.closePath();


// left rectangle connecting body to neck
ctx.beginPath();
drawRectangle(274, 210, 13, 19);
ctx.closePath();
ctx.fillStyle = "#D3D3D3";
ctx.fill();


// chin
ctx.beginPath();
DrawBezierCurve(290,210,288,240,335,240,366,210);
ctx.closePath();
ctx.fillStyle ="#74302d";
ctx.fill();


// right rectangle connecting body to neck
ctx.beginPath();
drawRectangle(363, 210, 13, 19);
ctx.closePath();
ctx.fillStyle = "#D3D3D3";
ctx.fill();

// curves connecting body to neck
ctx.beginPath();
DrawBezierCurve(315,230,236,227,298,290,287,210);//left
ctx.closePath();
ctx.fillStyle = "#603008";
ctx.fill();

DrawBezierCurve(363,210,364,257,367,230,322,230);//right
ctx.closePath();
ctx.fillStyle = "#603008";
ctx.fill();



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
