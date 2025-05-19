const { Engine, Color, Vector2, Vector3 } = require('../src/index.js');

const engine = new Engine(30, 30, 30, update);
let x = engine.width / 2;
let y = engine.height / 2;

function clamp(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

function loop(value, min, max) {
    if (value < min) {
        return max;
    }
    if (value > max) {
        return min;
    }
    return value;
}

let snake = [];
let snakeLength = 1;
let snakeSpeed = 5;
let food = new Vector2(10, 10);


function update(tick, dt) {
    const key = engine.keypress;
    console.log(snakeLength)
    if (key === 'w') {
        y = (y - (snakeSpeed)*dt);
    }
    if (key === 's') {
        y = (y + (snakeSpeed)*dt);
    }
    if (key === 'a') {
        x = (x - (snakeSpeed)*dt);
    }
    if (key === 'd') {
        x = (x + (snakeSpeed)*dt);
    }
    x = loop(x, 0, engine.width-1);
    y = loop(y, 0, engine.height-1);
    if (snake.length <= snakeLength) {
        snake.push(new Vector2(x, y));
    }
    for (let i = 0; i < snake.length; i++) {
        engine.setPixel(Math.floor(snake[i].x), Math.floor(snake[i].y), new Color(255, 255, 255, 255));
    }
    engine.setPixel(Math.floor(food.x), Math.floor(food.y), new Color(255, 0, 0, 255));
    if (Math.floor(x) === Math.floor(food.x) && Math.floor(y) === Math.floor(food.y)) {
        snakeLength++;
        food.x = Math.floor(Math.random() * engine.width);
        food.y = Math.floor(Math.random() * engine.height);
    }
}

engine.run(true);