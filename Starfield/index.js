let stars = [];

function createStars(i = 1) {
    for (let j = 1; j <= i; j++) {
        stars.push(
            new Star(
                Math.random() * canvas.width - canvas.width / 2,
                Math.random() * canvas.height - canvas.height / 2
            )
        );
    }
}

function init() {
    clear();

    createStars(100);

    update();
}

function update() {
    clear();

    ctx.translate(canvas.width / 2, canvas.height / 2);
    stars.forEach(s => {
        s.draw(ctx);
        s.update();
    });
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    stars = stars.filter(star => !star.isOutOfBoundary(canvas.width, canvas.height));

    createStars();

    requestAnimationFrame(update);
}

init();