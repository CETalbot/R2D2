window.onload = function(){

var canvas = document.getElementById("canvasArea");
var ctx = canvas.getContext("2d");


/*function drawingCurve(cp1x,cp1y,cp2x,cp2y,x,y) {
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
ctx.stroke();
}
drawingCurve(200,100,165,107,200,120);
drawingCurve(200,120,230,115,200,100); 
function drawingCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}
drawingCircle(215,55,40);
ctx.fillStyle = "yellow";
ctx.fill();*/


//drawing the plant pot
function drawCurve(c,d,e,f,x,y){
    //ctx.beginPath();//beginning the path to draw the curve
    //ctx.moveTo(a,b);//start point of the bezier curve
    ctx.bezierCurveTo(c,d,e,f,x,y);//the first four numbers are the control points of the bezier curve (the first two numbers are for one control point and the last two numbers of the four are for the second control point). The last two numbers are for the end point of the bezier curve    
    //ctx.closePath();//closing the paths
    ctx.stroke();//drawing the curves
   /* ctx.strokeStyle = "brown"; //choosing the colour brown for the stroke stule
    ctx.fill();//colouring in the paths
    ctx.fillStyle = "brown"; //choosing the colour brown for the fill */
};
	



function drawLine (c,d){//creating a function called 'drawLine'. As I would like to be able to change the co-ordinates for each drawn line I have given the function the parameters of a,b,c and d
    //ctx.moveTo(a,b);//beginning the drawing of the line by saying what co-ordinates the line will start from
    ctx.lineTo(c,d);//ending the drawing of the line by saying what co-ordinates the line will end at
    //ctx.closePath();//closing the paths
    ctx.stroke();//drawing the line
    /*ctx.strokeStyle = "brown"; //choosing the colour brown for the stroke stule
    ctx.fill();//colouring in the paths120,460,120,460,250,550
    ctx.fillStyle = "brown"; //choosing the colour brown for the fill */
};
    ctx.beginPath();
    ctx.moveTo(190,550);
    drawCurve(215,553,200,555,250,550);//bottom curve of the plantpot
    drawLine(280,460);// right hand side of the plant pot
    
    drawCurve(280,460,190,465,170,460);//top curve of the plantpot
	drawLine(190,550);//left hand side of the plant pot
    ctx.closePath();
    //ctx.strokeStyle = "brown"; //choosing the colour brown for the stroke stule
    ctx.fillStyle = "brown"; //choosing the colour brown for the fill 
    ctx.fill();//colouring in the paths
    


}