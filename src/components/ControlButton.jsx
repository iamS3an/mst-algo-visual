import React, { useState } from 'react';
import '../styles/ControlButton.css';

const ControlButton = ({ config }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const buttonStyle = {
        ...config.position,
        backgroundColor: isHovered ? config.colors.hover : config.colors.default
    };
    
    return (
        <button
            onClick={config.onClick}
            className="control-button"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {config.text}
        </button>
    );
};

export default ControlButton;
