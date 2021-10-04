let raindrops = [];

function createRaindrops(i = 1) {
    for (let j = 1; j <= i; j++) {
        raindrops.push(
            new Raindrop(
                Math.random() * canvas.width,
                0,
                Math.random() * 10,
                5
            )
        )
    }
}

function init() {
    clear();
    update();
}

function update() {
    clear();

    raindrops.forEach(s => {
        s.draw(ctx);
        s.update();
    });

    raindrops = raindrops.filter(raindrop => !raindrop.isOutOfBoundary(canvas.width, canvas.height));

    createRaindrops();

    requestAnimationFrame(update);
}

init();