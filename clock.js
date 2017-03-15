var canvas = document.getElementById("canvas");//creating a canvas object from the HTML canvas element in the clockIndex.html
var ctx = canvas.getContext("2d");//creating a 2D object so that you are able to start drawing  
var radius = canvas.height / 2;//the height is used as the value of the radius. This makes the clock work no matter what the height of the canvas is
ctx.translate(radius, radius);//ctx.translate is a method that is used to remap the (0,0) position on the canvas. It uses the value of the radius to do this
radius = radius * 0.70//changing the radius size. 1 is 100% of the size of the radius (full size of the radius). 0.9 is 90% so the size of clock is now has a smaller radius
drawClock();//calling the drawClock function

function drawClock() {//drawing the clock
    ctx.arc(0, 0, radius, 0 , 2*Math.PI);//creating the circle. x,y,radius,startAngle,endAngle. Pi is used to work out the circumference of the circle. Pi is a property of Math
    ctx.fillStyle = "white";//colouring the clock white
    ctx.fill();//colour in the circle
};

function drawClock() {
    drawFace(ctx, radius); //draw the face of the clock. this is done by calling the drawFace function
};

<<<<<<< HEAD
function drawFace(ctx, radius) { // draw face of the clock (circle)
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI); //size of the circle 
    ctx.fillStyle = 'white'; // the cricle is filled with white colour
    ctx.fill();

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1; //the inner line of the circle will change the width
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333'; //the numbers of the clocks are coloured grey.
    ctx.fill();
=======
function drawFace(ctx, radius) {//creating a function called drawClock which draws the face of the clock
    var grad;//creating a variable for the gradient

    ctx.beginPath();//begins drawing the path - begins to draw the circle
    ctx.arc(0, 0, radius, 0, 2*Math.PI);//creating the circle. x,y,radius,startAngle,endAngle. Pi is used to work out the circumference of the circle. Pi is a property of Math
    ctx.fillStyle = 'white';//colouring the clock white
    ctx.fill();//colour in the circle

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);//creating a gradient. A radial gradient starts at the centre of a shape and goes out. The gradient is 95% and 105% of the radius of the clock
    grad.addColorStop(0, '#333');//creating colour stops for the inner middle and outer edges of the arc. Colour stops create 3D effects
    grad.addColorStop(0.5, 'white');//creating colour stops for the inner middle and outer edges of the arc. Colour stops create 3D effects
    grad.addColorStop(1, '#333');//creating colour stops for the inner middle and outer edges of the arc. Colour stops create 3D effects
    ctx.strokeStyle = grad;//the stroke style is set as the gradient
    ctx.lineWidth = radius*0.1;//the width of the line is set to 10% of the radius
    ctx.stroke();//drawing the circle

    ctx.beginPath();//begins drawing the path - begins to draw the centre of the clock
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);//creating the circle. x,y,radius (the radius is 10% of the total radius of the circle that creates the clock),startAngle,endAngle. Pi is used to work out the circumference of the circle. Pi is a property of Math 
    ctx.fillStyle = '#333';//filling the circle a certain colour
    ctx.fill();//colouring in the circle for the centre of the clock
>>>>>>> d193e5e68e8c9643fdb4d42b5106f22bfb79db97
};

function drawClock() {//creating a function called drawClock
    drawFace(ctx, radius);//calling the drawFace function
    drawNumbers(ctx, radius);//calling the drawNumbers function
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
    /* For hour, minute, second this is to work out the angles to hands should be 
    positioned on the clock face and to draw the length */
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

function drawHand(ctx, pos, length, width) {//creating a fucntion to create the hands of the clock
    ctx.beginPath();//begins drawing the path
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
};

//drawClock();
setInterval(drawClock, 1000); //Setting the speed of ticking by calling the drawClock function then setting the speed
