const Maze = require("./Maze");
const Player = require("./Player");

let maze = new Maze();
let player = new Player(maze);

// this is the answer to the maze that is in Maze.js

const rightDirections = ["right", "down", "down", "right", "right", "down", "down", "left", "left", "down"]

for (let direction of rightDirections) {
   console.log(player.move(direction).position)
} 
