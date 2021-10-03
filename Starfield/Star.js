class Star {
    constructor(ctx,x,y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#FFFFFF";
        this.ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    update() {
        this.x++;
        this.y++;
    }
}
