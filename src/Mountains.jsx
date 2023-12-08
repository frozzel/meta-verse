/* eslint-disable react/prop-types */
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import rocketModel from './models/mountain.glb';
import Prototypes from 'prop-types';

function Mountain({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(rocketModel, (d) => {
        const entity = document.getElementById('mountain');
        entity.object3D.add(d.scene);
    })

    return(
        <a-entity id="mountain" position={`${x} ${y} ${z}`} scale="15 15 15" rotation="0 0 0"></a-entity>
    );
}

Mountain.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Mountain;