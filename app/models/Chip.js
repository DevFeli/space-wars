export class Chip{
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.x = canvas.width / 2 - 15;
        this.y = canvas.height - 70;
        this.width = 60;
        this.height = 60;
        this.speed = 2;

        this.img = new Image();
        this.img.src = "./app/assets/sprites/ship/large-chip-1.png";

        this.keys = {};

        this.moves();
    }
    
    draw(){
        const ctx = this.ctx;

        if (this.img.complete && this.img.naturalWidth > 0) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else {
            // Fallback: desenha retângulo para mostrar onde ela estaria
            ctx.fillStyle = "white";
            ctx.fillRect(this.x, this.y, this.width, this.height);

            ctx.strokeStyle = "red";
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }

    moves(){
        document.addEventListener("keydown", (e)=> this.keys[e.key] = true);
        document.addEventListener("keyup",   (e)=> this.keys[e.key] = false);
    }

    moving(){
        if(this.keys["ArrowLeft"])  this.x -= this.speed;
        if(this.keys["ArrowRight"]) this.x += this.speed;

        if(this.x < 0) this.x = 0;

        if(this.x + this.width > this.canvas.width) this.x = this.canvas.width - this.width;
    }

    start(){
        this.draw();
        this.moving();
    }
}