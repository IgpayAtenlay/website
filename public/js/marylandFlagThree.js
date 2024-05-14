var canvas = document.getElementById("mf-3-flag");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

ctx.fillStyle = "black";

ctx.fillRect(0, 0, width/2, height/2);
ctx.fillRect(width/2, height/2, width/2, height/2);

ctx.fillStyle = "yellow";

yellow(0, 0);
yellow(width/2, height/2);

function yellow(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y + height/12);
    ctx.lineTo(x, y + height/2);
    ctx.lineTo(x + width/12, y + height/2);
    ctx.lineTo(x + width/12, y + height/6);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + width/12, y);
    ctx.lineTo(x + width/12, y + height/6);
    ctx.lineTo(x + width/6, y + height/4);
    ctx.lineTo(x + width/6, y + height/12);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + width/6, y);
    ctx.lineTo(x + width/6, y + height/12);
    ctx.lineTo(x + width/4, y + height/6);
    ctx.lineTo(x + width/4, y);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + width/6, y + height/4);
    ctx.lineTo(x + width/6, y + height/2);
    ctx.lineTo(x + width/4, y + height/2);
    ctx.lineTo(x + width/4, y + height/3);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + width/4, y + height/6);
    ctx.lineTo(x + width/4, y + height/3);
    ctx.lineTo(x + width/3, y + height/12*5);
    ctx.lineTo(x + width/3, y + height/4);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + width/3, y);
    ctx.lineTo(x + width/3, y + height/4);
    ctx.lineTo(x + width/12*5, y + height/3);
    ctx.lineTo(x + width/12*5, y);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + width/3, y + height/12*5);
    ctx.lineTo(x + width/3, y + height/2);
    ctx.lineTo(x + width/12*5, y + height/2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + width/12*5, y + height/3);
    ctx.lineTo(x + width/12*5, y + height/2);
    ctx.lineTo(x + width/2, y + height/2);
    ctx.lineTo(x + width/2, y + height/12*5);
    ctx.fill();
}

ctx.fillStyle = "red";

ctx.fillRect(0, height/4*3, width/4, height/4);
ctx.fillRect(width/4, height/2, width/4, height/4);
ctx.fillRect(width/2, height/4, width/4, height/4);
ctx.fillRect(width/4*3, 0, width/4, height/4);

flower(width/4, height/4*3, 1, 1, 4);
flower(width/4, height/4*3, -1, -1, 4);
flower(width/4*3, height/4, 1, 1, 4);
flower(width/4*3, height/4, -1, -1, 4);

ctx.fillStyle = "white";

flower(width/4, height/4*3, -1, 1, 4);
flower(width/4, height/4*3, 1, -1, 4);
flower(width/4*3, height/4, -1, 1, 4);
flower(width/4*3, height/4, 1, -1, 4);

function flower(x,y,xInverse,yInverse, scale) {
    var xScale = 12 * scale * xInverse;
    var yScale = 8 * scale * yInverse;
    var counterClockwise = xInverse*yInverse == -1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width/xScale*11, y);
    ctx.ellipse(x + width/xScale*10, y, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 - Math.PI/2*xInverse, Math.PI - Math.PI/2*yInverse, counterClockwise);
    ctx.lineTo(x + width/xScale*9, y + height/yScale);
    ctx.lineTo(x + width/xScale*9, y + height/yScale*2);
    ctx.ellipse(x + width/xScale*8, y + height/yScale*2, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 - Math.PI/2*xInverse, Math.PI/2 + Math.PI/2*xInverse, counterClockwise);
    ctx.lineTo(x + width/xScale*7, y + height/yScale);
    ctx.lineTo(x + width/xScale, y + height/yScale);
    ctx.lineTo(x + width/xScale, y + height/yScale*3);
    ctx.lineTo(x + width/xScale*2, y + height/yScale*3);
    ctx.ellipse(x + width/xScale*2, y + height/yScale*4, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 + Math.PI/2*xInverse, Math.PI - Math.PI/2*yInverse, counterClockwise);
    ctx.lineTo(x + width/xScale, y + height/yScale*5);
    ctx.lineTo(x + width/xScale, y + height/yScale*6);
    ctx.ellipse(x, y + height/yScale*6, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 - Math.PI/2*xInverse, Math.PI - Math.PI/2*yInverse, counterClockwise);
    ctx.fill();
}