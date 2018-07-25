var char;

function setup() {
    createCanvas(500, 500);
    char = new player(width / 2, height / 2);
}

function draw() {
    background(0);
    char.nOne += char.nInc;
    char.nTwo += char.nInc;

    if (mouseIsPressed) {
        char.tpX = mouseX;
        char.tpY = mouseY;
        char.RTT = true;
    }
    char.control();
    char.collisionBox();
    char.update();
    char.show();

}