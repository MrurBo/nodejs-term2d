const { PixelBuffer} = require('./render/pixelbuffer');
const { Rasteriser } = require('./render/rasteriser.js');
const { Rasteriser3D } = require('./render/rasteriser3d.js');
const { Vector2 } = require('./math/Vector2.js');
const { Vector3 } = require('./math/Vector3.js');
var readline = require('readline');


class Engine {
    constructor(width, height, fps = 30, update = () => {}) {
        this.update = update;
        this.width = width || 80;
        this.height = height || 24;
        this.buffer = new PixelBuffer(this.width, this.height);
        this.fps = fps;
        this.tick = 0;
        this.keypress = "";
        this.dt = 0;
    }

    add_shape(v0, v1, v2, color) {
        Rasteriser.triangle(this.buffer, v0, v1, v2, color);
    }

    add_cube(v0, v1, v2, v3, v4, v5, v6, v7, color) {
        Rasteriser3D.cube(this.buffer, v0, v1, v2, v3, v4, v5, v6, v7, color);
    }

    line(v0, v1, color) {
        Rasteriser.line(this.buffer, v0, v1, color);
    }
    
    run(render=true) {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.on('keypress', (chunk, key) => {
            if (key) {
                this.keypress = key.name;
                if (key.name === 'escape') {
                    console.clear();
                    console.log('Exiting...');
                    process.exit();
                }
                this.keypress = key.sequence;
            }
            // console.log(key);
        });
        console.clear();
        let before = Date.now()/1000;
        setInterval(() => {
            this.dt = Date.now()/1000 - before;
            this.update(this.tick, this.dt);
            if (render) {
                this.render();
            }
            // this.render();
            this.buffer.clear()
            this.tick++;
            before = Date.now()/1000;
        }, 1000 / this.fps);
    }

    render() {
        this.buffer.render();
    }

    setPixel(x, y, color) {
        if (x >= this.width || y >= this.height || x < 0 || y < 0) {
            throw new Error('Index out of bounds');
        }
        this.buffer.setPixel(x, y, color);
    }

    key() {
        const key = this.keypress;
        this.keypress = "";
        return key; 
        // console.log(cursor)
        // return row, col;
    }

}

exports.Engine = Engine;
exports.Vector2 = Vector2;
exports.Vector3 = Vector3;
exports.Color = require('./math/color.js').Color;