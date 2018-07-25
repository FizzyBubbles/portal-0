function player(x, y) {
    this.r = 10;
    this.x = x;
    this.y = y;
    this.maxR = 15;
    this.velX = 0;
    this.velY = 0;
    this.accel = 0.7;
    this.maxSpeed = 7.5;
    this.friction = 0.1;
    this.up = false; 
    this.down = false;
    this.left = false;
    this.right = false;
    this.nInc = 0.1;
    this.nOne = 5;
    this.nTwo = 500;
    this.rX = 10;
    this.rY = 10;
    this.tpX;
    this.tpY;
    this.RTT = false;

    this.show = function () {
        stroke(255);
        //ellipse(this.x, this.y, this.r, this.r);
        ellipse(this.x, this.y, this.rX, this.rY);
        if (this.RTT) {
            stroke(255, 0, 0);
            ellipse(this.tpX, this.tpY, noise(this.nOne) * 9, noise(this.nTwo) * 9);
        }
    }

    this.teleport = function () {
        if (this.RTT) {
            this.x = this.tpX;
            this.y = this.tpY;
            this.RTT = false;
        }
    }

    this.collisionBox = function () {
        if (this.x > width - this.r/2) { //right
            this.x = this.r;
            console.log(this.x);
        }
        if (this.x < this.r) { //left
            this.x = width - this.r / 2;
        }
        if (this.y > height - this.r/2) { //down
            this.y = this.r;
        }
        if (this.y < this.r) { //up
            this.y = height - this.r / 2;
        }
    }

    this.control = function () {
        if (this.up) {
            if (this.velY < this.maxSpeed) {
                this.velY += -this.accel;
            }
        }
        if (this.down) {
            if (this.velY < this.maxSpeed) {
                this.velY += this.accel;
            }
        }
        if (this.left) {
            if (this.velX <= this.maxSpeed) {
                this.velX += -this.accel;
            }
        }
        if (this.right) {
            if (this.velX <= this.maxSpeed) {
                this.velX += this.accel;
            }
        }

 
        if (this.left && this.down || this.left && this.up || this.up && this.right || this.up && this.down) { //
            this.velX *= 0.9;
            this.velY *= 0.9;
        }


        if (!this.up && !this.down) { //friction x
            if (this.velY > 0) {
                this.velY += this.velY * -this.friction;
            }
            if (this.velY < 0) {
                this.velY += this.velY * -this.friction;
            }
        }


        if (!this.left && !this.right) { //friction y
            if (this.velX > 0) {
                this.velX += this.velX * -this.friction;
            }
            if (this.velX < 0) {
                this.velX += this.velX * -this.friction;
            }
        }

        if (this.velX > this.maxSpeed) { //overflow control
            this.velX = this.maxSpeed;
        }
        if (this.velX < -this.maxSpeed) {
            this.velX = -this.maxSpeed;
        }
        if (this.velY > this.maxSpeed) {
            this.velY = this.maxSpeed;
        }
        if (this.velY < -this.maxSpeed) {
            this.velY = -this.maxSpeed;
        }
    }

    this.update = function () {
        this.x += this.velX;
        this.y += this.velY;
        this.rX = this.velX / (this.maxR * (this.maxSpeed - 5)) + 5;
        this.rY = this.velY / (this.maxR * (this.maxSpeed - 5)) + 5;
        //console.log(this.x, this.y);
    }
}