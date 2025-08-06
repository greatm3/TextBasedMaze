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

  move(direction) {
    switch (direction) {
        case "right":
            this.position[1]++
            break;
        case "left":
            this.position[1]--
            break;
        case "up":
            this.position[0]--
            break;
        case "down":
            this.position[0]++
        default:
            break;
    }
  }
}

let game = new Maze();
let player = new Player(game);

player.move("right")

console.log(player);
