import rocketModel from './models/glow.glb';
import PropTypes from 'prop-types';
import ('aframe-extras');

function Glow({ x, y, z }) {

  return (
    <a-entity
      id="glow"
      gltf-model={rocketModel}
      position={`${x} ${y} ${z}`}
      scale="6 6 6"
      rotation="-90 0 0"
      animation-mixer="clip: Take 001; loop: repeat; timeScale: 1"
    ></a-entity>
  );
} 


Glow.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
};

export default Glow;
