import './App.scss';
import 'aframe';
import 'aframe-environment-component';
import sky from './stars.jpg';
import Rocket from './Rocket';
import Stage from './Stage';
import video from './models/Drake.mp4';
import Mountain from './Mountains';
import Into from './Into';
import Box from './Box';
import Kevin from './Kevin';
import Salesforce from './Salesforce';
import SalesforceLogo from './SalesforceLogo';
import Cloud from './Cloud';
import Github from './Github';




function App() {
  return (
    <>
      <a-scene look-controls="reverseMouseDrag: true" look-at="scene" animation-timeline__1="timeline: #myTimeline; loop: true">
        <a-assets>
          <img id="sky" src={sky}></img>  
        </a-assets>
        {/* <a-entity environment="preset: starry; skyType: none;skyColor: purple; shadow: false; lighting: point; lightPosition: 1 5 -2;fog: 0;groundColor: black; ground: flat; gridColor: purple;"></a-entity> */}
        <a-animation id="loadSky" begin="load" attribute="rotation" from="0 0 0" to="0 0 0"></a-animation>
        <a-animation id="loadMountains" begin="load" attribute="position" from="0 0 0" to="0 0 0"></a-animation>
        <a-animation id="loadInto" begin="load" attribute="position" from="0 3 -5" to="0 3 -5"></a-animation>
        <a-animation id="loadRocket" begin="load" attribute="position" from="100 10 -100" to="100 10 -100"></a-animation>

        <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0" animation__load="startEvents: load; property: rotation; to: 0 0 0; dur: 2000;"></a-sky>

        <Mountain x={0} y={0} z={0} animation__load="startEvents: load;"></Mountain>
        <Into x={0} y={3} z={-5} animation__load="startEvents: load;"></Into>
        
        <Rocket x={100} y={10} z={-100} animation__load="startEvents: load; begin: 20000;"></Rocket>

        <a-button onclick="document.querySelector('a-scene').emit('load')">Load Scene</a-button>
       

        {/* <Box x={-12} y={3} z={-12}></Box> */}
        <Kevin x={-13} y={4} z={-14} ></Kevin>
        {/* <Rocket x={100} y={10} z={-100}></Rocket> */}
        <Salesforce x={-45} y={0.5} z={-30}></Salesforce>
        <SalesforceLogo x={-45} y={2.5} z={-32}></SalesforceLogo>
        <Stage x={-110} y={1.5} z={0}></Stage>
        <Cloud x={-50} y={3} z={-32.8}></Cloud>
        <Github x={-30} y={1} z={50}></Github>
        {/* <a-video src={video} width="50" height="25" position="-112 18 0" rotation="0 -90 0"></a-video> */}
      </a-scene>
    </>
  );
}

export default App;
