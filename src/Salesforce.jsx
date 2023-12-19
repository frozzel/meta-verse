 /* eslint-disable react/prop-types */
import rocketModel from './models/einstein_salesforce_tower.glb';
import {Entity} from 'aframe-react';

function Salesforce({x, y, z}) {
    return(
        <Entity id="salesforce" gltf-model={rocketModel} position={`${x} ${y} ${z}`} scale="1 1 1" rotation="0 100 0"></Entity>
    );
}


export default Salesforce;