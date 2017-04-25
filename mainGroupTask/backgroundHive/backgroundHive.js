	var canvas = document.getElementById("canvas");//creating a canvas object from the HTML canvas object. HTML file
    var ctx = canvas.getContext("2d");//creating a 2D object so that you are able to start drawing  

 	//creating gradient for the background
	var gradient=ctx.createLinearGradient(0,0,0,500);
	gradient.addColorStop(0,"#cff1f9");
	gradient.addColorStop(1,"#66abee");
	ctx.fillStyle = gradient;
	ctx.fillRect(0,0,1000,700);
	ctx.closePath();
	


	function drawLine(a,b,c,d){
		ctx.moveTo(a,b);//beginning the drawing of the line by saying what co-ordinates the line will start from
    	ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
		ctx.stroke();
	};
		
		

	function drawCurve(a,b,c,d,e,f,x,y){
		ctx.moveTo(a,b);
		ctx.bezierCurveTo(c,d,e,f,x,y);
	};
		ctx.beginPath();
		drawCurve(360,100,380,80,410,80,440,100);//top of the hive
		drawCurve(350,130,340,130,340,95,350,100);//left hand curve - second ring
		drawCurve(450,130,460,130,460,95,450,100);//right hand curve - second ring
		drawLine(350,100,450,100);//top line of second ring
		drawLine(350,130,450,130);//bottom line of second ring
		ctx.closePath();
		ctx.fillStyle = "#e7c537";
		ctx.fill();
		ctx.strokeStyle = "#e7c537";
		ctx.stroke();

		ctx.beginPath();
		drawLine(335,130,465,130);//top line of third ring
		drawLine(335,160,465,160);//bottom line of third ring
		drawCurve(335,160,320,140,340,125,335,132);//left hand curve - third ring
		drawCurve(465,160,480,140,460,125,465,132);//right hand curve - third ring
		ctx.closePath();
		ctx.fillStyle = "#e7c537";
		ctx.fill();
		ctx.strokeStyle = "#e7c537";
		ctx.stroke();

		ctx.beginPath();
		drawCurve(335,190,320,170,340,160,335,160);//left hand curve - fourth ring
		drawCurve(465,190,480,185,480,160,465,160);//right hand curve - fourth ring
		drawLine(335,190,465,190);//bottom line of fourth ring
		ctx.closePath();
		ctx.fillStyle = "#e7c537";
		ctx.fill();
		ctx.strokeStyle = "#e7c537";
		ctx.stroke();



		ctx.beginPath();
		drawLine(350,220,450,220);//bottom line of fifth ring
		drawCurve(350,220,340,220,340,190,350,190);//left hand curve - fifth ring
		drawCurve(450,220,460,220,460,190,450,190);//left hand curve - fifth ring
		drawCurve(360,220,380,250,410,250,440,220);//bottom of the hive
		ctx.closePath();
		ctx.fillStyle = "#e7c537";
		ctx.fill();
		ctx.strokeStyle = "#e7c537";
		ctx.stroke();
		
		ctx.beginPath();
		drawCurve(390,170,390,140,410,140,410,170);//bee entry
		drawLine(390,170,410,170)//bee entry
		ctx.closePath();
		ctx.fillStyle = "#black";
		ctx.fill();
		ctx.strokeStyle = "#black";
		ctx.stroke();

		ctx.beginPath();
		drawCurve(800,700,860,400,860,400,800,200);//tree trunk
		drawCurve(800,200,600,150,600,150,390,0);//tree branch
		drawCurve(800,0,650,100,650,80,500,0);//tree branch
		//ctx.fillStyle = "brown";
		//ctx.fill();
		ctx.closePath();
		ctx.strokeStyle = "brown";
		ctx.stroke();





	function drawRectangle(x,y,w,h){
		ctx.rect(x,y,w,h);
	};
		ctx.beginPath();
		drawRectangle(0,650,1000,50);//grass
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.strokeStyle = "green";
		ctx.stroke();

		ctx.beginPath();
		drawRectangle(390,0,10,85);//branch
		ctx.fillStyle = "brown";
		ctx.fill();
		ctx.strokeStyle = "brown";
		ctx.stroke();
	

   function drawCircle (x,y,r){
		ctx.beginPath();
		ctx.arc(x,y,r,0*Math.PI,1*Math.PI);
		ctx.fillStyle = "yellow";
		ctx.fill();
		ctx.strokeStyle = "yellow";
		ctx.stroke();
};
	drawCircle(0,0,110);//sun





