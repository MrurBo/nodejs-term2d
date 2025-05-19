const { Vector2 } = require('../math/vector2');
const Rasteriser = {
    triangle(pixelbuffer, v0, v1, v2, color) {
        for (let x = 0; x < pixelbuffer.width; x++) {
            for (let y = 0; y < pixelbuffer.height; y++) {
                const p = new Vector2(x, y);
                const area = this._triangleArea(v0, v1, v2);
                const area0 = this._triangleArea(p, v1, v2);
                const area1 = this._triangleArea(v0, p, v2);
                const area2 = this._triangleArea(v0, v1, p);
                if (area === area0 + area1 + area2) {
                    pixelbuffer.setPixel(x, y, color);
                }
            }
        }
        this.line(pixelbuffer, v0, v1, color);
        this.line(pixelbuffer, v1, v2, color);
        this.line(pixelbuffer, v2, v0, color);
    },
    line(pixelbuffer, v0, v1, color) {
        const dx = Math.abs(v1.x - v0.x);
        const dy = Math.abs(v1.y - v0.y);
        const sx = (v0.x < v1.x) ? 1 : -1;
        const sy = (v0.y < v1.y) ? 1 : -1;
        let err = dx - dy;

        while (true) {
            pixelbuffer.setPixel(v0.x, v0.y, color); // Set pixel color to white
            if (v0.x === v1.x && v0.y === v1.y) break;
            const err2 = err * 2;
            if (err2 > -dy) {
                err -= dy;
                v0.x += sx;
            }
            if (err2 < dx) {
                err += dx;
                v0.y += sy;
            }
        }
    },
    _triangleArea(v0, v1, v2) {
        return Math.abs((v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y)) / 2.0);
    }
}

exports.Rasteriser = Rasteriser;