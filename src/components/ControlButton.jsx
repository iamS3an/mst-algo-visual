import React from 'react';

function ControlButton({ config }) {
    const { text, onClick, position, colors, disabled } = config;
    
    const buttonStyle = {
        ...position,
        backgroundColor: colors.default,
        position: 'absolute',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s',
        opacity: disabled ? 0.5 : 1,
    };
    
    const handleClick = (e) => {
        if (!disabled) {
            onClick(e);
        }
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
        <button
            style={buttonStyle}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default ControlButton;
