import { Entity } from 'aframe-react';

import rocketModel from './models/tesseract_cube.glb';

function Kevin({ x, y, z }) {

  return (
    <Entity
      gltf-model={rocketModel}
      // ref={kevinRef}
      position={`${x} ${y} ${z}`}
      rotation="0 0 0"
      scale="0.02 0.02 0.02"
      animation__rotate="property: rotation; to: 360 360 0; loop: true; dur: 10000"
    ></Entity>
  );
}

export default Kevin;
