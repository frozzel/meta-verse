import './App.scss';
import 'aframe';
import sky from './stars.jpg';
import Rocket from './Rocket';
import Stage from './Stage';
import video from './models/Drake.mp4';
import Mountain from './Mountains';
import Into from './Into';



function App() {
  return (
    <>
      <a-scene look-controls="reverseMouseDrag: true" look-at="scene" animation-timeline__1="timeline: #myTimeline; loop: true">
        <a-assets>
          <img id="sky" src={sky}></img>
        </a-assets>

        <a-animation id="loadSky" begin="load" attribute="rotation" from="0 0 0" to="0 0 0"></a-animation>
        <a-animation id="loadMountains" begin="load" attribute="position" from="0 0 0" to="0 0 0"></a-animation>
        {/* <a-animation id="loadInto" begin="load" attribute="position" from="0 3 -5" to="0 3 -5"></a-animation>
        <a-animation id="loadRocket" begin="load" attribute="position" from="100 10 -100" to="100 10 -100"></a-animation> */}


        <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0" animation__load="startEvents: load; property: rotation; to: 0 0 0; dur: 2000;"></a-sky>
 

        <Mountain x={0} y={0} z={0} animation__load="startEvents: load;"></Mountain>
        {/* <Into x={0} y={3} z={-5} animation__load="startEvents: load;"></Into> */}
        {/* <Rocket x={100} y={10} z={-100} animation__load="startEvents: load; begin: 20000;"></Rocket> */}

        <a-button onclick="document.querySelector('a-scene').emit('load')">Load Scene</a-button>


        {/* <Rocket x={100} y={10} z={-100}></Rocket> */}
        <Stage x={-110} y={1.5} z={0}></Stage>
        {/* <a-video src={video} width="50" height="25" position="-112 18 0" rotation="0 -90 0"></a-video> */}
      </a-scene>
    </>
  );
}

export default App;
