/*
SNAKE SCRIPT
--------------------------
Javascript snake game v1.0
By: Rory Hemmings
--------------------------
 */

//construct object
function Snake(spawnX, spawnY) {
  //initialize all variables
  this.x = spawnX;
  this.y = spawnY;
  this.xVel = 0;
  this.yVel = 0;
  this.length = 1;
  this.tail = [];

  //update function called once per frame
  this.update = function() {
    //update position
    this.x += this.xVel * gridSize;
    this.y += this.yVel* gridSize;

    //check that snake is in play space, and if it is not than kill it
    if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
      this.die();
    }
  };

  //render snanke
  this.render = function() {
    fill(255);
    rect(this.x, this.y, gridSize, gridSize);
  };

  //check if snake is colliding with food
  this.eat = function(x, y) {
    var d = dist(this.x, this.y, x, y);
    if (d < 1) {
      return true;
    }
    return false;
  }

  //changes moving direction of snake
  this.setDirection = function(x, y) {
    this.xVel = x;
    this.yVel = y;
  };

  //increases length of snake
  this.addHead = function() {
    this.length++;
  };

  //kills (resets) snake
  this.die = function() {
    this.length = 1;
    this.x = spawnX;
    this.y = spawnY;
    this.xVel = 0;
    this.yVel = 0;
  };
}
