class Star {
    constructor(x, y) {
        //coordinate
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x * 1.01, this.y * 1.01);
        ctx.stroke();
    }

    update() {
        this.x = this.x * 1.01;
        this.y = this.y * 1.01;
    }

    isOutOfBoundary(width, height) {
        return (this.x > width + 100) || (this.x < -width - 100) || (this.y > height + 100) || (this.y < -height - 100);
    }
}