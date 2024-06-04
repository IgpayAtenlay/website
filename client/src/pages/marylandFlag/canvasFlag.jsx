import { useRef, useEffect } from 'react';

export default function CanvasFlag() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    var width = canvas.width;
    var height = canvas.height;

    context.fillStyle = "black";

    context.fillRect(0, 0, width/2, height/2);
    context.fillRect(width/2, height/2, width/2, height/2);

    context.fillStyle = "yellow";

    yellow(0, 0);
    yellow(width/2, height/2);

    function yellow(x, y) {
      context.beginPath();
      context.moveTo(x, y + height/12);
      context.lineTo(x, y + height/2);
      context.lineTo(x + width/12, y + height/2);
      context.lineTo(x + width/12, y + height/6);
      context.fill();

      context.beginPath();
      context.moveTo(x + width/12, y);
      context.lineTo(x + width/12, y + height/6);
      context.lineTo(x + width/6, y + height/4);
      context.lineTo(x + width/6, y + height/12);
      context.fill();

      context.beginPath();
      context.moveTo(x + width/6, y);
      context.lineTo(x + width/6, y + height/12);
      context.lineTo(x + width/4, y + height/6);
      context.lineTo(x + width/4, y);
      context.fill();

      context.beginPath();
      context.moveTo(x + width/6, y + height/4);
      context.lineTo(x + width/6, y + height/2);
      context.lineTo(x + width/4, y + height/2);
      context.lineTo(x + width/4, y + height/3);
      context.fill();

      context.beginPath();
      context.moveTo(x + width/4, y + height/6);
      context.lineTo(x + width/4, y + height/3);
      context.lineTo(x + width/3, y + height/12*5);
      context.lineTo(x + width/3, y + height/4);
      context.fill();

      context.beginPath();
      context.moveTo(x + width/3, y);
      context.lineTo(x + width/3, y + height/4);
      context.lineTo(x + width/12*5, y + height/3);
      context.lineTo(x + width/12*5, y);
      context.fill();

      context.beginPath();
      context.moveTo(x + width/3, y + height/12*5);
      context.lineTo(x + width/3, y + height/2);
      context.lineTo(x + width/12*5, y + height/2);
      context.fill();

      context.beginPath();
      context.moveTo(x + width/12*5, y + height/3);
      context.lineTo(x + width/12*5, y + height/2);
      context.lineTo(x + width/2, y + height/2);
      context.lineTo(x + width/2, y + height/12*5);
      context.fill();
    }

    context.fillStyle = "red";

    context.fillRect(0, height/4*3, width/4, height/4);
    context.fillRect(width/4, height/2, width/4, height/4);
    context.fillRect(width/2, height/4, width/4, height/4);
    context.fillRect(width/4*3, 0, width/4, height/4);

    flower(width/4, height/4*3, 1, 1, 4);
    flower(width/4, height/4*3, -1, -1, 4);
    flower(width/4*3, height/4, 1, 1, 4);
    flower(width/4*3, height/4, -1, -1, 4);

    context.fillStyle = "white";

    flower(width/4, height/4*3, -1, 1, 4);
    flower(width/4, height/4*3, 1, -1, 4);
    flower(width/4*3, height/4, -1, 1, 4);
    flower(width/4*3, height/4, 1, -1, 4);

    function flower(x,y,xInverse,yInverse, scale) {
      var xScale = 12 * scale * xInverse;
      var yScale = 8 * scale * yInverse;
      var counterClockwise = xInverse*yInverse === -1;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + width/xScale*11, y);
      context.ellipse(x + width/xScale*10, y, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 - Math.PI/2*xInverse, Math.PI - Math.PI/2*yInverse, counterClockwise);
      context.lineTo(x + width/xScale*9, y + height/yScale);
      context.lineTo(x + width/xScale*9, y + height/yScale*2);
      context.ellipse(x + width/xScale*8, y + height/yScale*2, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 - Math.PI/2*xInverse, Math.PI/2 + Math.PI/2*xInverse, counterClockwise);
      context.lineTo(x + width/xScale*7, y + height/yScale);
      context.lineTo(x + width/xScale, y + height/yScale);
      context.lineTo(x + width/xScale, y + height/yScale*3);
      context.lineTo(x + width/xScale*2, y + height/yScale*3);
      context.ellipse(x + width/xScale*2, y + height/yScale*4, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 + Math.PI/2*xInverse, Math.PI - Math.PI/2*yInverse, counterClockwise);
      context.lineTo(x + width/xScale, y + height/yScale*5);
      context.lineTo(x + width/xScale, y + height/yScale*6);
      context.ellipse(x, y + height/yScale*6, width/xScale*xInverse, height/yScale*yInverse, 0, Math.PI/2 - Math.PI/2*xInverse, Math.PI - Math.PI/2*yInverse, counterClockwise);
      context.fill();
    }
  }, []);

  return <canvas ref={canvasRef} />;
};