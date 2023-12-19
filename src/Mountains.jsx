/* eslint-disable react/prop-types */
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import rocketModel from './models/mountain.glb';
import {Entity} from 'aframe-react';


function Mountain({x, y, z}) {
    // const loader = new GLTFLoader();
    // loader.load(rocketModel, (d) => {
    //     const entity = document.getElementById('mountain');
    //     entity.object3D.add(d.scene);
    // })

    return(
        <Entity id="mountain" gltf-model={rocketModel} position={`${x} ${y} ${z}`} scale="15 15 15" rotation="0 0 0"></Entity>
    );
}


export default Mountain;