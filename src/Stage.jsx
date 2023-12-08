/* eslint-disable react/prop-types */
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import rocketModel from './models/scene.glb';
import Prototypes from 'prop-types';


function Stage({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(rocketModel, (d) => {
        const entity = document.getElementById('stage');
        entity.object3D.add(d.scene);
    })

    return(
        <a-entity id="stage" position={`${x} ${y} ${z}`} scale="4 4 4" rotation="0 90 0"></a-entity>
    );
}

Stage.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}


export default Stage;