import { Chip } from './models/Chip.js';

class Main {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");

    if(window.innerWidth >= 1920){
      this.wBoard = window.innerWidth * 0.6;
    } else {
      this.wBoard = window.innerWidth * 0.8;  
    }

    if(window.innerHeight >= 1080){
      this.hBoard = window.innerHeight * 0.6;
    } else {
      this.hBoard = window.innerHeight * 0.8;  
    }

    this.canvas.width = this.wBoard;
    this.canvas.height = this.hBoard;

    this.chip = new Chip(this.canvas, this.ctx);
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.chip.start();
    requestAnimationFrame(() => this.loop());
  }
}

(function() {
    const main = new Main();
    main.loop();
})();

