class Star {
    constructor(ctx,x,y,cx,cy) {
        this.ctx = ctx;
        
        //coordinate
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
        this.x = this.x * 1.01;
        this.y = this.y * 1.01;
    }

    
}
