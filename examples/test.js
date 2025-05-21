const { Engine, Color, Vector2, Vector3 } = require('../src/index.js');
// should be const { Engine, Vector2} = require('@mrurbo/term2d');

const engine = new Engine(10, 10, 5, update);
let x = Math.round(engine.width / 2);
let y = Math.round(engine.height / 2);

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
    if (value <= min) {
        return max;
    }
    if (value >= max) {
        return min;
    }
    return value;
}

let snake = [];
let snakeLength = 1;
let snakeSpeed = 5;
let prev = "";
let key = "";


function update(tick, dt) {
    if (key === 'w' && prev !== 's') {
        y = (y - (snakeSpeed)*dt);
    }
    if (key === 's' && prev !== 'w') {
        y = (y + (snakeSpeed)*dt);
    }
    if (key === 'a' && prev !== 'd') {
        x = (x - (snakeSpeed)*dt);
    }
    if (key === 'd' && prev !== 'a') {
        x = (x + (snakeSpeed)*dt);
    }
}

engine.run(true);