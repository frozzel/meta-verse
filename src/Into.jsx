import 'aframe-text-geometry-component'
import {Entity} from 'aframe-react';

function Into() {


  return (<>
  
    <Entity 
        mixin="boldFont" 
        text-geometry="value: Dennis Hickox; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 10; size: 1.5; height: 0.5; weight: bold; style: normal;" 
        position='-7 4 -12'
        material="color: white; opacity: 0.0; metalness: .8" 
        opacity='0.2'
        // animation="property: components.material.material.color; type: color; dir: alternate; dur: 1000; easing: easeInSine; loop: true; to: #5F5"
        animation__opacity="property: components.material.material.opacity; dur: 3000; easing: linear; from: 0; to: 1; loop: false"
        // animation__yoyo="property: position; dir: alternate; dur: 3000; easing: easeInSine; loop: false; to: -7 4 -12"
                                 >
    </Entity>
    <Entity 
        mixin="boldFont" 
        text-geometry="value: Full Stack Developer; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 10; size: 1.5; height: 0.5; weight: bold; style: normal;" 
        position='-7 2 -12'
        material="color: white; opacity: 0.0; metalness: .8; " 

        opacity='0.2'
        // animation="property: components.material.material.color; type: color; dir: alternate; dur: 1000; easing: easeInSine; loop: true; to: #5F5"
        animation__opacity="property: components.material.material.opacity; dur: 3000; easing: linear; from: 0; to: 1; loop: false"
        // animation__yoyo="property: position; dir: alternate; dur: 3000; easing: easeInSine; loop: false; to: -7 2 -12"
                                 >
    </Entity>
 


    </>);
}


export default Into;