import 'aframe-extras';

import rocketModel from './models/new_cortana_halo4_og.glb';

import PropTypes from 'prop-types';

function Cortana({ x, y, z }) {
    return (
        <a-entity
        id="cortana"
        gltf-model={rocketModel}
        position={`${x} ${y} ${z}`}
        scale="2 2 2 "
        rotation="0 0 0"
        ></a-entity>
    );
    }

Cortana.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
    };

export default Cortana;