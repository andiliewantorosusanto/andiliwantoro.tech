class Raindrop {
    constructor(x, y, size, velocity) {
        //coordinate
        this.x = x;
        this.y = y;
        this.size = size;
        this.velocity = velocity;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.stroke();
    }

    update() {
        this.y = this.y + this.velocity + this.size;
        //this.velocity = this.velocity * this.velocity;
    }

    isOutOfBoundary(width, height) {
        return (this.x > width + 100) || (this.x < -width - 100) || (this.y > height + 100) || (this.y < -height - 100);
    }
}