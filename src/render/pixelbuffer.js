
class PixelBuffer {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Uint8Array(width * height * 4);

    }

    clear() {
        for (let i = 0; i < this.data.length; i += 4) {
            this.data[i] = 0;     // R
            this.data[i + 1] = 0; // G
            this.data[i + 2] = 0; // B
            this.data[i + 3] = 255; // A
        }
        return this;
    }

    setPixel(x, y, color) {
        const index = (y * this.width + x) * 4;
        if (y >= this.height || x >= this.width || y < 0 || x < 0) {
            return this;
        }
        this.data[index] = color.r;
        this.data[index + 1] = color.g;
        this.data[index + 2] = color.b;
        this.data[index + 3] = color.a;
        return this;
    }

    render() {
        /* move cursor to the top-left without clearing the screen to reduce flicker */
        
        process.stdout.write('\x1b[H');
        let output = '';
        for (let y = 0; y < this.height; y = y + 2  ) {
            for (let x = 0; x < this.width; x++) {
                // make it so the upper half block character is used for better resilutions
                const index = (y * this.width + x) * 4;
                const r = this.data[index];
                const g = this.data[index + 1];
                const b = this.data[index + 2];
                const a = this.data[index + 3];
                const rgb1 = `\x1b[38;2;${r};${g};${b}m`;
                const index2 = ((y + 1) * this.width + x) * 4;
                const r2 = this.data[index2];
                const g2 = this.data[index2 + 1];
                const b2 = this.data[index2 + 2];
                const a2 = this.data[index2 + 3];
                const rgb2 = `\x1b[48;2;${r2};${g2};${b2}m`;
                const char = (r > 0 || g > 0 || b > 0) || (r2 > 0 || g2 > 0 || b2 > 0) ? '▀' : ' ';
                let color = "\x1b[0m ";

                color = `${rgb1}${rgb2}${char}\x1b[0m`;   
                output += color;
                // add a space between the two characters
                
            }
            output += '\n';
        }
        console.log(output);
    }
}

exports.PixelBuffer = PixelBuffer;