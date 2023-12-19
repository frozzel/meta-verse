/* eslint-disable react/prop-types */
import rocketModel from './models/scene.glb';
import {Entity} from 'aframe-react';


function Stage({x, y, z}) {

    return(
        <Entity id="stage" gltf-model={rocketModel} position={`${x} ${y} ${z}`} scale="4 4 4" rotation="0 90 0"></Entity>
    );
}



export default Stage;