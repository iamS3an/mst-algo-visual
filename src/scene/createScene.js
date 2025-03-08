import { initScene } from './initScene';
import { onWindowResize, onPointerDown, onPointerMove, onPointerUp } from '../utils/eventHandlers';
import { createExample, visualizeMST } from '../utils/utils';
import { createNode } from './nodes';
import { prim } from '../utils/algo';

export function createScene(container) {
    if (container) container.innerHTML = '';
    const { scene, camera, renderer, controls, pointer, raycaster, plane, offset, state } = initScene(container);

    const nodes = [];
    const edges = [];

    createExample(scene, nodes, edges);

    const handleResize = () => onWindowResize({ camera, renderer });
    const handlePointerDown = (event) => onPointerDown(event, { scene, camera, controls, pointer, raycaster, plane, offset, state, nodes, edges });
    const handlePointerMove = (event) => onPointerMove(event, { camera, pointer, raycaster, plane, offset, state, edges });
    const handlePointerUp = () => onPointerUp({ controls, state, nodes, edges });

    const eventListeners = [
        { type: 'resize', handler: handleResize, options: false },
        { type: 'pointerdown', handler: handlePointerDown, options: false },
        { type: 'pointermove', handler: handlePointerMove, options: false },
        { type: 'pointerup', handler: handlePointerUp, options: false },
    ];

    const bindEventListeners = () => {
        eventListeners.forEach((evt) => {
            window.addEventListener(evt.type, evt.handler, evt.options);
        });
    };
    bindEventListeners();

    const unbindEventListeners = () => {
        eventListeners.forEach((evt) => {
            window.removeEventListener(evt.type, evt.handler, evt.options);
        });
    };

    const clearElements = () => {
        toggleMode(null);
        nodes.forEach((node) => scene.remove(node));
        nodes.length = 0;
        edges.forEach((edge) => {
            scene.remove(edge);
            scene.remove(edge.sprite);
        });
        edges.length = 0;
    };

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();

    const toggleMode = (modeName) => {
        const newModeValue = !state.modes[modeName];
        Object.keys(state.modes).forEach((key) => {
            state.modes[key] = key === modeName ? newModeValue : false;
        });
        state.selectedNodes.forEach((node) => node.material.color.copy(node.userData.originalColor));
        state.selectedNodes.length = 0;
    };

    prim(nodes, edges, state.algoSteps);

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const playAlgo = async () => {
        while (state.lastStep <= state.algoSteps.length) {
            await sleep(1000);
            if (!state.modes.isPlaying) {
                break;
            }
            visualizeMST(state.lastStep, state.algoSteps);
            state.lastStep++;
        }
    }

    return {
        reload: () => {
            clearElements();
            createExample(scene, nodes, edges);
        },
        clearScene: () => {
            clearElements();
        },
        addNode: () => {
            toggleMode(null);
            createNode(scene, nodes);
        },
        removeNode: () => {
            toggleMode('removeNode');
        },
        addEdge: () => {
            toggleMode('addEdge');
        },
        removeEdge: () => {
            toggleMode('removeEdge');
        },
        selectStart: () => {
            toggleMode('selectStart');
        },
        startAlgo: () => {
            toggleMode(null);
            state.modes.isPlaying = !state.modes.isPlaying;
            playAlgo(state);
        },
        pauseAlgo: () => {
            state.modes.isPlaying = !state.modes.isPlaying;
        },
        cleanup: () => {
            clearElements();
            unbindEventListeners();
        },
    };
}
