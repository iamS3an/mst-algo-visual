import { initScene } from './initScene';
import { onWindowResize, onPointerDown, onPointerMove, onPointerUp } from '../utils/handleEvents';
import { createExample, visualizeMST } from '../utils/utils';
import { createNode } from './nodes';
import { runAlgo } from '../utils/algo';

export function manageScene(container) {
    if (container) container.innerHTML = '';

    const { scene, camera, renderer, controls, pointer, raycaster, plane, offset, state } = initScene(container);

    const nodes = [];
    const edges = [];
    let sliderCallback = null,
        hintCallback = null;

    const setupExample = () => {
        createExample(scene, nodes, edges, state.selectedAlgo === 'prim');
        runAlgo(state.selectedAlgo, nodes, edges, state.algoSteps, state.algoHints);
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
        pointermove: (e) => onPointerMove(e, { camera, pointer, raycaster, plane, offset, state, edges }),
        pointerup: () => onPointerUp({ controls, state, nodes, edges, sliderCallback }),
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

    const toggleMode = (mode) => {
        Object.keys(state.modes).forEach((key) => {
            state.modes[key] = key === mode ? !state.modes[key] : false;
        });

        state.selectedNodes.forEach((node) => node.material.color.copy(node.userData.originalColor));
        state.selectedNodes.length = 0;
    };

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

        sliderCallback(0, 0);
        hintCallback(0, 0);
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const executeAlgo = async () => {
        while (state.lastStep < state.algoSteps.length) {
            await sleep(1500);
            if (!state.isPlaying) {
                return;
            }
            state.lastStep++;
            visualizeMST(state.lastStep, state.algoSteps);
            sliderCallback(state.lastStep, state.algoSteps.length);
            hintCallback(state.algoHints[state.lastStep - 1]);
        }
    };

    const actionController = {
        clearScene: clearElements,
        genExample: () => {
            clearElements();
            setupExample();
            sliderCallback(0, state.algoSteps.length);
        },
        addNode: () => {
            toggleMode(null);
            createNode(scene, nodes);
        },
        removeNode: () => toggleMode('removeNode'),
        addEdge: () => toggleMode('addEdge'),
        removeEdge: () => toggleMode('removeEdge'),
        selectStart: () => toggleMode('selectStart'),
        chooseAlgo: (algo) => {
            toggleMode(null);
            state.selectedAlgo = algo;
            if (algo === 'kruskal') {
                for (let i = 0; i < nodes.length; i++) {
                    if (nodes[i].userData.start) {
                        nodes[i].userData.start = false;
                        nodes[i].material.color.set('#02C874');
                        nodes[i].userData.originalColor = nodes[i].material.color.clone();
                        break;
                    }
                }
            }
            runAlgo(state.selectedAlgo, nodes, edges, state.algoSteps, state.algoHints);
            sliderCallback(0, state.algoSteps.length);
        },
        playAlgo: () => {
            toggleMode(null);
            if (state.algoSteps.length > 0) {
                state.isPlaying = true;
                if (state.lastStep === state.algoSteps.length) {
                    state.algoSteps.forEach((obj) => obj.material.color.copy(obj.userData.originalColor));
                    state.lastStep = 0;
                    sliderCallback(0, state.algoSteps.length);
                }
                executeAlgo();
            }
        },
        pauseAlgo: () => {
            state.isPlaying = false;
        },
        updateHint: (callback) => {
            hintCallback = callback;
        },
        updateSlider: (callback) => {
            sliderCallback = callback;
            sliderCallback(0, state.algoSteps.length);
        },
        useSlider: (step) => {
            toggleMode(null);
            visualizeMST(step, state.algoSteps);
            if (step === state.algoSteps.length) {
                state.isPlaying = false;
            }
            state.lastStep = step;
            if (hintCallback) hintCallback(state.algoHints[step - 1]);
        },
        disposeResource: () => {
            clearElements();
            updateEventListeners(false);
            sliderCallback = null;
        },
    };

    return actionController;
}
