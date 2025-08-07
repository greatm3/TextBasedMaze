const Maze = require("./Maze.js")

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
    if (this.#isValidMove(direction)) {
      switch (direction) {
        case "right":
          this.#position.x++;
        case "left":
          this.#position.x--;
        case "up":
          this.#position.y--;
        case "down":
          this.#position++;
      }

      this.#maze.location = this.position;
      return this.position;
    }
    return "Blocked!";
  }

  #isValidMove(direction) {

    const x = this.#position.x
    const y = this.#position.y
    const maze = this.#maze

    switch(direction) {
        case "right": return 

    }

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

  #isDone() {
    if (this.#maze.maze[this.#position.y][this.#position.x] == "E") {
      return true;
    }

    return false;
  }

  get position() {
    return { isDone: this.#isDone(), position: this.#position };
  }
}

module.exports = Player;
