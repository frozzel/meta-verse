import './App.scss';
import {useState} from 'react';
import {Entity, Scene} from 'aframe-react';
import 'aframe';
import ('aframe-extras');
import 'aframe-text-geometry-component';
// import 'aframe-physics-system';
// import 'aframe-environment-component';
import sky from './stars.jpg';
import mountain from './models/mountain.glb';
import cube from './models/tesseract_cube.glb';
import einstein from './models/einstein_salesforce_tower.glb';
import cloud from './models/cloud_high_poly.glb';
import cortana from './models/new_cortana_halo4_og.glb';
import glow from './models/glow.glb';
import chatGpt from "./models/chat_gpt_logo_metal_free_v.2.glb";
import github from './models/github_octocat.glb';
import rocket from './models/rocket.glb';
import pillar from './models/greek_pillar_circle.glb';
import stage from './models/scene.glb';

import Speech from 'react-speech';


import video from './models/Drake.mp4';



function App() {
  const [text, setText] = useState('Hello World');

  function handleClick() {
    console.log('clicked');
    setText('Hello World Again');

    
  }
console.log(text);



  return (
    <>
    <Speech id="speech" text={text} click-listener cursor-listener speech-on-click />
    
      <Scene vr-mode-ui="enabled: true" >
        <a-assets>
          <img id="sky" src={sky}></img>  
          <a-asset-item id="mountain" src={mountain}></a-asset-item>
          <a-asset-item id="cube" src={cube}></a-asset-item>
          <a-asset-item id="einstein" src={einstein}></a-asset-item>
          <a-asset-item id="cloud" src={cloud}></a-asset-item>
          <a-asset-item id="cortana" src={cortana}></a-asset-item>
          <a-asset-item id="glow" src={glow}></a-asset-item>
          <a-asset-item id="chatGpt" src={chatGpt}></a-asset-item>
          <a-asset-item id="github" src={github}></a-asset-item>
          <a-asset-item id="rocket" src={rocket}></a-asset-item>
          <video id="video" preload="auto" src={video}></video>
          <a-asset-item id="pillar" src={pillar}></a-asset-item>
          <a-asset-item id="stage" src={stage}></a-asset-item>
          <Speech id="chatGpt" text="Hello World" click-listener cursor-listener />
          <a-mixin id="boldFont1" animation="property: position; dur: 6000; easing: linear; loop: false; to: -7 2 -12"></a-mixin>
          <a-mixin id="boldFont2" animation__yoyo="property: position; dur: 6000; easing: linear; loop: false; to: -7 4 -12"></a-mixin>

        </a-assets>

        <Entity
          primitive="a-camera"
          position="0 1.5 0"
          look-controls="reverseMouseDrag: true"
          wasd-controls="acceleration: 100; fly: true"
          cursor="rayOrigin: mouse"
          raycaster="objects: .clickable"
        >
          <Entity
          primitive="a-cursor"
          cursor="fuse: true; fuseTimeout: 500"
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
          material="color: white; shader: flat"
          ></Entity>
        </Entity>

       

        <Entity 
          primitive="a-sky" 
          color="#FFFFFF" 
          material="src: #sky" 
          rotation="0 0 0" 
        ></Entity>

      
        <Entity 
          id="name"
          mixin="boldFont2" 
          text-geometry="value: Dennis Hickox; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 10; size: 1.5; height: 0.5; weight: bold; style: normal;" 
          position='-7 4 -40'
          material="color: white; opacity: 1; metalness: .8" 
          // opacity='0.8'
          // animation="property: components.material.material.color; type: color; dir: alternate; dur: 1000; easing: easeInSine; loop: true; to: #5F5"
          // animation__opacity="property: components.material.material.opacity; dur: 3000; easing: linear; from: 0; to: 1; loop: false"
          // animation__yoyo="property: position; dur: 6000; easing: linear; loop: false; to: -7 4 -12"
        ></Entity>

       <Entity 
          mixin="boldFont1" 
          text-geometry="value: Full Stack Developer; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 10; size: 1.5; height: 0.5; weight: bold; style: normal;" 
          position='-7 2 -40'
          material="color: white; opacity: 1; metalness: .8; " 
          // opacity='0.0'
          // animation="property: components.material.material.color; type: color; dir: alternate; dur: 1000; easing: easeInSine; loop: true; to: #5F5"
          // animation__opacity="property: components.material.material.opacity; dur: 3000; easing: linear; from: 0; to: 1; loop: false"
          // animation="property: position; dur: 6000; easing: linear; loop: false; to: -7 2 -12"
        ></Entity>

        <Entity 
          id="mountain"  
          gltf-model="#mountain" 
          position="0 0 0" 
          scale="15 15 15" 
          rotation="0 0 0"
          static-body
        ></Entity>
        
        <Entity
          gltf-model="#cube"
          position="-13 4 -14"
          rotation="0 0 0"
          scale="0.02 0.02 0.02"
          animation__rotate="property: rotation; to: 360 360 0; loop: true; dur: 10000"
          static-body
        ></Entity>

        <Entity 
          id="einstein" 
          gltf-model="#einstein" 
          position="45 0.5 -30" 
          scale="1 1 1" 
          rotation="0 100 0"
          static-body
        ></Entity>

        <Entity 
          mixin="boldFont" 
          text-geometry="value: Salesforce; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 10; size: .5; height: 0.5; weight: bold; style: normal;" 
          position='45 2.5 -32'
          material="color: #009EDB; opacity: 1; metalness: .8 " 
          opacity='1'
        ></Entity>

        <Entity 
          id="cloud" 
          gltf-model="#cloud" 
          position="40 3 -32.8" 
          scale="1 1 1" 
          rotation="0 0 0"
        ></Entity>
        
        <Entity
          id="cortana"
          gltf-model="#cortana"
          position="-45 1 -32"
          scale="2 2 2 "
          rotation="0 0 0"
        ></Entity>

        <Entity
          id="glow"
          gltf-model="#glow"
          position="-45 4 -30"
          scale="6 6 6"
          rotation="-90 0 0"
          animation-mixer="clip: Take 001; loop: repeat; timeScale: 1"
        ></Entity>

        <Entity
          id="chatGpt"
          gltf-model="#chatGpt"
          position="-45 1 -27"
          scale="1 1 1"
          rotation="0 0 0"
          events={{ click: () => { handleClick()} }}
          click-listener
          cursor-listener
          speech-on-click
          data-text="Hello World"
        > 
        
          
        </Entity>


        <Entity 
          id="github" 
          gltf-model="#github" 
          position="-30 1 50" 
          scale="1 1 1" 
          rotation="0 0180 0"
        ></Entity>

        <Entity
          id="rocket"
          gltf-model="#rocket"
          position="100 10 -100"
          scale="15 15 15"
          rotation="0 0 45"
          animation="property: position; to: -1000 1010 -100; loop: true; dur: 20000; easing: linear; delay: 10000 "
        ></Entity>


        <Entity
          id="pillar"
          gltf-model="#pillar"
          position="100 -1 0"
          scale="4 4 4"
          rotation="0 0 0"
          static-body
        ></Entity>         

        <Entity 
          id="stage" 
          gltf-model="#stage" 
          position="-100 1.5 0" 
          scale="4 4 4" 
          rotation="0 90 0"
          static-body
        ></Entity>


        {/* <Entity 
          primitive="a-video" 
          src="#video" 
          width="50" 
          height="25" 
          position="-102 18 0" 
          rotation="0 -90 0"
        ></Entity> */}


      </Scene>
    </>
  );
}

export default App;
