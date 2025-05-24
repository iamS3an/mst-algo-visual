import { useEffect, useRef, useState, useCallback } from 'react';
import { createScene } from '../scene/createScene';
import ControlButton from './ControlButton';
import PlaybackControls from './PlaybackControls';
import Sidebar from './Sidebar';
import '../styles/Interface.css';

function Interface() {
    const containerRef = useRef(null);
    const managerRef = useRef(null);
    const [activeMode, setActiveMode] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [maxSliderValue, setMaxSliderValue] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [usingAlgo, setUsingAlgo] = useState('prim');

    useEffect(() => {
        managerRef.current = createScene(containerRef.current);

        managerRef.current.updateSlider((currentStep, totalSteps) => {
            setSliderValue(currentStep);
            setMaxSliderValue(totalSteps);
        });

        return () => managerRef.current.cleanup();
    }, []);

    useEffect(() => {
        if (sliderValue === 0 || sliderValue === maxSliderValue) {
            setIsPlaying(false);
        }
    }, [sliderValue, maxSliderValue]);

    const handleMode = useCallback((mode, action) => {
        setActiveMode((prev) => (prev === mode ? null : mode));
        managerRef.current?.[action]?.();
    }, []);

    const handleAlgo = useCallback((algo) => {
        setActiveMode(algo);
        setUsingAlgo(algo);
        managerRef.current?.useAlgo(algo);
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
        { id: 'clear', text: 'Clear All', action: () => handleMode(null, 'clearScene') },
        { id: 'example', text: 'Example', action: () => handleMode(null, 'genExample') },
        { id: 'addNode', text: 'Add Node', action: () => handleMode(null, 'addNode') },
        { id: 'removeNode', text: activeMode === 'removeNode' ? 'Cancel' : 'Remove Node', action: () => handleMode('removeNode', 'removeNode') },
        { id: 'addEdge', text: activeMode === 'addEdge' ? 'Cancel' : 'Add Edge', action: () => handleMode('addEdge', 'addEdge') },
        { id: 'removeEdge', text: activeMode === 'removeEdge' ? 'Cancel' : 'Remove Edge', action: () => handleMode('removeEdge', 'removeEdge') },
        { id: 'selectStart', text: activeMode === 'selectStart' ? 'Cancel' : 'Select Start Point', action: () => handleMode('selectStart', 'selectStart'), hidden: usingAlgo !== 'prim' },
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
            {!(isPlaying || sliderValue > 0) && buttonConfigs.map(({ id, text, action, hidden = false }) => <ControlButton key={id} id={id} text={text} onClick={action} hidden={hidden} />)}
            {activeMode && modeMessages[activeMode] && <div className="tip-message">{modeMessages[activeMode]}</div>}
            <PlaybackControls isPlaying={isPlaying} sliderValue={sliderValue} maxSliderValue={maxSliderValue} handlePlayPause={handlePlayPause} handleReset={handleReset} handleSliderChange={handleSlider} />
            {!(isPlaying || sliderValue > 0) && (<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} handleAlgo={handleAlgo} />)}
        </div>
    );
}

export default Interface;
