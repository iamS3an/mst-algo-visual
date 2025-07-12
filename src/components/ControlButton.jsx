import '../styles/ControlButton.css';

function ControlButton({ id, text, onClick, hidden }) {
    return (
        <button className={`control-button button-${id}`} onClick={onClick} hidden={hidden}>
            {text}
        </button>
    );
};

export default ControlButton;
