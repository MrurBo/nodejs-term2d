# term2d

Term2d is a terminal-based 2D graphics engine with basic 3D rendering support. The project uses perlin noise for procedural effects and renders graphics using colored block characters in the terminal.

## Features

- **Terminal Rendering:** Draws pixels using a custom pixel buffer ([`PixelBuffer`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\render\pixelbuffer.js)).
- **2D Rasterization:** Renders triangles and lines using the rasteriser ([`Rasteriser`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\render\rasteriser.js)).
- **3D Projection:** Implements basic cube rendering via orthographic projection ([`Rasteriser3D`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\render\rasteriser3d.js)).
- **Math Utilities:** Provides vector math for 2D and 3D operations ([`Vector2`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\math\Vector2.js), [`Vector3`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\math\Vector3.js)) and color handling ([`Color`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\math\Color.js)).
- **Procedural Effects:** Uses Perlin noise (via the `perlin` package) to generate dynamic textures.

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Install the required dependencies:

    ```sh
    npm install
    ```

2. Run the engine demo:

    ```sh
    npm run run
    ```

This executes [test.js](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\test.js), which demonstrates the engine's capabilities.

## Controls

- **W/A/S/D:** Move the viewport.
- **Escape:** Exit the application.

## Project Structure

- **src/**
  - **math/**: Vector and color utilities.
    - [`Vector2.js`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\math\Vector2.js)
    - [`Vector3.js`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\math\Vector3.js)
    - [`Color.js`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\math\Color.js)
  - **render/**: Rendering modules.
    - [`pixelbuffer.js`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\render\pixelbuffer.js)
    - [`rasteriser.js`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\render\rasteriser.js)
    - [`rasteriser3d.js`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\render\rasteriser3d.js)
  - [`index.js`](c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\src\index.js): Engine setup and main loop.
- **test.js:** Entry point for running the demo.
- **package.json:** Project configuration and dependency management.
- **.gitignore:** Lists files/directories to ignore (e.g., `node_modules`).

## Example Code

Below is an example demonstrating how to create an engine instance, add shapes, and run the application:

````javascript
// filepath: c:\Users\NatasNefiodovas\Desktop\.private\Programs\2dpy\readme.md
// Example usage of Term2d engine
const { Engine } = require('./src/index.js');
const { Vector2 } = require('./src/math/Vector2.js');
const { Color } = require('./src/math/color.js');

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



## License

ISC License.