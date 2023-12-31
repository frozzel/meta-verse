/* eslint-disable react/prop-types */
import  { useEffect } from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import rocketModel from './models/rocket.glb';
import {Entity} from 'aframe-react';


function Rocket({x, y, z}) {

useEffect(() => {
    const loader = new GLTFLoader();
    const rocketEntity = document.getElementById('rocket');

    if (rocketEntity) {
      loader.load(rocketModel, (d) => {
        rocketEntity.object3D.add(d.scene);


        // Position Animation (circular path)
        rocketEntity.setAttribute('animation__position', {
          property: 'position',
          dur: 20000, // Animation duration in milliseconds
          easing: 'linear', // You can change the easing function
          from: `${x} ${y} ${z}`, // Initial position
          to: `${x - 1000} ${y + 1000} ${z-1}`, // Destination position
          loop: true, // Loop the position animation
        });
      });
    }
  }, []);

  return <Entity id="rocket" position={`${x} ${y} ${z}`} scale="15 15 15" rotation={`0 0 ${z - 200}`}></Entity>;
}


export default Rocket;