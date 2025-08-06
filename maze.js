class Maze {
  constructor() {
    this.maze = [
      ["P", " ", "#", " "],
      ["#", " ", "#", " "],
      ["#", " ", " ", " "],
      ["P", "#", "#", " "],
      ["#", " ", " ", " "],
      ["#", "E", "#", "#"],
    ];

    this.startingPoint = [0, 0];
  }
}

class Player {
  #maze;
  constructor(maze) {
    if (maze instanceof Maze) {
      this.#maze = maze;
      this.position = this.#maze.startingPoint;
    }
  }

  get;
}

let game = new Maze();
let player = new Player(game);

console.log(player);
