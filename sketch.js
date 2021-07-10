let s
let scl = 20
let food

function setup() {
    createCanvas(600, 600)
    s = new Snake()
    frameRate(10)
    picklocation()
}

function picklocation() {
    let cols = floor(width / scl)
    let rows = floor(height / scl)
    food = createVector(floor(random(cols)), floor(random(rows)))
    food.mult(scl)
}

function draw() {
    background(51)
    // s.over()
    s.update()
    s.show()

    if (s.eat(food)) {
        picklocation()
    }

    fill(255, 10, 60)
    rect(food.x, food.y, scl, scl)
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        s.dir(0, -1)
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1)
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0)
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0)
    }
}   