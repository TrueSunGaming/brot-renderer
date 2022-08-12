import { canvas, ctx } from "./canvas.js";
import { drawPoint } from "./drawPoint.js";

var drawing = false;
var scale = 1;
var offsetX = 0;
var offsetY = 0;

function drawBrot() {
    drawing = true;
    ctx.resetTransform();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);
    console.time("drawing brot");
    for (let x = 0; x <= canvas.width; x++) {
        for (let y = 0; y <= canvas.height; y++) {
            drawPoint(x - canvas.width / 2, y - canvas.height / 2);
        }
    }
    console.timeEnd("drawing brot");
    drawing = false;
}

drawBrot();