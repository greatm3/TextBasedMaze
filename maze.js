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

    this.gridInfo = {
      height: this.maze.length,
      width: this.maze[0].length,
    };

    this.startingPoint = {
      x: 0,
      y: 0,
    };
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
        this.position.x++;
        break;
      case "left":
        this.position.x--;
        break;
      case "up":
        this.position.y--;
        break;
      case "down":
        this.position.y++;
      default:
        break;
    }
  }

  #validMove(direction) {
    if (this.position[0]) {
    }
  }
}

let game = new Maze();
let player = new Player(game);

player.move("right");
player.move("left");
player.move("up");
player.move("right");
player.move("down");
player.move("left");
player.move("left");
player.move("down");
player.move("down");
player.move("right");

console.log(player);
console.log(game.gridInfo);
