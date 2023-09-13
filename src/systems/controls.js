import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.tick = () => controls.update();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    return controls;
}

export { createControls };