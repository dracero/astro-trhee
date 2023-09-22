import { createCamera } from '../components/camera.js';
//import { createMeshGroup } from '../components/meshGroup.js';
import { createScene } from '../components/scene.js';
import { createLights } from '../components/lights.js';
import { createRenderer } from '../systems/renderer.js';
import { Resizer } from '../systems/Resizer.js';
import { Loop } from '../systems/Loop.js';
import { createControls } from '../systems/controls.js';
import { loadBirds } from '../components/birds/birds.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    const { ambientLight, mainLight } = createLights();
    //const meshGroup = createMeshGroup();
    scene.add(ambientLight, mainLight)//, meshGroup);
    const controls = createControls(camera, renderer.domElement);
    loop.updatables.push(controls)//, meshGroup);

    //loop.updatables.push(cube);
    loop.updatables.push(controls);   

    const resizer = new Resizer(container, camera, renderer);
    
  }

  render() {
    // draw a single frame
    //renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }

  async init() {
    // asynchronous setup here
    // load bird models 
    const { parrot } = await loadBirds();
    scene.add(parrot);
  }

}

export { World };