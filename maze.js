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

module.exports = Maze;
