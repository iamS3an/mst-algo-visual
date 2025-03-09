import { initScene } from './initScene';
import { onWindowResize, onPointerDown, onPointerMove, onPointerUp } from '../utils/eventHandlers';
import { createExample, visualizeMST } from '../utils/utils';
import { createNode } from './nodes';
import { prim } from '../utils/algo';

export function createScene(container) {
    if (container) container.innerHTML = '';
    const { scene, camera, renderer, controls, pointer, raycaster, plane, offset, state } = initScene(container);
    let sliderCallback = null;

    const nodes = [];
    const edges = [];

    createExample(scene, nodes, edges);
    prim(nodes, edges, state.algoSteps);


    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => onWindowResize({ camera, renderer });
    const handlePointerDown = (event) => onPointerDown(event, { scene, camera, controls, pointer, raycaster, plane, offset, state, nodes, edges });
    const handlePointerMove = (event) => onPointerMove(event, { camera, pointer, raycaster, plane, offset, state, nodes, edges });
    const handlePointerUp = () => onPointerUp({ controls, state });

    const eventListeners = [
        { type: 'resize', handler: handleResize, options: false },
        { type: 'pointerdown', handler: handlePointerDown, options: false },
        { type: 'pointermove', handler: handlePointerMove, options: false },
        { type: 'pointerup', handler: handlePointerUp, options: false },
    ];

    const updateEventListeners = (shouldAdd) => {
        eventListeners.forEach((evt) => {
            const method = shouldAdd ? 'addEventListener' : 'removeEventListener';
            window[method](evt.type, evt.handler, evt.options);
        });
    };
    updateEventListeners(true);

    const clearElements = () => {
        toggleMode(null);
        state.lastStep = 0;
        if (sliderCallback) sliderCallback(0, 0);
        state.algoSteps.length = 0;
        nodes.forEach((node) => scene.remove(node));
        nodes.length = 0;
        edges.forEach((edge) => {
            scene.remove(edge);
            scene.remove(edge.sprite);
        });
        edges.length = 0;
    };

    const toggleMode = (modeName) => {
        const newModeValue = !state.modes[modeName];
        Object.keys(state.modes).forEach((key) => {
            state.modes[key] = key === modeName ? newModeValue : false;
        });
        state.selectedNodes.forEach((node) => node.material.color.copy(node.userData.originalColor));
        state.selectedNodes.length = 0;
    };

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const executeAlgo = async () => {
        while (state.lastStep < state.algoSteps.length) {
            await sleep(1000);
            if (!state.modes.isPlaying) {
                return;
            }
            state.lastStep++;
            visualizeMST(state.lastStep, state.algoSteps);
            if (sliderCallback) sliderCallback(state.lastStep, state.algoSteps.length);
        }
    };

    return {
        reload: () => {
            clearElements();
            createExample(scene, nodes, edges);
            prim(nodes, edges, state.algoSteps);
            if (sliderCallback) sliderCallback(0, state.algoSteps.length);
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
        playAlgo: () => {
            toggleMode(null);
            state.modes.isPlaying = !state.modes.isPlaying;
            executeAlgo(state);
        },
        pauseAlgo: () => {
            state.modes.isPlaying = !state.modes.isPlaying;
            if (state.lastStep >= state.algoSteps.length) {
                state.algoSteps.forEach((obj) => {
                    obj.material.color.copy(obj.userData.originalColor);
                });
                state.lastStep = 0;
                if (sliderCallback) sliderCallback(0, state.algoSteps.length);
            }
        },
        setAlgoProgress: (stepIndex) => {
            visualizeMST(stepIndex, state.algoSteps);
            state.lastStep = stepIndex;
        },
        setUpdateSlider: (callback) => {
            sliderCallback = callback;
            if (sliderCallback) sliderCallback(state.lastStep, state.algoSteps.length);
        },
        cleanup: () => {
            clearElements();
            updateEventListeners(false);
            sliderCallback = null;
        },
    };
}
