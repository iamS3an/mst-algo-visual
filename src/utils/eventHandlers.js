import * as THREE from 'three';
import { setSelected, resetSelected } from './utils';
import { updateEdge, createEdge, deleteEdge } from '../scene/edges';
import { deleteNode, chooseStart } from '../scene/nodes';

const updateRaycasterFromEvent = (raycaster, camera, pointer, event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
};

export function onWindowResize({ camera, renderer }) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

export function onPointerDown(event, params) {
    const { pointer, raycaster, camera, nodes, controls, plane, offset, state, scene, edges } = params;
    updateRaycasterFromEvent(raycaster, camera, pointer, event);
    const intersects = raycaster.intersectObjects(nodes);
    if (intersects.length > 0) {
        const clickedNode = intersects[0].object;
        if (state.modes.removeNode) {
            deleteNode(clickedNode, scene, nodes, edges);
        } else if (state.modes.addEdge) {
            if (setSelected(clickedNode, state.nodesForEdge) === 2) {
                createEdge(scene, edges, state.nodesForEdge);
                resetSelected(state.nodesForEdge);
            }
        } else if (state.modes.removeEdge) {
            if (setSelected(clickedNode, state.nodesForEdge) === 2) {
                deleteEdge(scene, edges, state.nodesForEdge);
                resetSelected(state.nodesForEdge);
            }
        } else if (state.modes.selectStart) {
            chooseStart(clickedNode, nodes);
        } else {
            state.selectedNode = clickedNode;
            controls.enabled = false;
            plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), state.selectedNode.position);
            offset.copy(intersects[0].point).sub(state.selectedNode.position);
        }
    }
}

export function onPointerMove(event, params) {
    const { pointer, raycaster, camera, plane, offset, state, edges } = params;
    if (!state.selectedNode) return;
    updateRaycasterFromEvent(raycaster, camera, pointer, event);
    const intersection = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, intersection)) {
        state.selectedNode.position.copy(intersection.sub(offset));
        for (let i = 0; i < edges.length; i++) {
            const { nodeA, nodeB } = edges[i].userData;
            if (nodeA === state.selectedNode || nodeB === state.selectedNode) {
                updateEdge(edges[i]);
            }
        }
    }
}

export function onPointerUp(params) {
    const { controls, state } = params;
    state.selectedNode = null;
    controls.enabled = true;
}
