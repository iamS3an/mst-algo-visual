import { useEffect, useRef, useState, useCallback } from 'react';
import { manageScene } from '../scene/manageScene';
import ControlButton from './ControlButton';
import PlaybackControls from './PlaybackControls';
import Sidebar from './Sidebar';
import '../styles/Interface.css';

function Interface() {
    const containerRef = useRef(null);
    const managerRef = useRef(null);
    const [activeAction, setActiveAction] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [maxSliderValue, setMaxSliderValue] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [usingAlgo, setUsingAlgo] = useState('prim');
    const [stage, setStage] = useState(null);

    useEffect(() => {
        managerRef.current = manageScene(containerRef.current);

        managerRef.current.initSlider((currentStep, totalSteps) => {
            setSliderValue(currentStep);
            setMaxSliderValue(totalSteps);
        });

        managerRef.current.initHint((stage) => {
            setStage(stage);
        });

        return () => managerRef.current.disposeResource();
    }, []);

    useEffect(() => {
        if (sliderValue === 0 || sliderValue === maxSliderValue) {
            setIsPlaying(false);
        }
    }, [sliderValue, maxSliderValue]);

    const handleAction = useCallback((mode, action) => {
        setActiveAction((prev) => (prev === mode ? null : mode));
        managerRef.current?.[action]?.();
    }, []);

    const handleAlgo = useCallback((algo) => {
        setActiveAction(algo);
        setUsingAlgo(algo);
        managerRef.current?.useAlgo(algo);
    }, []);

    const handlePlayPause = useCallback(() => {
        setActiveAction(null);
        setIsPlaying((prev) => !prev);
        isPlaying ? managerRef.current?.pauseAlgo() : managerRef.current?.playAlgo();
    }, [isPlaying]);

    const handleReset = useCallback(() => {
        setActiveAction(null);
        setIsPlaying(false);
        setSliderValue(0);
        managerRef.current?.pauseAlgo();
        managerRef.current?.useSlider(0);
    }, []);

    const handleSlider = useCallback((e) => {
        setActiveAction(null);
        const newValue = parseInt(e.target.value, 10);
        setSliderValue(newValue);
        managerRef.current?.useSlider(newValue);
    }, []);

    const buttonConfigs = [
        { id: 'clear', text: 'Clear All', action: () => handleAction(null, 'clearScene') },
        { id: 'example', text: 'Example', action: () => handleAction(null, 'genExample') },
        { id: 'addNode', text: 'Add Node', action: () => handleAction(null, 'addNode') },
        { id: 'removeNode', text: activeAction === 'removeNode' ? 'Cancel' : 'Remove Node', action: () => handleAction('removeNode', 'removeNode') },
        { id: 'addEdge', text: activeAction === 'addEdge' ? 'Cancel' : 'Add Edge', action: () => handleAction('addEdge', 'addEdge') },
        { id: 'removeEdge', text: activeAction === 'removeEdge' ? 'Cancel' : 'Remove Edge', action: () => handleAction('removeEdge', 'removeEdge') },
        { id: 'selectStart', text: activeAction === 'selectStart' ? 'Cancel' : 'Select Start Point', action: () => handleAction('selectStart', 'selectStart'), hidden: usingAlgo !== 'prim' },
    ];

    const hintMessages = {
        removeNode: 'Select a node to delete',
        addEdge: 'Select two nodes to connect',
        removeEdge: 'Select two nodes to disconnect',
        selectStart: 'Select a start node',
    };

    return (
        <div className="interface-container">
            <div ref={containerRef}></div>
            {!(isPlaying || sliderValue > 0) && buttonConfigs.map(({ id, text, action, hidden = false }) => <ControlButton key={id} id={id} text={text} onClick={action} hidden={hidden} />)}
            {activeAction && hintMessages[activeAction] && <div className="hint-message">{hintMessages[activeAction]}</div>}
            <PlaybackControls isPlaying={isPlaying} sliderValue={sliderValue} maxSliderValue={maxSliderValue} handlePlayPause={handlePlayPause} handleReset={handleReset} handleSliderChange={handleSlider} />
            {!(isPlaying || sliderValue > 0) && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} handleAlgo={handleAlgo} />}
        </div>
    );
}

export default Interface;
