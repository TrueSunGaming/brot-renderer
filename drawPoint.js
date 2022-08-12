import { canvas, ctx } from "./canvas.js";
import { Complex } from "./Complex.js";
const iterations = 250;
function drawPoint(x, y) {
    const re = x / (canvas.height / 4);
    const im = y / (canvas.height / 4);
    const c = new Complex(re, im);
    var z = new Complex();
    var iteration = 0;
    while (z.inBound() && iteration < iterations) {
        iteration++;
        z = z.square().add(c);
    }
    if (iteration == iterations) {
        ctx.fillStyle = "black";
    }
    else if (iteration <= 1) {
        ctx.fillStyle = "white";
    }
    else {
        ctx.fillStyle = `hsl(${iteration * 5}, 100%, 50%)`;
    }
    ctx.fillRect(x + canvas.width / 2, y + canvas.height / 2, 1, 1);
}
export { drawPoint };
