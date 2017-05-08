var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250,250,200,0,2*Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.arc(180,180,30,0,2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(320,180,30,0,2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(250,250,130,0.3, -1.1*Math.PI);
ctx.lineWidth = 8;
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillText("Smile...!",200,480);

ctx.rect(100, 280, 50, 8);
ctx.stroke();
      
ctx.rect(350, 280, 50, 8);
ctx.stroke();