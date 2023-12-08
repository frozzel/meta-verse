import PropTypes from 'prop-types';
import lightning from './assets/images/lightning2.jpeg';
function Box({x, y, z}) {

    return(
        <a-box
        position={`${x} ${y} ${z}`} rotation="0 0 0" scale="4 4 4" 
        material={`src: url(${lightning});`}
        animation__rotate="property: rotation; to: 90 360 0; loop: true; dur: 10000"
        
      ></a-box>
    );
}

Box.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
}
export default Box;