import { initScene } from './initScene';
import { onWindowResize, onPointerDown, onPointerMove, onPointerUp } from '../utils/eventHandlers';
import { createExample } from '../utils/utils';
import { createNode } from './nodes';

export function createScene(container) {
    if (container) container.innerHTML = '';
    const { scene, camera, renderer, controls, pointer, raycaster, plane, offset, state } = initScene(container);

    const nodes = [];
    const edges = [];

    createExample(scene, nodes, edges);

    const handleResize = () => onWindowResize({ camera, renderer });
    const handlePointerDown = (event) => onPointerDown(event, { pointer, raycaster, camera, nodes, controls, plane, offset, state, scene, edges });
    const handlePointerMove = (event) => onPointerMove(event, { pointer, raycaster, camera, plane, offset, state, edges });
    const handlePointerUp = () => onPointerUp({ controls, state });

    const eventListeners = [
        { type: 'resize', handler: handleResize, options: false },
        { type: 'pointerdown', handler: handlePointerDown, options: false },
        { type: 'pointermove', handler: handlePointerMove, options: false },
        { type: 'pointerup', handler: handlePointerUp, options: false },
    ];

    const bindEventListeners = () => eventListeners.forEach((evt) => window.addEventListener(evt.type, evt.handler, evt.options));
    bindEventListeners();

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();

    const unbindEventListeners = () => eventListeners.forEach((evt) => window.removeEventListener(evt.type, evt.handler, evt.options));
    
    const toggleMode = (modeName) => {
        const newModeValue = !state.modes[modeName];
        Object.keys(state.modes).forEach((key) => {
            state.modes[key] = key === modeName ? newModeValue : false;
        });
        state.nodesForEdge.forEach((node) => node.material.color.copy(node.userData.originalColor));
        state.nodesForEdge.length = 0;
    };

    const clearElement = () => {
        toggleMode(null);
        nodes.forEach((node) => scene.remove(node));
        nodes.length = 0;
        edges.forEach((edge) => {
            scene.remove(edge);
            scene.remove(edge.sprite);
        });
        edges.length = 0;
    }

    return {
        reload: () => {
            clearElement();
            createExample(scene, nodes, edges);
        },
        clearScene: () => {
            clearElement();
        },
        addNode: () => {
            toggleMode(null);
            createNode(scene, nodes, nodeRadius);
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
        cleanup: () => {
            unbindEventListeners();
        },
    };
}
