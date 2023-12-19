 /* eslint-disable react/prop-types */
import 'aframe-text-geometry-component'
import {Entity} from 'aframe-react';

function SalesforceLogo({x, y, z}) {
  return (<>
    <Entity 
        mixin="boldFont" 
        text-geometry="value: Salesforce; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 10; size: .5; height: 0.5; weight: bold; style: normal;" 
        position={`${x} ${y} ${z}`}
        material="color: #009EDB; opacity: 0.0; metalness: .8" 
        opacity='0.2'
        animation__opacity="property: components.material.material.opacity; dur: 3000; easing: linear; from: 0; to: 1; loop: false"
                            >
    </Entity>
  
    </>);
}


export default SalesforceLogo;