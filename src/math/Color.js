
class Color {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
}

exports.Color = Color;