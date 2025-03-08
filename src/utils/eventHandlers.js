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
    const { scene, camera, controls, pointer, raycaster, plane, offset, state, nodes, edges } = params;
    updateRaycasterFromEvent(raycaster, camera, pointer, event);
    const intersects = raycaster.intersectObjects(nodes);
    if (intersects.length > 0) {
        if (state.modes.removeNode) {
            deleteNode(scene, nodes, edges, intersects[0].object);
        } else if (state.modes.addEdge) {
            if (setSelected(intersects[0].object, state.selectedNodes) === 2) {
                createEdge(scene, edges, state.selectedNodes);
                resetSelected(state.selectedNodes);
            }
        } else if (state.modes.removeEdge) {
            if (setSelected(intersects[0].object, state.selectedNodes) === 2) {
                deleteEdge(scene, edges, state.selectedNodes);
                resetSelected(state.selectedNodes);
            }
        } else if (state.modes.selectStart) {
            chooseStart(nodes, intersects[0].object);
        } else {
            state.clickedNode = intersects[0].object;
            controls.enabled = false;
            plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), state.clickedNode.position);
            offset.copy(intersects[0].point).sub(state.clickedNode.position);
        }
    }
}

export function onPointerMove(event, params) {
    const { camera, pointer, raycaster, plane, offset, state, edges } = params;
    if (!state.clickedNode) return;
    updateRaycasterFromEvent(raycaster, camera, pointer, event);
    const intersection = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, intersection)) {
        state.clickedNode.position.copy(intersection.sub(offset));
        for (let i = 0; i < edges.length; i++) {
            const { nodeA, nodeB } = edges[i].userData;
            if (nodeA === state.clickedNode || nodeB === state.clickedNode) {
                updateEdge(edges[i]);
            }
        }
    }
}

export function onPointerUp(params) {
    const { controls, state } = params;
    state.clickedNode = null;
    controls.enabled = true;
}
