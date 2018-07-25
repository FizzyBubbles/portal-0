var char;

function setup() {
   createCanvas(500, 500);
   char = new player(width / 2, height / 2);
}

function draw() {
  background(0);
  char.nOne += char.nInc;
  char.nTwo += char.nInc;
	char.distChar += char.fillRate;
	if (mouseIsPressed) {
		//tries to find the mid point
		var y = mouseY - char.y; 
		var x = mouseX - char.x;
		vara length = Math.sqrt((y * y) + (x * x));
		if (length <= char.distChar) {
			char.tpX = mouseX;
			char.tpY = mouseY;
		} else {
			char.tpX = ((char.distChar / length) * (mouseX - char.x));
			char.tpY = ((char.distChar / length) * (mouseY - char.y));
		}
		console.log((char.distChar / length) * (mouseX - char.x));
		console.log((char.distChar / length) * (mouseY - char.y));
		char.RTT = true;
  }
  char.control();
  char.collisionBox();
  char.update();
  char.show();
	
}
