	var circle = document.getElementById("r2d2");
	var ctx = circle.getContext("2d");

	
	//var x =canvas.width /2;
	//var y =canvas.height /2;
	//var r=70;

	function drawCircle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	};
	//body
	drawCircle(250,400,30);//in body circle
	//foot
	drawCircle(240,517,7);//left circle on foot thing
	drawCircle(263,517,7);//right circle on foot thing
	//head
	drawCircle(248,60,15);//main circle in middle of head
	drawCircle(231,79,5);//left small circle in middle of head
	drawCircle(265,79,5);//first circle inside bottom of head
	drawCircle(232,117,10);//second circle inside bottom of head
	drawCircle(266,115,8);//third circle inside bottom of head
	drawCircle(305,112,7);//right circle inside bottom of head

	//half circle inside head
	ctx.beginPath();
	ctx.arc(300,117,10,0,1.5*Math.PI);
	ctx.stroke();


	function drawRectangle (x, y, w, h){
		ctx.rect(x,y,w,h);		
		ctx.stroke();
	}
	//left leg
	drawRectangle(100,430,50,75);//left leg bottom section
	drawRectangle(100,380,50,50);//left leg third section
	drawRectangle(110,280,40,100);//left leg second section
	drawRectangle(100,180,50,100);//left leg top section
	//right leg
	drawRectangle(350,430,50,75);//right leg bottom section	
	drawRectangle(350,380,50,50);//right leg third section
	drawRectangle(350,280,40,100);//right leg second section
	drawRectangle(350,180,50,100);//right leg top section
	//body
	drawRectangle(150,150,200,300);//main body
	drawRectangle(150,130,200,20);//top body rectangle
	drawRectangle(150,450,200,20);//bottom body rectangle
	drawRectangle(225,250,50,100);//in body rectangle

	//foot
	drawRectangle(230,550,50,85);//rectangle for foot thing
	//head
	drawRectangle(160,92,20,35);//left first rectangle inside head
	drawRectangle(190,87,25,40);//second rectangle inside head
	drawRectangle(223,40,50,47);//large rectangle middle inside head
	drawRectangle(249,102,35,25);//third rectangle inside bottom of head
	drawRectangle(319,92,20,35);//last rectangle inside bottom of head
	drawRectangle(150,130,200,11);//rectangle for neck


		ctx.moveTo(150,505);
		ctx.lineTo(190,470);//left leg line
		ctx.stroke();

		ctx.moveTo(350,505);
		ctx.lineTo(310,470);//right leg line
		ctx.stroke();



		//lines for foot thing
		ctx.moveTo(210,470);//left hand top line
		ctx.lineTo(240,510);
		ctx.stroke();

		ctx.moveTo(290,470);//right hand top line
		ctx.lineTo(265,510);
		ctx.stroke();

		ctx.moveTo(240,525);//left hand bottom line
		ctx.lineTo(230,550);
		ctx.stroke();

		ctx.moveTo(265,525);//right hand bottom line
		ctx.lineTo(280,550);
		ctx.stroke();



		//Head arc
		ctx.beginPath();
		ctx.arc(250,130,100,1*Math.PI,0*Math.PI);
		ctx.arc(250,130,100,6,0*Math.PI);
		ctx.arc(250,130,100,1*Math.PI,0*Math.PI);
		ctx.stroke();