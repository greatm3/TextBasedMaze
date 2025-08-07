class Maze {
  constructor() {
    this.maze = [
      ["S", " ", "#", " "],
      ["#", " ", "#", " "],
      [" ", " ", " ", " "],
      [" ", "#", "#", " "],
      [" ", " ", " ", " "],
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

module.exports = Maze;
