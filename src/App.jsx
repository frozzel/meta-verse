// import './App.scss';
import {useState, useEffect} from 'react';
import {Entity, Scene} from 'aframe-react';
import 'aframe';
import ('aframe-extras');
import 'aframe-text-geometry-component';
import sky from './stars.jpg';
import mountain from './models/hall2.glb';
import cortana from './models/charactershalo_4cortana.glb';
import glow from './models/glow.glb';
import chatGpt from "./models/chat_gpt_logo_metal_free_v.2.glb";
import rocket from "./models/ccs_class_battlecruiser.glb";
import sword from "./models/spartan_armour_mkv_-_halo_reach.glb";
import grunt from "./models/halo-armoured-grunt-walk.glb";
import halo from "./models/sacred_ring_halo.glb";
import { chatgpt } from './api/chatGpt';



function App() {
  const [text, setText] = useState("I'm Cortana click on the ChatGpt logo to start a conversation.");
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [message, setMessage] = useState("Hover or click on Cortana");

  const fetchChatGpt = async (question) => {
    const synth = window.speechSynthesis;
    const {error, reply } = await chatgpt(question)
    
    if (error) {
      console.log(error)
      setMessage(error)
    }
    setMessage(reply)
    const u = new SpeechSynthesisUtterance(reply);
    
    synth.speak(u);
  
  }
 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

useEffect(() => {
  const synth = window.speechSynthesis;
  const u = new SpeechSynthesisUtterance(text);

  setUtterance(u);

  return () => {
    synth.cancel();
  };
}, [text]);


const handlePlay =  () => {
  const synth = window.speechSynthesis;
  setMessage('Clicked Cortana');

  if (isPaused) {
    
    synth.resume();
  }

  
  synth.speak(utterance);
 

  setIsPaused(false);  

};


const handleListen = async () => {
  setMessage('Listening...');

  var quest = null

  if (!recognition.running) {
    recognition.start();
    recognition.onstart = () => {
      setMessage('Voice recognition started. Speak into the microphone.');
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage('Voice recognition result:', transcript);
      quest = transcript;
    };
    recognition.onend =  () => {
      setMessage('Voice recognition ended.');
      
      //  setQuestion(quest)
      
      fetchChatGpt(quest)

    };
    
    } else {
      recognition.stop();
      setMessage('Voice recognition stopped. Click on the Microphone logo to start again.');
  }
  
};



const credits = 'Special Thanks To: \n\n "CHAT GPT LOGO METAL FREE V.2" (https://skfb.ly/oJP7y) by vmmaniac \n \n"CCS Class Battlecruiser" \n(https://skfb.ly/6AsMT) by Marr Velz \n \n "halo-armoured-grunt-Walk" \n (https://skfb.ly/or7PV) by bensimulator2 \n\n "Spartan Armour MKV - Halo Reach" \n(https://skfb.ly/6QVvM) by McCarthy3D \n\n "Characters>Halo 4>Cortana" (https://skfb.ly/oNRWK) by jameslucino117 \n\n "Sacred Ring (Halo)" \n (https://skfb.ly/6CVxD) by Yanez Designs \n\n all licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).'

  return (
    <>

      <Scene  crossorigin="anonymous" light="defaultLightsEnabled: false" >
        <a-assets>
          <img id="sky" src={sky}></img>  
        </a-assets>


        <Entity id="rig"
                  movement-controls="controls: gamepad,keyboard,nipple,trackpad,touch"
                  nipple-controls="mode: static">
          <Entity primitive="a-camera"
                    position="0 1.6 0"
                    look-controls="pointerLockEnabled: false"
                    cursor="rayOrigin: mouse"
                    raycaster="objects: .clickable">
            <Entity primitive="a-cursor"
                    cursor="fuse: true; fuseTimeout: 500"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                    material="color: white; shader: flat">
            </Entity>
          </Entity>
        </Entity>
        


        <Entity 
          primitive="a-sky" 
          color="#FFFFFF" 
          material="src: #sky" 
          rotation="0 0 0" 
          scale=".08 .08 .08"
          position="0 0 0"
        ></Entity>


        <Entity
          primitive="a-light"
          type="point"
          color="#c8b8db"
          position="0 85 0 "
          intensity="1"
        ></Entity>
   

        <Entity 
          id="mountain"  
          gltf-model={mountain}
          position="-1 0 0" 
          scale="1 1 1 " 
          rotation="0 176 0"
          static-body
        ></Entity>
        
        
        <Entity
          id="cortana"
          gltf-model={cortana}
          position="0 1 -9"
          scale="3.5 3.5 3.5"
          rotation="0 180 0"
          events={{ click: () => { handlePlay()} }}
          animation-mixer="clip: Twerking; loop: repeat; timeScale: 1"
          raycaster-target="canGrab: true;"
        ></Entity>

        <Entity
          id="glow"
          gltf-model={glow}
          position="0 4 -7"
          scale="6 6 6"
          rotation="-90 0 0"
          animation-mixer="clip: Take 001; loop: repeat; timeScale: 1"
        ></Entity>

        <Entity
          id="chatGpt"
          gltf-model={chatGpt}
          position="0 1 -5"
          scale="1 1 1"
          rotation="0 0 0"
          events={{ click: () => { handleListen()} }}
          click-listener
          cursor-listener 
          raycaster-target="canGrab: true;"
        ></Entity>

        <Entity
          id='plain-text'
          text={{ value: message, align: 'center', width: 3 }}
          position="-4 2.5 -5"
          rotation="0 0 0"
          scale="1 1 1"
          primitive="a-text"
          visible="true"
          material="color: #c8b8db; opacity: 1; metalness: .8"
        ></Entity>
        
        <Entity
          id="plain"
          geometry="primitive: plane; width: 3; height: 1;"
          position="-4 2.5 -5"
          rotation="0 0 0"
          scale="1 1 1"
          material="color: #FFFFFF; opacity: 0.5; metalness: .8"
          
        ></Entity>


        <Entity
          id="rocket"
          gltf-model={rocket}
          position="25 0 30"
          scale=".01 .01 .01"
          rotation="10 45 0"
          animation="property: position; to: 25 19 -60; loop: true; dur: 20000; easing: linear; "
        ></Entity>

        <Entity 
          id="sword"  
          gltf-model={sword}
          position="-10 -.1 0" 
          scale="1.5 1.5 1.5" 
          rotation="0 90 0"
          static-body
          animation-mixer="clip: Take 001; loop: repeat; timeScale: 1"
        ></Entity>

        <Entity
          primitive="a-light"
          type="spot"
          color="#c8b8db"
          intensity=".4"
          angle="37"
          target="#sword"
        ></Entity>

        <Entity
          id="halo"
          gltf-model={halo}
          position="-22 10 0"
          scale=".01 .01 .01"
          rotation="180 80 65"
          animation-mixer="clip: Take 001; loop: repeat; timeScale: .5"
        ></Entity>

        <Entity
          id="grunt"
          gltf-model={grunt}
          position="8 .2 0"
          scale="1 1 1"
          rotation="0 -90 0"
          animation-mixer="clip: Walk; loop: repeat; timeScale: 1"
          
        ></Entity>

        <Entity
          primitive="a-light"
          type="spot"
          color="#c8b8db"
          intensity=".4"
          angle="37"
          target="#grunt"
        ></Entity>

        <Entity
          id='credits'
          text={{ value: credits, align: 'center', width: 3 }}
          position="0 3 8"
          rotation="0 180 0"
          scale="1 1 1"
          primitive="a-text"
          visible="true"
          material="color: #c8b8db; opacity: 1; metalness: .8"
        ></Entity>
        
        <Entity
          id="credits-plain"
          primitive="a-plane"
          geometry="primitive: plane; width: 3.2; height: 3.6;"
          position="0 3 8"
          rotation="0 180 0"
          scale="1 1 1"
          material="color: #FFFFFF; opacity: 0.5;"
          
        ></Entity>
 

      </Scene>
    </>
  );
}

export default App;

