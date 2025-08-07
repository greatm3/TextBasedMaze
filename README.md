# Text Based Maze

- This is my first official project with Javascript, to test my skills so far, it's not much, just baby steps...
- Didn't do it with the help of AI(source: trust me bro. :) but fr, i didn't)

## Try it out

The maze is quite simple to understand

```js
const maze = [
   ["S", " ", "#", " "],
   ["#", " ", "#", " "],
   [" ", " ", " ", " "],
   [" ", "#", "#", " "],
   [" ", " ", " ", " "],
   ["#", "E", "#", "#"],
]
```
- `"S"` is the Starting point of the player
- `"#"` is a maze wall or blockade
- `" "` an empty space, which stands for the passage
- `"E"` is the End of the maze

and the `","`, for separating the array elements :)

You create a new game state by:

```js
// main.js(or anything you choose to rename the file to, depending on your mood, idc)

const maze = new Maze()
const player = new Player(maze) 
```

* the `Player Class` has a lot of methods and properties, but most of them are private, the only public is the `move` and method and `position` property.

```js
// this is the answer to the maze that is in Maze.js

const rightDirections = ["right", "down", "down", "right", "right", "down", "down", "left", "left", "down"]

for (let direction of rightDirections) {
   console.log(player.move(direction))
} 
```

* logging `player.move(direction)` to the console will return the `position` object, containing the `isDone` and `position` properties.
```js
console.log(player.move("right"))
// -> { isDone: false, position: { x: 1, y: 0 } }
```

- Please this is my first real Js try out, any corrections are welcome, will update it as i continue to learn new concepts.