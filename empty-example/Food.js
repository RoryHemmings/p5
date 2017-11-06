/*
SNAKE SCRIPT
--------------------------
Javascript snake game v1.0
By: Rory Hemmings
--------------------------
 */

//construct object
function Food() {
  //initialize variables
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;

  //render food
  this.render = function() {
    fill(255, 0, 100);
    noStroke();
    rect(this.x, this.y, gridSize, gridSize);
  }

  //resets foods position
  this.reset = function() {
    //makes sure that food is generated on a valid grid space
    this.x = floor(random(0, (width-gridSize)/gridSize)) * gridSize;
    this.y = floor(random(0, (height-gridSize)/gridSize)) * gridSize;
  }
}
