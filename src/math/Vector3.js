
// class Vector2 {
//   constructor(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//   }

//   static fromArray(arr) {
//     return new Vector2(arr[0], arr[1]);
//   }

//   toArray() {
//     return [this.x, this.y];
//   }

//   add(v) {
//     return new Vector2(this.x + v.x, this.y + v.y);
//   }

//   subtract(v) {
//     return new Vector2(this.x - v.x, this.y - v.y);
//   }

//   multiply(scalar) {
//     return new Vector2(this.x * scalar, this.y * scalar);
//   }
// }

class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    static fromArray(arr) {
        return new Vector3(arr[0], arr[1], arr[2]);
    }
    
    toArray() {
        return [this.x, this.y, this.z];
    }
    
    add(v) {
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    
    subtract(v) {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    
    multiply(scalar) {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }
}

exports.Vector3 = Vector3;