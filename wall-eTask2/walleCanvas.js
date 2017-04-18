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


