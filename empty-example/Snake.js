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
  this.length = 0;
  this.tail = [];

  //update function called once per frame
  this.update = function() {

    //update the position of all the snake array objects
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.length >= 1) {
      this.tail[this.length - 1] = createVector(this.x, this.y);
    }

    //update position
    this.x += this.xVel * gridSize;
    this.y += this.yVel * gridSize;

    for (var i of this.tail) {
      if(i.x === this.x && i.y === this.y) {
        this.die();
      }
    }

    //check that snake is in play space, and if it is not than kill it
    if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
      this.die();
    }
  };

  //render snanke
  this.render = function() {
    fill(255);

    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, gridSize-2, gridSize-2);
    }

    rect(this.x, this.y, gridSize-2, gridSize-2);
  };

  //check if snake is colliding with food
  this.eat = function(x, y) {
    var d = dist(this.x, this.y, x, y);
    if (d < 1) {
      this.length++;
      return true;
    }
    return false;
  }

  //changes moving direction of snake
  this.setDirection = function(x, y) {
    this.xVel = x;
    this.yVel = y;
  };

  //kills (resets) snake
  this.die = function() {
    this.x = spawnX;
    this.y = spawnY;
    this.xVel = 0;
    this.yVel = 0;
    this.length = 0;
    this.tail = [];
  };
}
