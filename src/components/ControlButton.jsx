import React from 'react';
import '../styles/ControlButton.css';

const ControlButton = ({ text, onClick, position, colors, disabled }) => {
    const buttonStyle = {
        ...position,
        backgroundColor: colors.default,
        position: 'absolute',
    };

    const handleMouseOver = (e) => {
        if (!disabled) {
            e.target.style.backgroundColor = colors.hover;
        }
    };

    const handleMouseOut = (e) => {
        if (!disabled) {
            e.target.style.backgroundColor = colors.default;
        }
    };

    return (
        <button className="control-button" style={buttonStyle} onClick={disabled ? undefined : onClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} disabled={disabled}>
            {text}
        </button>
    );
};

export default ControlButton;
