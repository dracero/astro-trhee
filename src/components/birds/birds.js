import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadBirds() {
    const loader = new GLTFLoader();
    
    const parrotData = await loader.loadAsync('Parrot.glb');
    
    console.log('Squaaawk!', parrotData);

    const parrot = setupModel(parrotData);
    
    return { parrot }
}

export { loadBirds };