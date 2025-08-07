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
}

class Player {
  #maze;
  #position;
  constructor(maze) {
    if (maze instanceof Maze) {
      this.#maze = maze;
      this.#position = this.#maze.startingPoint;
    }
  }

  move(direction) {
    switch (direction) {
      case "right":
        if (this.#validMove(direction)) {
          this.#position.x++;
          this.#maze.location = this.position;
          return this.#position;
        } else {
          return "Blocked!";
        }

      case "left":
        if (this.#validMove(direction)) {
          this.#position.x--;
          this.#maze.location = this.#position;
          return this.position;
        } else {
          return "Blocked!";
        }

      case "up":
        if (this.#validMove(direction)) {
          this.#position.y--;
          this.#maze.location = this.#position;
          return this.position;
        } else {
          return "Blocked!";
        }

      case "down":
        if (this.#validMove(direction)) {
          this.#position.y++;
          this.#maze.location = this.#position;
          return this.position;
        } else {
          return "Blocked!";
        }

      default:
        break;
    }
  }

  #validMove(direction) {
    if (direction == "right") {
      if (
        this.#position.x + 1 == this.#maze.gridInfo.width ||
        this.#maze.maze[this.#position.y][this.#position.x + 1] == "#"
      ) {
        return false;
      }

      return true;
    } else if (direction == "left") {
      if (
        this.#position.x == 0 ||
        this.#maze.maze[this.#position.y][this.#position.x - 1] == "#"
      ) {
        return false;
      }

      return true;
    } else if (direction == "up") {
      if (
        this.position.y == 0 ||
        this.#maze.maze[this.#position.y - 1][this.#position.x] == "#"
      ) {
        return false;
      }

      return true;
    } else {
      if (
        this.position.y + 1 == this.#maze.gridInfo.height ||
        this.#maze.maze[this.#position.y + 1][this.#position.x] == "#"
      ) {
        return false;
      }

      return true;
    }
  }

  get position() {
    return this.#position;
  }
}

module.exports = { Maze, Player };
