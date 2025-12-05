class Main {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");

    this.wBoard = window.innerWidth;
    this.hBoard = window.innerHeight;
  }
}

(function() {
    const main = new Main();
    console.log(main)
})();

