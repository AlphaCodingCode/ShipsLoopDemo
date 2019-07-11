var img;
var ships = [];
function preload() {
  img = loadImage('spaceshipsprite.png');
}


class Ship {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.dir = 0;
    }

    update() {
        this.y++;
    }

    show() {
        image(img, this.x, this.y, 50, 50);
    }
}


function createShip() {
    if (ships.length > 0) {
        // every 12 ships need to get put in a new line
        let y = Math.floor(ships.length / 12) * 50;
        let x = (ships.length % 12) * 50 + 100;
        ships.push(new Ship(x, -y));
    } else {
        ships.push(new Ship(100, 0));
    }
}


function updateShips() {
    for (let i = 0; i < ships.length; i++) {
        ships[i].update();
    }
}

function drawShips() {
    for (let i = 0; i < ships.length; i++) {
        ships[i].show();
    }
}
