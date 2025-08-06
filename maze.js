const maze = [
  ["P", " ", "#", " "],
  ["#", " ", "#", " "],
  ["#", " ", " ", " "],
  ["P", "#", "#", " "],
  ["#", " ", " ", " "],
  ["#", "E", "#", "#"],
];

class Maze {
  constructor() {
    this.maze = maze;
  }
}

let game = new Maze()

console.log(game.maze)