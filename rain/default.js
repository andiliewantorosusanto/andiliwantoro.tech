const canvas = document.getElementById("canvas");;
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

function clear() {
    ctx.fillStyle = '#000000'
    ctx.fillRect(0,0,canvas.width,canvas.height);
}