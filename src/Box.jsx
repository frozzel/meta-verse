import PropTypes from 'prop-types';
import salesforce from './assets/images/salesforce-logo.jpg';
import glitter from './assets/images/glitter.jpg';

function Box({x, y, z}) {
    return(

        <a-box position={`${x} ${y} ${z}`} rotation="0 45 0" scale="4 4 4" animation="property: rotation; to: 0 405 0; loop: true; dur: 5000; easing: linear">
        {/* Use images for each side representing Font Awesome icons */}
        <a-plane src={salesforce} position="0 0 0.51" rotation="0 180 0"></a-plane>
        <a-plane src={salesforce} position="0 0 -0.51"></a-plane>
        <a-plane src={glitter} position="0.51 0 0" rotation="0 90 0"></a-plane>
        <a-plane src={salesforce} position="-0.51 0 0" rotation="0 -90 0"></a-plane>
        <a-plane src={salesforce} position="0 0.51 0" rotation="-90 0 0"></a-plane>
        <a-plane src={salesforce} position="0 -0.51 0" rotation="90 0 0"></a-plane>
      </a-box>
    );
}

Box.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
}
export default Box;