import '../styles/ControlButton.css';

const ControlButton = ({ id, text, onClick, hidden }) => {
    return (
        <button className={`control-button button-${id}`} onClick={onClick} hidden={hidden}>
            {text}
        </button>
    );
};

export default ControlButton;
