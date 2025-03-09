import { useEffect, useRef, useState, useCallback } from 'react';
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
    const [maxSliderValue, setMaxSliderValue] = useState(0);

    useEffect(() => {
        managerRef.current = createScene(containerRef.current);

        managerRef.current.updateSlider((currentStep, totalSteps) => {
            setSliderValue(currentStep);
            setMaxSliderValue(totalSteps);
        });

        return () => managerRef.current.cleanup();
    }, []);

    useEffect(() => {
        if (sliderValue === maxSliderValue) {
            setIsPlaying(false);
        }
    }, [sliderValue, maxSliderValue]);

    const toggleMode = useCallback((mode, action) => {
        setActiveMode((prev) => (prev === mode ? null : mode));
        managerRef.current?.[action]?.();
    }, []);

    const handleReload = useCallback(() => {
        setActiveMode(null);
        managerRef.current?.reload();
    }, []);

    const handleClearScene = useCallback(() => {
        setActiveMode(null);
        managerRef.current?.clearScene();
    }, []);

    const handlePlayPause = useCallback(() => {
        setActiveMode(null);
        setIsPlaying((prev) => !prev);
        isPlaying ? managerRef.current?.pauseAlgo() : managerRef.current?.playAlgo();
    }, [isPlaying]);

    const handleReset = useCallback(() => {
        setActiveMode(null);
        setIsPlaying(false);
        setSliderValue(0);
        managerRef.current?.pauseAlgo();
        managerRef.current?.useSlider(0);
    }, []);

    const handleSlider = useCallback((e) => {
        setActiveMode(null);
        const newValue = parseInt(e.target.value, 10);
        setSliderValue(newValue);
        managerRef.current?.useSlider(newValue);
    }, []);

    const buttonConfigs = [
        { id: 'example', text: 'Example', action: handleReload, position: { bottom: '20px', right: '20px' }, colors: { default: '#007BFF', hover: '#0056b3' } },
        { id: 'clear', text: 'Clear', action: handleClearScene, position: { bottom: '20px', left: '20px' }, colors: { default: '#FFA000', hover: '#FF8000' } },
        { id: 'addNode', text: 'Add Node', action: () => toggleMode(null, 'addNode'), position: { top: '20px', left: '20px' }, colors: { default: '#02C874', hover: '#02A05D' } },
        { id: 'removeNode', text: 'Remove Node', action: () => toggleMode('removeNode', 'removeNode'), position: { top: '20px', left: '150px' }, colors: { default: '#02C874', hover: '#02A05D' } },
        { id: 'addEdge', text: 'Add Edge', action: () => toggleMode('addEdge', 'addEdge'), position: { top: '80px', left: '20px' }, colors: { default: '#3B3B3B', hover: '#363636' } },
        { id: 'removeEdge', text: 'Remove Edge', action: () => toggleMode('removeEdge', 'removeEdge'), position: { top: '80px', left: '150px' }, colors: { default: '#3B3B3B', hover: '#363636' } },
        { id: 'selectStart', text: 'Select Start Point', action: () => toggleMode('selectStart', 'selectStart'), position: { top: '140px', left: '20px' }, colors: { default: '#FF0000', hover: '#CC0000' } },
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

            {activeMode && modeMessages[activeMode] && <div className="tip-message">{modeMessages[activeMode]}</div>}

            <PlaybackControls isPlaying={isPlaying} sliderValue={sliderValue} maxSliderValue={maxSliderValue} handlePlayPause={handlePlayPause} handleReset={handleReset} handleSliderChange={handleSlider} />

            {buttonConfigs.map(({ id, text, action, position, colors }) => (
                <ControlButton key={id} text={text} onClick={action} position={position} colors={colors} disabled={sliderValue > 0} />
            ))}
        </div>
    );
}

export default Interface;
