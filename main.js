const Maze = require("./Maze");
const Player = require("./Player");

let maze = new Maze();
let player = new Player(maze);

console.log(player.position);
console.log(player.move("right")); 
console.log(player.move("down"));
console.log(player.move("down"));
console.log(player.move("right"));
console.log(player.move("right"));
console.log(player.move("down"));
console.log(player.move("down"));
console.log(player.move("left"));
console.log(player.move("left"));
console.log(player.move("down"));
