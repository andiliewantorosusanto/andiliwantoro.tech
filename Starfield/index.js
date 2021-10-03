let stars = [];

function init() {
    clear();

    for(let i = 0 ;i < 100;i++) {
        stars.push(
            new Star(
                ctx,
                Math.random()*canvas.width-canvas.width/2,
                Math.random()*canvas.height-canvas.height/2
            )
        );
    }

    update();
}

function update() {
    clear();
    
    ctx.translate(canvas.width/2,canvas.height/2);
    stars.forEach(s => {
        s.draw();
        s.update();
    });
    ctx.translate(-canvas.width/2,-canvas.height/2);

    stars.push(
        new Star(
            ctx,
            Math.random()*canvas.width-canvas.width/2,
            Math.random()*canvas.height-canvas.height/2
        )
    );
    
    requestAnimationFrame(update);
}

init();




