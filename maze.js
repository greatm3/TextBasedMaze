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
  }
}

class Player {
  constructor(maze) {
    if (maze instanceof Maze) {
      this.maze = maze;
    }
  }
}

let game = new Maze();
let player = new Player(game);

console.log(player.maze);
