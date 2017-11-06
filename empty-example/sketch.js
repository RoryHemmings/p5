
/*
MAIN SCRIPT
--------------------------
Javascript snake game v1.0
By: Rory Hemmings
--------------------------
 */

//declare all variables
var width;
var height;
var gridSize = 20;

var snake;
var startX;
var startY;

var food;

var scoreCounter;

//setup function
function setup() {
  width = 900;
  height = 900;
  createCanvas(width, height);

  frameRate(10);

  //initialize objects
  snake = new Snake(gridSize*2, gridSize*2);
  food = new Food();
  //position food
  food.reset();

  textSize(18);
}

//draw function called once per frame
function draw() {
  //set background color
  background(51);

  //update, render, and check if the snake is colliding with food
  snake.update();
  if (snake.eat(food.x, food.y)) {
    food.reset();
    snake.length++;
  }
  snake.render();

  //render food
  food.render();

  //update score counter
  fill(255);
  scoreCounter = snake.length;
  text("Length: " + scoreCounter, width - 120, gridSize*2);
}

function keyPressed() {
  //check for key input
  if(keyCode === UP_ARROW) {
    snake.setDirection(0, -1);
  } else if(keyCode === DOWN_ARROW) {
    snake.setDirection(0, 1);
  } else if(keyCode === LEFT_ARROW) {
    snake.setDirection(-1, 0);
  } else if(keyCode === RIGHT_ARROW) {
    snake.setDirection(1, 0);
  }
}
