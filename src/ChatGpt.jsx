import rocketModel from "./models/chat_gpt_logo_metal_free_v.2.glb";
import PropTypes from "prop-types";

function ChatGpt({ x, y, z }) {
    return (
        <a-entity
        id="chatGpt"
        gltf-model={rocketModel}
        position={`${x} ${y} ${z}`}
        scale="1 1 1"
        rotation="0 0 0"
        ></a-entity>
    );
    }

ChatGpt.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
    };
    
export default ChatGpt;