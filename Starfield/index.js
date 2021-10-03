let stars = [];

function draw() {
    clear()

    for(let i = 0 ;i < 10;i++) {
        stars.push(new Star(ctx,Math.random()*canvas.width,Math.random()*canvas.height))
    }

    update();
}

function update() {
    clear()

    stars.forEach(s => {
        s.draw();
        s.update();
    });

    requestAnimationFrame(update);
}

draw();




