import React from 'react';
import '../styles/ControlButton.css';

const ControlButton = ({ id, text, onClick, disabled }) => {
    return (
        <button 
            className={`control-button button-${id}`} 
            onClick={disabled ? undefined : onClick} 
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default ControlButton;
