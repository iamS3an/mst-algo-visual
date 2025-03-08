import { useEffect, useRef, useState } from 'react';
import { createScene } from '../scene/createScene';
import ControlButton from './ControlButton';
import PlaybackControls from './PlaybackControls';
import '../styles/Interface.css';

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
        setActiveMode(null);
        setIsPlaying(prev => !prev);
        if (!isPlaying) {
            managerRef.current?.startAlgo();
        } else {
            managerRef.current?.pauseAlgo();
        }
    };

    const handleSliderChange = (e) => {
        const newValue = parseInt(e.target.value);
        setSliderValue(newValue);
        managerRef.current?.setAlgoProgress(newValue);
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

    const modeMessages = {
        addNode: 'Click anywhere to add a node',
        removeNode: 'Select a node to delete',
        addEdge: 'Select two nodes to connect',
        removeEdge: 'Select two nodes to disconnect',
        selectStart: 'Select a start node',
    };

    return (
        <div className="interface-container">
            <div ref={containerRef}></div>
            {activeMode in modeMessages && <div className="tip-message">{modeMessages[activeMode]}</div>}
            
            <PlaybackControls 
                isPlaying={isPlaying} 
                sliderValue={sliderValue} 
                maxSliderValue={maxSliderValue} 
                handlePlayPause={handlePlayPause} 
                handleSliderChange={handleSliderChange} 
            />

            {buttonConfigs.map(config => (
                <ControlButton key={config.id} config={config} />
            ))}
        </div>
    );
}

export default Interface;
