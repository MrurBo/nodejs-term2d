# Documentation

## Engine

### `constructor(width, height, fps, update)`
Creates a new engine instance.
- **width**: Number of columns (pixels) in the terminal.
- **height**: Number of rows (pixels) in the terminal.
- **fps**: Frames per second (default: 30).
- **update**: Callback function called every frame with `(tick, dt)`.

### `add_shape(v0, v1, v2, color)`
Draws a filled triangle.
- **v0, v1, v2**: `Vector2` vertices of the triangle.
- **color**: `Color` object.

### `add_cube(v0, v1, v2, v3, v4, v5, v6, v7, color)`
Draws a cube using 8 `Vector3` vertices.
- **v0-v7**: `Vector3` vertices of the cube.
- **color**: `Color` object.

### `line(v0, v1, color)`
Draws a line between two points.
- **v0, v1**: `Vector2` points.
- **color**: `Color` object.

### `run(render = true)`
Starts the main loop. Calls the update callback and renders each frame.

### `render()`
Renders the current pixel buffer to the terminal.

### `setPixel(x, y, color)`
Sets the color of a single pixel.
- **x, y**: Coordinates.
- **color**: `Color` object.

### `key()`
Returns the last pressed key (as a string), then clears it.

---

## Vector2

### `constructor(x = 0, y = 0)`
Creates a 2D vector.

### `add(v)`, `subtract(v)`, `multiply(scalar)`
Vector math operations.

---

## Vector3

### `constructor(x = 0, y = 0, z = 0)`
Creates a 3D vector.

### `add(v)`, `subtract(v)`, `multiply(scalar)`
Vector math operations.

---

## Color

### `constructor(r, g, b, a)`
Creates a color.
- **r, g, b, a**: Red, green, blue, alpha (0-255).

## Examples

````javascript

````