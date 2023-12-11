 /* eslint-disable react/prop-types */
//  import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
 import rocketModel from './models/cloud_high_poly.glb';
import PropTypes from 'prop-types';

function Cloud({x, y, z}) {
    // const loader = new GLTFLoader();
    // loader.load(rocketModel, (d) => {
    //     const entity = document.getElementById('cloud');
    //     entity.object3D.add(d.scene);
    // })

    return(
        <a-entity id="cloud" gltf-model={rocketModel} position={`${x} ${y} ${z}`} scale="1 1 1" rotation="0 0 0"></a-entity>
    );
}
Cloud.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  };

export default Cloud;
