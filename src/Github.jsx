 /* eslint-disable react/prop-types */
//  import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
 import rocketModel from './models/github_octocat.glb';
import PropTypes from 'prop-types';

function Github({x, y, z}) {
    // const loader = new GLTFLoader();
    // loader.load(rocketModel, (d) => {
    //     const entity = document.getElementById('github');
    //     entity.object3D.add(d.scene);
    // })

    return(
        <a-entity id="github" gltf-model={rocketModel} position={`${x} ${y} ${z}`} scale="1 1 1" rotation="0 0180 0"></a-entity>
    );
}
Github.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  };

export default Github;
