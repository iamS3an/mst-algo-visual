import { useEffect, useRef, useState } from 'react';
import { createScene } from '../scene/createScene';

function Interface() {
    const containerRef = useRef(null);
    const managerRef = useRef(null);
    const [activeMode, setActiveMode] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [maxSliderValue, setMaxSliderValue] = useState(100);

    useEffect(() => {
        managerRef.current = createScene(containerRef.current);
        return () => {
            managerRef.current.cleanup();
        };
    }, []);

    const handleReload = () => {
        setActiveMode(null);
        managerRef.current?.reload();
    };

    const handleClearScene = () => {
        setActiveMode(null);
        managerRef.current?.clearScene();
    };

    const handleAddNode = () => {
        setActiveMode(null);
        managerRef.current?.addNode();
    };

    const handleRemoveNode = () => {
        setActiveMode((prev) => (prev === 'removeNode' ? null : 'removeNode'));
        managerRef.current?.removeNode();
    };

    const handleAddEdge = () => {
        setActiveMode((prev) => (prev === 'addEdge' ? null : 'addEdge'));
        managerRef.current?.addEdge();
    };

    const handleRemoveEdge = () => {
        setActiveMode((prev) => (prev === 'removeEdge' ? null : 'removeEdge'));
        managerRef.current?.removeEdge();
    };

    const handleSelectStart = () => {
        setActiveMode((prev) => (prev === 'selectStart' ? null : 'selectStart'));
        managerRef.current?.selectStart();
    };

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
        if (!isPlaying) {
            managerRef.current?.startAlgorithm(sliderValue);
        } else {
            managerRef.current?.pauseAlgorithm();
        }
    };

    const handleSliderChange = (e) => {
        const newValue = parseInt(e.target.value);
        setSliderValue(newValue);
        managerRef.current?.setAlgorithmProgress(newValue);
    };

    const styles = {
        container: {
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%'
        },
        tipStyle: {
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 20px',
            backgroundColor: '#F3FF9A',
            color: '#000000',
            border: '1px solid #000',
            borderRadius: '5px',
            zIndex: '9999',
        },
        controlsContainer: {
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'transparent',
        },
        playButton: {
            padding: '12px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            color: isPlaying ? '#FF5722' : '#4CAF50',
            border: `2px solid ${isPlaying ? '#FF5722' : '#4CAF50'}`,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '15px',
            marginBottom: '1px',
            transition: 'color 0.3s ease, border-color 0.3s ease',
        },
        sliderContainer: {
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'transparent', 
            padding: '5px 10px'
        },
        slider: {
            width: '300px',
            margin: '0 10px',
            appearance: 'none',
            height: '6px',
            borderRadius: '3px',
            background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${sliderValue / maxSliderValue * 100}%, #ddd ${sliderValue / maxSliderValue * 100}%, #ddd 100%)`,
            outline: 'none',
            transition: 'background 0.3s ease',
            '&::-webkit-slider-thumb': {
                appearance: 'none',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#4CAF50',
                cursor: 'pointer',
                boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.2)',
                transition: 'all 0.2s ease',
            },
            '&::-moz-range-thumb': {
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#4CAF50',
                cursor: 'pointer',
                boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.2)',
                transition: 'all 0.2s ease',
            },
            '&:active::-webkit-slider-thumb': {
                transform: 'scale(1.2)',
            },
            '&:active::-moz-range-thumb': {
                transform: 'scale(1.2)',
            }
        },
        timeDisplay: {
            fontSize: '12px',
            color: '#FFFFFF',
            backgroundColor: 'transparent',
            padding: '2px 6px',
            borderRadius: '3px',
            marginRight: '8px',
            marginLeft: '8px',
        },
        baseButton: {
            position: 'absolute',
            padding: '10px 20px',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
        }
    };

    const buttonConfigs = [
        {
            id: 'example',
            text: 'Example',
            onClick: handleReload,
            position: { bottom: '20px', right: '20px' },
            colors: { default: '#007BFF', hover: '#0056b3' }
        },
        {
            id: 'clear',
            text: 'Clear',
            onClick: handleClearScene,
            position: { bottom: '20px', left: '20px' },
            colors: { default: '#FFA000', hover: '#FF8000' }
        },
        {
            id: 'addNode',
            text: 'Add Node',
            onClick: handleAddNode,
            position: { top: '20px', left: '20px' },
            colors: { default: '#02C874', hover: '#02A05D' }
        },
        {
            id: 'removeNode',
            text: 'Remove Node',
            onClick: handleRemoveNode,
            position: { top: '20px', left: '150px' },
            colors: { default: '#02C874', hover: '#02A05D' }
        },
        {
            id: 'addEdge',
            text: 'Add Edge',
            onClick: handleAddEdge,
            position: { top: '80px', left: '20px' },
            colors: { default: '#7B7B7B', hover: '#666666' }
        },
        {
            id: 'removeEdge',
            text: 'Remove Edge',
            onClick: handleRemoveEdge,
            position: { top: '80px', left: '150px' },
            colors: { default: '#7B7B7B', hover: '#666666' }
        },
        {
            id: 'selectStart',
            text: 'Select Start Point',
            onClick: handleSelectStart,
            position: { top: '140px', left: '20px' },
            colors: { default: '#FF0000', hover: '#CC0000' }
        }
    ];

    const CustomButton = ({ config }) => {
        const [isHovered, setIsHovered] = useState(false);
        
        return (
            <button
                onClick={config.onClick}
                style={{
                    ...styles.baseButton,
                    ...config.position,
                    backgroundColor: isHovered ? config.colors.hover : config.colors.default
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {config.text}
            </button>
        );
    };

    const modeMessages = {
        addNode: 'Click anywhere to add a node',
        removeNode: 'Select a node to delete',
        addEdge: 'Select two nodes to connect',
        removeEdge: 'Select two nodes to disconnect',
        selectStart: 'Select a start node',
    };

    return (
        <div style={styles.container}>
            <div ref={containerRef}></div>
            {activeMode in modeMessages && <div style={styles.tipStyle}>{modeMessages[activeMode]}</div>}
            
            <div style={styles.controlsContainer}>
                <button
                    onClick={handlePlayPause}
                    style={styles.playButton}
                    onMouseEnter={(e) => {
                        e.target.style.color = isPlaying ? '#E64A19' : '#388E3C';
                        e.target.style.borderColor = isPlaying ? '#E64A19' : '#388E3C';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = isPlaying ? '#FF5722' : '#4CAF50';
                        e.target.style.borderColor = isPlaying ? '#FF5722' : '#4CAF50';
                    }}
                >
                    {isPlaying ? '⏸' : '▶'}
                </button>
                <div style={styles.sliderContainer}>
                    <span style={styles.timeDisplay}>{sliderValue}</span>
                    <input
                        type="range"
                        min="0"
                        max={maxSliderValue}
                        value={sliderValue}
                        onChange={handleSliderChange}
                        style={styles.slider}
                        onMouseEnter={(e) => {
                            e.target.style.background = `linear-gradient(to right, #388E3C 0%, #388E3C ${sliderValue / maxSliderValue * 100}%, #bbb ${sliderValue / maxSliderValue * 100}%, #bbb 100%)`;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${sliderValue / maxSliderValue * 100}%, #ddd ${sliderValue / maxSliderValue * 100}%, #ddd 100%)`;
                        }}
                    />
                    <span style={styles.timeDisplay}>{maxSliderValue}</span>
                </div>
            </div>

            {buttonConfigs.map(config => (
                <CustomButton key={config.id} config={config} />
            ))}
        </div>
    );
}

export default Interface;
