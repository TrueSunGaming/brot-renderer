const canvas = document.querySelector("canvas") ?? document.createElement("canvas");
const ctx = canvas?.getContext("2d") ?? new CanvasRenderingContext2D;

export { canvas, ctx };