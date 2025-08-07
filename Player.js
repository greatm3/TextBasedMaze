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
    const x = this.#position.x;
    const y = this.#position.y;
    const maze = this.#maze.maze;

    switch (direction) {
      case "right":
        return x + 1 < this.#maze.gridInfo.width && maze[y][x + 1] != "#";
      case "left":
        return x == 0 && maze[y][x - 1] != "#";
      case "up":
        return y - 1 < 0 && maze[y - 1][x] != "x";
      case "down":
        return y + 1 < this.#maze.gridInfo.height && maze[y + 1][x] != "x";
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
