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
        if (sliderValue === maxSliderValue || sliderValue === 0) {
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
        { id: 'example', text: 'Example', action: handleReload },
        { id: 'clear', text: 'Clear Objects', action: handleClearScene },
        { id: 'addNode', text: 'Add Node', action: () => toggleMode(null, 'addNode') },
        { id: 'removeNode', text: activeMode === 'removeNode' ? 'Cancel' : 'Remove Node', action: () => toggleMode('removeNode', 'removeNode') },
        { id: 'addEdge', text: activeMode === 'addEdge' ? 'Cancel' : 'Add Edge', action: () => toggleMode('addEdge', 'addEdge') },
        { id: 'removeEdge', text: activeMode === 'removeEdge' ? 'Cancel' : 'Remove Edge', action: () => toggleMode('removeEdge', 'removeEdge') },
        { id: 'selectStart', text: activeMode === 'selectStart' ? 'Cancel' : 'Select Start Point', action: () => toggleMode('selectStart', 'selectStart') },
    ];

    const modeMessages = {
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

            {buttonConfigs.map(({ id, text, action }) => (
                <ControlButton key={id} id={id} text={text} onClick={action} disabled={sliderValue > 0} />
            ))}
        </div>
    );
}

export default Interface;
