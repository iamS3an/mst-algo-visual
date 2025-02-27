import { useEffect, useRef, useState } from 'react';
import { createScene } from './utils/createScene';

function Scene() {
    const containerRef = useRef(null);
    const managerRef = useRef(null);
    const [activeMode, setActiveMode] = useState(null);

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
        managerRef.current?.addNode();
    };

    const handleAddEdge = () => {
        const newMode = activeMode === 'connectNodes' ? null : 'connectNodes';
        setActiveMode(newMode);
        if (newMode === 'connectNodes') {
            managerRef.current?.addEdge();
        }
    };

    const handleSelectStart = () => {
        const newMode = activeMode === 'selectStart' ? null : 'selectStart';
        setActiveMode(newMode);
        if (newMode === 'selectStart') {
            managerRef.current?.selectStart();
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <div ref={containerRef}></div>
            {activeMode === 'connectNodes' && (
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        padding: '10px 20px',
                        backgroundColor: '#F3FF9A',
                        color: '#000000',
                        border: '1px solid #000',
                        borderRadius: '5px',
                        zIndex: '9999',
                    }}
                >
                    Select two nodes to connect
                </div>
            )}
            {activeMode === 'selectStart' && (
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        padding: '10px 20px',
                        backgroundColor: '#FF0000',
                        color: '#000000',
                        border: '1px solid #000',
                        borderRadius: '5px',
                        zIndex: '9999',
                    }}
                >
                    Select a start node
                </div>
            )}
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
                onClick={handleAddEdge}
                style={{
                    position: 'absolute',
                    top: '20px',
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
                Add Edge
            </button>
            <button
                onClick={handleSelectStart}
                style={{
                    position: 'absolute',
                    top: '80px',
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
