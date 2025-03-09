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
    let sliderCallback = null;

    const setupExample = () => {
        createExample(scene, nodes, edges);
        prim(nodes, edges, state.algoSteps);
        if (sliderCallback) sliderCallback(0, state.algoSteps.length);
    };

    setupExample();

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => onWindowResize({ camera, renderer });

    const handlePointerEvents = {
        pointerdown: (e) => onPointerDown(e, { scene, camera, controls, pointer, raycaster, plane, offset, state, nodes, edges }),
        pointermove: (e) => onPointerMove(e, { camera, pointer, raycaster, plane, offset, state, nodes, edges }),
        pointerup: () => onPointerUp({ controls, state }),
    };

    const eventListeners = [
        ['resize', handleResize],
        ['pointerdown', handlePointerEvents.pointerdown],
        ['pointermove', handlePointerEvents.pointermove],
        ['pointerup', handlePointerEvents.pointerup],
    ];

    const updateEventListeners = (add = true) => {
        eventListeners.forEach(([type, handler]) => window[add ? 'addEventListener' : 'removeEventListener'](type, handler));
    };
    updateEventListeners();

    const clearElements = () => {
        toggleMode(null);
        state.algoSteps.length = 0;
        state.lastStep = 0;

        nodes.forEach((node) => scene.remove(node));
        nodes.length = 0;

        edges.forEach((edge) => {
            scene.remove(edge);
            scene.remove(edge.sprite);
        });
        edges.length = 0;

        if (sliderCallback) sliderCallback(0, 0);
    };

    const toggleMode = (mode) => {
        Object.keys(state.modes).forEach((key) => {
            state.modes[key] = key === mode ? !state.modes[key] : false;
        });

        state.selectedNodes.forEach((node) => node.material.color.copy(node.userData.originalColor));
        state.selectedNodes.length = 0;
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

    const uiController = {
        reload: () => {
            clearElements();
            setupExample();
        },
        clearScene: clearElements,
        addNode: () => {
            toggleMode(null);
            createNode(scene, nodes);
        },
        removeNode: () => toggleMode('removeNode'),
        addEdge: () => toggleMode('addEdge'),
        removeEdge: () => toggleMode('removeEdge'),
        selectStart: () => toggleMode('selectStart'),
        playAlgo: () => {
            if (state.lastStep >= state.algoSteps.length) {
                state.algoSteps.forEach((obj) => obj.material.color.copy(obj.userData.originalColor));
                state.lastStep = 0;
                if (sliderCallback) sliderCallback(0, state.algoSteps.length);
            } else {
                toggleMode(null);
                state.modes.isPlaying = true;
                executeAlgo();
            }
        },
        pauseAlgo: () => {
            state.modes.isPlaying = false;
        },
        setStep: (step) => {
            visualizeMST(step, state.algoSteps);
            state.lastStep = step;
            if (step === 0) {
                state.modes.isPlaying = false;
            }
        },
        setUpdateSlider: (callback) => {
            sliderCallback = callback;
            sliderCallback(state.lastStep, state.algoSteps.length);
        },
        cleanup: () => {
            clearElements();
            updateEventListeners(false);
            sliderCallback = null;
        },
    };

    return uiController;
}
