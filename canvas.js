var _a, _b;
const canvas = (_a = document.querySelector("canvas")) !== null && _a !== void 0 ? _a : document.createElement("canvas");
const ctx = (_b = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d")) !== null && _b !== void 0 ? _b : new CanvasRenderingContext2D;
export { canvas, ctx };
