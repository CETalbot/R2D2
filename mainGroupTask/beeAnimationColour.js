window.onload = function(){

var canvas = document.getElementById("canvasArea");
var ctx = canvas.getContext("2d");

function drawingCircle(x,y,r) {
    
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
}

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
    ctx.moveTo(190,550);
    drawingCurve(215,550,200,553,250,550);//bottom curve of the plantpot
    drawingLine(280,460);// right hand side of the plant pot
    
    drawingCurve(280,460,190,465,170,460);//top curve of the plantpot
	drawingLine(190,550);//left hand side of the plant pot
    ctx.closePath();
    ctx.fillStyle = "brown"; //choosing the colour brown for the fill 
    ctx.fill();//colouring in the paths
    


//drawing bee


    ctx.beginPath();
    ctx.save();
    ctx.scale(2,1);
    drawingCircle(100,150,40);
    ctx.restore();
    ctx.closePath();
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();


    ctx.beginPath();
    drawingRectangle(130,130,10,40);
    drawingRectangle(160,115,10,70);
    drawingRectangle(190,110,10,80);
    drawingRectangle(220,110,10,80);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
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
}