 /* eslint-disable react/prop-types */
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import rocketModel from './models/einstein_salesforce_tower.glb';
import Prototypes from 'prop-types';

function Salesforce({x, y, z}) {
    const loader = new GLTFLoader();
    loader.load(rocketModel, (d) => {
        const entity = document.getElementById('salesforce');
        entity.object3D.add(d.scene);
    })

    return(
        <a-entity id="salesforce" position={`${x} ${y} ${z}`} scale="1 1 1" rotation="0 100 0"></a-entity>
    );
}

Salesforce.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number
}

export default Salesforce;