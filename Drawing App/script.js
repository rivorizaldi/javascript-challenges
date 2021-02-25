// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");
const a = document.getElementById("a");
const lineWidth = document.getElementById("line-width");
const rText = document.getElementById("r-text");
const gText = document.getElementById("g-text");
const bText = document.getElementById("b-text");
const aText = document.getElementById("a-text");
const lineWidthText = document.getElementById("line-width-text");

rText.innerHTML = r.value;
gText.innerHTML = g.value;
bText.innerHTML = b.value;
aText.innerHTML = a.value;
lineWidthText.innerHTML = lineWidth.value;

r.addEventListener("input", (e) => (rText.innerHTML = e.target.value));
g.addEventListener("input", (e) => (gText.innerHTML = e.target.value));
b.addEventListener("input", (e) => (bText.innerHTML = e.target.value));
a.addEventListener("input", (e) => (aText.innerHTML = e.target.value));
lineWidth.addEventListener(
  "input",
  (e) => (lineWidthText.innerHTML = e.target.value)
);

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  drawLine(
    context,
    x,
    y,
    e.offsetX,
    e.offsetY,
    r.value,
    g.value,
    b.value,
    a.value,
    lineWidth.value
  );
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(
      context,
      x,
      y,
      e.offsetX,
      e.offsetY,
      r.value,
      g.value,
      b.value,
      a.value,
      lineWidth.value
    );
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

function drawLine(context, x1, y1, x2, y2, r, g, b, a, lineWidth) {
  console.log(x1, y1, x2, y2);
  context.beginPath();
  context.strokeStyle = `rgba(${r},${g},${b},${a})`;
  context.lineWidth = lineWidth;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
