var canvas = document.getElementById("canvas");//creating a canvas object from the HTML canvas element in the clockIndex.html
var ctx = canvas.getContext("2d");//creating a 2D object so that you are able to start drawing  
var radius = canvas.height / 2;//the height is used as the value of the radius. This makes the clock work no matter what the height of the canvas is
ctx.translate(radius, radius);//ctx.translate is a method that is used to remap the (0,0) position on the canvas. It uses the value of the radius to do this
radius = radius * 0.90//changing the radius size. 1 is 100% of the size of the radius (full size of the radius). 0.9 is 90% so the size of clock is now has a smaller radius
drawClock();//calling the drawClock function

function drawClock() {//drawing the face of the clock
    ctx.arc(0, 0, radius, 0 , 2*Math.PI);//creating the circle. x,y,radius,startAngle,endAngle. Pi is used to work out the circumference of the circle. Pi is a property of Math
    ctx.fillStyle = "white";//colouring the clock white
    ctx.fill();//colour in the circle
};

function drawClock() {
    drawFace(ctx, radius); //draw the face of the clock. this is done by calling the drawFace function
};

function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
};

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
};

function drawNumbers(ctx, radius) { // function draw numbers with var ctx and radius
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    };
};

function drawClock() {
    //Draws circle face of the clock
    drawFace(ctx, radius);
    //Draws numbers of clock
    drawNumbers(ctx, radius);
    //Draws hands of clock
    drawTime(ctx, radius);
};
//Time function to get exact time
function drawTime(ctx, radius){
    //variable to get set time
    var now = new Date();
    //variable to get the hours
    var hour = now.getHours();
    //variable to get the minutes
    var minute = now.getMinutes();
    //variable to get the seconds 
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
};

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
};

//drawClock();
setInterval(drawClock, 1000); //Setting the speed of ticking
