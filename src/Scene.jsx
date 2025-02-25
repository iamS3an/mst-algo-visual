import { useEffect, useRef, useState } from 'react';
import { createScene } from './utils/createScene';

function Scene() {
    const containerRef = useRef(null);
    const managerRef = useRef(null);
    const [edgeMode, setEdgeMode] = useState(false);

    useEffect(() => {
        managerRef.current = createScene(containerRef.current);
        const handleEdgeComplete = () => setEdgeMode(false);
        window.addEventListener('edgeComplete', handleEdgeComplete);
        return () => {
            managerRef.current.cleanup();
            window.removeEventListener('edgeComplete', handleEdgeComplete);
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
        setEdgeMode(prev => !prev);
        managerRef.current?.addEdge();
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <div ref={containerRef}></div>
            {edgeMode && (
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
            <button
                onClick={handleReload}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#008000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#006400')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#008000')}
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
                    backgroundColor: '#FF3033',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#C70039')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF3033')}
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
                Add Node
            </button>
            <button
                onClick={handleAddEdge}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '150px',
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
                Add Edge
            </button>
        </div>
    );
};

export default Scene;
