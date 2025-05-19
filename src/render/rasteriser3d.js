const { Rasteriser } = require('./rasteriser.js');
const { Vector2 } = require('../math/Vector2.js');
const { Color } = require('../math/color.js');

const Rasteriser3D = {
    cube(buffer, v0, v1, v2, v3, v4, v5, v6, v7, color) {
        // Draw the cube using triangles
        // v0, v1, v2, v3... are all Vector3 Objects    
        // v0, v1, v2, v3 are the front face
        // pixelbuffer can only draw 2D shapes, so we need to project the 3D points to 2D with a projection matrix
        // For simplicity, we will use an orthographic projection
        // v0, v1, v2, v3 are the front face
        // v4, v5, v6, v7 are the back face
        // Draw front face
        Rasteriser.triangle(buffer, v0, v1, v2, new Color(255, 255, 255, 255));
        Rasteriser.triangle(buffer, v0, v2, v3, new Color(255, 0, 255, 255));

        
    },

    line(buffer, v0, v1, color) {
        Rasteriser.line(buffer, v0, v1, color);
    },

    triangle(buffer, v0, v1, v2, color) {
        // v0 v1 and v2 are all Vector3 objects
        // rasteriser only accepts vector2 objects
        // so we need to project the 3D points to 2D with a projection matrix
        // For simplicity, we will use an orthographic projection
        // v0, v1, v2 are the front face
        v0 = new Vector2(v0.x, v0.y);
        v1 = new Vector2(v1.x, v1.y);
        v2 = new Vector2(v2.x, v2.y);
        Rasteriser.triangle(buffer, v0, v1, v2, color);
    }

}

exports.Rasteriser3D = Rasteriser3D;