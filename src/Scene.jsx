import { useEffect, useRef, useState } from 'react';
import { createScene } from './utils/createScene';

function Scene() {
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
        managerRef.current?.reload();
    };

    const handleClearScene = () => {
        managerRef.current?.clearScene();
    };

    const handleAddNode = () => {
        setActiveMode((prev) => (prev === 'addNode' ? null : 'addNode'));
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

    const tipStyle = {
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
    };

    const controlsContainerStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
    };

    const playButtonStyle = {
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
    };

    const sliderStyle = {
        width: '300px',
        margin: '0 10px',
    };

    const modeMessages = {
        removeNode: 'Select a node to delete',
        addEdge: 'Select two nodes to connect',
        removeEdge: 'Select two nodes to disconnect',
        selectStart: 'Select a start node',
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <div ref={containerRef}></div>
            {activeMode in modeMessages && <div style={tipStyle}>{modeMessages[activeMode]}</div>}
            <div style={controlsContainerStyle}>
                <button
                    onClick={handlePlayPause}
                    style={playButtonStyle}
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px' }}>0</span>
                    <input
                        type="range"
                        min="0"
                        max={maxSliderValue}
                        value={sliderValue}
                        onChange={handleSliderChange}
                        style={sliderStyle}
                    />
                    <span style={{ marginLeft: '10px' }}>{maxSliderValue}</span>
                </div>
            </div>

            <button
                onClick={handleReload}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
            >
                Example
            </button>
            <button
                onClick={handleClearScene}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#FFA000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#FF8000')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#FFA000')}
            >
                Clear
            </button>
            <button
                onClick={handleAddNode}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#02C874',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#02A05D')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#02C874')}
            >
                Add Node
            </button>
            <button
                onClick={handleRemoveNode}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '150px',
                    padding: '10px 20px',
                    backgroundColor: '#02C874',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#02A05D')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#02C874')}
            >
                Remove Node
            </button>
            <button
                onClick={handleAddEdge}
                style={{
                    position: 'absolute',
                    top: '80px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#7B7B7B',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#666666')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#7B7B7B')}
            >
                Add Edge
            </button>
            <button
                onClick={handleRemoveEdge}
                style={{
                    position: 'absolute',
                    top: '80px',
                    left: '150px',
                    padding: '10px 20px',
                    backgroundColor: '#7B7B7B',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#666666')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#7B7B7B')}
            >
                Remove Edge
            </button>
            <button
                onClick={handleSelectStart}
                style={{
                    position: 'absolute',
                    top: '140px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#CC0000')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF0000')}
            >
                Select Start Point
            </button>
        </div>
    );
}

export default Scene;
