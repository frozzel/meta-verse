import  { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import PropTypes from 'prop-types';
import rocketModel from './models/tesseract_cube.glb';

function Kevin({ x, y, z }) {
  const kevinRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(rocketModel, (gltf) => {
      const { scene } = gltf;

      // Set initial rotation
      kevinRef.current.object3D.rotation.set(0, 0, 0);

      // Add the loaded model to the kevinRef object
      kevinRef.current.object3D.add(scene);

      // Animation function to rotate the cube
      const animate = () => {
        // Update rotation on both Y and X axes
        kevinRef.current.object3D.rotation.y += 0.01;
        kevinRef.current.object3D.rotation.x += 0.01;

        // Request the next animation frame
        requestAnimationFrame(animate);
      };

      // Start the animation
      animate();
    });
  }, []);

  return (
    <a-entity ref={kevinRef} position={`${x} ${y} ${z}`} scale=".02 .02 .02" rotation="0 45 0"></a-entity>
  );
}

Kevin.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
};

export default Kevin;
