var c = document.getElementById("flower");
var ctx = c.getContext("2d");

function drawCircle(x,y,r){
       ctx.beginPath();
       ctx.arc(x,y,r,0,2*Math.PI);
       ctx.stroke();
};
   
 

ctx.beginPath();//1st
drawCircle(260,150,25);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();


ctx.beginPath();//3rd
drawCircle(275, 200,25);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();


ctx.beginPath();//5th
drawCircle(225, 190,25);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();


ctx.beginPath();//6th
drawCircle(225, 160,25);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();


ctx.beginPath();//2nd
drawCircle(280, 170,25);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();


ctx.beginPath();//4th
drawCircle(250, 205,25);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function drawCircle(x,y,r){
       ctx.beginPath();
       ctx.arc(x,y,r,0,2*Math.PI);
       ctx.stroke();
};

ctx.beginPath();
drawCircle(250,175,30); //inner circle
ctx.closePath();
ctx.fillStyle = "#904737";
ctx.fill();


function rectangleDraw(x,y,w,h){
	ctx.rect(x,y,w,h);
	ctx.stroke();
}
   ctx.beginPath();
	rectangleDraw(250,230,5,150);
   ctx.closePath();
   ctx.fillStyle = "green";
   ctx.fill();
	
