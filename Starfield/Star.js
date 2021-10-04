class Star {
    constructor(ctx, x, y, cx, cy) {
        this.ctx = ctx;

        //coordinate
        this.x = x;
        this.y = y;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#FFFFFF";
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x * 1.01, this.y * 1.01);
        this.ctx.stroke();
    }

    update() {
        this.x = this.x * 1.01;
        this.y = this.y * 1.01;
    }

    isOutOfBoundary(width, height) {
        return (this.x > width + 100) || (this.x < -width - 100) || (this.y > height + 100) || (this.y < -height - 100);
    }
}