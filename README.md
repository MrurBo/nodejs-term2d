# term2d

Term2d is a terminal-based 2D graphics engine with basic 3D rendering support. The project uses perlin noise for procedural effects and renders graphics using colored block characters in the terminal.

## Features

- **Terminal Rendering:** Draws pixels using a custom pixel buffer.
- **2D Rasterization:** Renders triangles and lines using the rasteriser.
- **3D Projection:** Implements basic cube rendering via orthographic projection .
- **Math Utilities:** Provides vector math for 2D and 3D operations: `Vector2`, `Vector3` and color handling (`Color`).

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Install the package:

    ```sh
    npm install @mrurbo/term2d
    ```

You can see the example in examples/test.js

## Controls

- **Escape:** Exit the application.

## Project Structure

- **src/**
  - **math/**: Vector and color utilities.
    - `Vector2.js`
    - `Vector3.js`
    - `Color.js`
  - **render/**: Rendering modules.
    - `pixelbuffer.js`
    - `rasteriser.js`
    - `rasteriser3d.js`
  - `index.js`: Engine setup and main loop.

## Example Code

Below is an example demonstrating how to create an engine instance, add shapes, and run the application:

````javascript
// Example usage of Term2d engine
const { Engine, Vector2, Color} = require('@mrurbo/term2d');

const engine = new Engine(60, 30, 30, (tick, dt) => {
    // Draw a moving triangle that shifts based on tick count
    engine.add_shape(
        new Vector2(10 + tick % 20, 5),
        new Vector2(15 + tick % 20, 20),
        new Vector2(5 + tick % 20, 20),
        new Color(255, 0, 0, 255)
    );
});

engine.run();
````

# Documentation

see `examples/test.js`

## License

ISC License.