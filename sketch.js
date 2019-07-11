/*
    Code in the setup function will only be run once at the start of the animation
*/
function setup() {
    createCanvas(800, 400);
    for (var i = 0; i < 5; i++) {
        createShip();
    }
}

/*
    The draw function is executed once per frame.
*/
function draw() {
    // Update
    updateShips();
    // Render
    background(0, 0, 0);
    drawShips();
}
