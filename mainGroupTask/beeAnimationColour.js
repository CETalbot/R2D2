window.onload = function(){

var canvas = document.getElementById("canvasArea");
var ctx = canvas.getContext("2d");


function drawingCurve(cp1x,cp1y,cp2x,cp2y,x,y) {
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
ctx.stroke();
}
function drawingCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
    ctx.scale(110,40);
	ctx.stroke();
	//ctx.closePath();
}

//drawing the plant pot
function drawCurve(c,d,e,f,x,y){
    
    ctx.bezierCurveTo(c,d,e,f,x,y);//the first four numbers are the control points of the bezier curve (the first two numbers are for one control point and the last two numbers of the four are for the second control point). The last two numbers are for the end point of the bezier curve    
    ctx.stroke();//drawing the curves
};
	

function drawLine (c,d){//creating a function called 'drawLine'. As I would like to be able to change the co-ordinates for each drawn line I have given the function the parameters of a,b,c and d
    ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
    ctx.stroke();//drawing the line
};
    ctx.beginPath();
    ctx.moveTo(190,550);
    drawCurve(215,553,200,555,250,550);//bottom curve of the plantpot
    drawLine(280,460);// right hand side of the plant pot
    
    drawCurve(280,460,190,465,170,460);//top curve of the plantpot
	drawLine(190,550);//left hand side of the plant pot
    ctx.closePath();
    ctx.fillStyle = "brown"; //choosing the colour brown for the fill 
    ctx.fill();//colouring in the paths
    
//drawing bee

    ctx.beginPath();
    drawingCircle(200,100,30,false);
    ctx.closePath();
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();





}