import { canvas, ctx } from "./canvas.js";
import { Complex } from "./Complex.js";

const iterations = 100;

function drawPoint(x: number, y: number) {
    const re = x / (canvas.height / 4);
    const im = y / (canvas.height / 4);

    const c = new Complex(re, im);
    var z = new Complex();

    var iteration = 0;

    while(z.inBound() && iteration < iterations) {
        iteration++;
        z = z.square().add(c);
    }
    
    if (iteration <= 1) return;

    if (iteration == iterations) {
        ctx.fillStyle = "black";
    } else {
        ctx.fillStyle = `hsl(${iteration * 5}, 100%, 50%)`;
    }

    ctx.fillRect(x + canvas.width / 2, y + canvas.height / 2, 1, 1);
}

export { drawPoint }