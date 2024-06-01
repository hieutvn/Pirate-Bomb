const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

export { canvas, ctx, canvasWidth, canvasHeight};
