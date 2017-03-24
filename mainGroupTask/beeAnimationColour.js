window.onload = function(){

var canvas = document.getElementById("canvasArea");
var ctx = canvas.getContext("2d");

function drawingCircle(x,y,r) {
    
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
};

//drawing the plant pot
function drawingCurve(c,d,e,f,x,y){
    
    ctx.bezierCurveTo(c,d,e,f,x,y);//the first four numbers are the control points of the bezier curve (the first two numbers are for one control point and the last two numbers of the four are for the second control point). The last two numbers are for the end point of the bezier curve    
    ctx.stroke();//drawing the curves
};

function drawingLine (c,d){//creating a function called 'drawLine'. As I would like to be able to change the co-ordinates for each drawn line I have given the function the parameters of a,b,c and d
    ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
    ctx.stroke();//drawing the line
};

function drawingRectangle (x,y,w,h){
    ctx.rect(x,y,w,h);
    ctx.stroke();
};
    ctx.beginPath();
    ctx.moveTo(190,650);
    drawingCurve(215,653,218,653,250,650);//bottom curve of the plantpot
    drawingLine(280,560);// right hand side of the plant pot
    
    drawingCurve(280,560,190,565,170,560);//top curve of the plantpot
	drawingLine(190,650);//left hand side of the plant pot
    ctx.closePath();
    ctx.fillStyle = "brown"; //choosing the colour brown for the fill 
    ctx.fill();//colouring in the paths
    



//drawing bee
    ctx.beginPath();//body of the bee
    ctx.save();
    ctx.scale(2,1);
    drawingCircle(100,150,40);
    ctx.restore();
    ctx.closePath();
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();


    ctx.beginPath();//eye of the bee
    drawingCircle(260,143,6);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();


/*sky background colour gradient code used from 
https://www.w3schools.com/tags/canvas_createlineargradient.asp on 05/03/2017*/
    var gradient=ctx.createRadialGradient(170,100,2,200,30,120);
    gradient.addColorStop(0, "#d9d9d9");
    gradient.addColorStop(1,"#ffffff");
    ctx.beginPath();
    ctx.moveTo(170,113);
    drawingCurve(100,80,90,10,195,60);
    drawingCurve(290,10,300,70,230,110);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();

//behind stripe of the bee
    ctx.beginPath();
    drawingCurve(142,123,90,140,141,178);
    ctx.moveTo(142,123);
    drawingLine(142,178);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

//second stripe of the bee
    ctx.beginPath();
    drawingCurve(160,115,150,150,160,185);//left line
    drawingCurve(158,185,160,185,178,189);//bottom line
    drawingCurve(172,135,172,170,178,111);//right line
    drawingCurve(178,111,165,115,160,115)//top line 
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

//first stripe of the bee
    ctx.beginPath();
    drawingCurve(200,110,185,150,200,190);//left line
    drawingCurve(202,185,190,192,220,189);//bottom line
    drawingCurve(221,189,200,150,220,110);//right line
    drawingCurve(220,110,190,113,201,110);//top line
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    drawingCurve(240,160,240,180,270,170);//smiley face







//flower
    ctx.beginPath();
    drawingRectangle(220,411,5,150);//stem of the flower
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();

    ctx.beginPath();//1st
    drawingCircle(220,320,25);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();//3rd
    drawingCircle(255,390,25);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();//5th
    drawCircle(190,390,25);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();//6th
    drawingCircle(185,350,25);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();//2nd
    drawingCircle(260,350,25);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();//4th
    drawingCircle(220,405,25);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();
    drawingCircle(222,360,30); //inner circle
    ctx.closePath();
    ctx.fillStyle = "#904737";
    ctx.fill();




}