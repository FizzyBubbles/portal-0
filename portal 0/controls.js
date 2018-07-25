function keydown(e) {
    //console.log(e.keyCode);
    if (e.keyCode == 87) { //up
        char.up = true;
    }
    if (e.keyCode == 83) { //down
        char.down = true;
    }
    if (e.keyCode == 65) { //left
        char.left = true;
    }
    if (e.keyCode == 68) { //right
        char.right = true; 
    }
    if (e.keyCode == 32) { //space
        char.teleport();
    }
}

function keyup(e) {
    console.log(e.keyCode);
    if (e.keyCode == 87) { //up
        char.up = false; 
    }
    if (e.keyCode == 83) { //down
        char.down = false;
    }
    if (e.keyCode == 65) { //left
        char.left = false;
    }
    if (e.keyCode == 68) { //right
        char.right = false; 
    }
}

addEventListener('keydown', keydown);
addEventListener('keyup', keyup);