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
      width: this.maze[0].length,
      height: this.maze.length,
    };

    this.startingPoint = {
      x: 0,
      y: 0,
    };
  }

  set location(position) {
    this.maze[position.y][position.x] = "x";
  }

  get location() {
    return this.maze;
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
        if (this.#validMove(direction)) {
          this.position.x++;
          this.#maze.location = this.position;
        } else {
          return "Blocked!"
        }
        
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
    if (direction == "right") {
      if (
        this.position.x + 1 == this.#maze.length ||
        this.#maze.maze[this.position.y][this.position.x + 1] == "#"
      ) {
        return false;
      }

      return true;
    }
  }

  get maze() {
    return this.#maze.location;
  }
}

let game = new Maze();
let player = new Player(game);

player.move("right");
console.log(player.move("right"))

console.log(player);
console.log(player.maze);
