import { World } from '../src/World/World.js';


function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
  
    // 1. Create an instance of the World app
    const world = new World(container);
    // We can access member variables from the instance
    console.log(world.camera);
    console.log(world.renderer);
    console.log(world.scene);
  
    // 2. Render the scene
    world.render();
  }

  main();