import * as THREE from 'three';
import { updatePointer, deleteNode, connectNodes, disconnectNodes, updateEdge, selectStart } from './utils';

const updateRaycasterFromEvent = (raycaster, camera, pointer, event) => {
    updatePointer(event, pointer);
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
        if (state.modes.removeNode) {
            nodes, edges = deleteNode(intersects[0].object, scene, nodes, edges);
            return;
        }else if (state.modes.addEdge) {
            state.nodesForEdge = connectNodes(intersects[0].object, scene, edges, state.nodesForEdge);
            return;
        }else if (state.modes.removeEdge) {
            state.nodesForEdge = disconnectNodes(intersects[0].object, scene, edges, state.nodesForEdge);
            return;
        }else if (state.modes.selectStart) {
            nodes = selectStart(intersects[0].object, nodes);
            return;
        }
        state.selectedNode = intersects[0].object;
        controls.enabled = false;
        plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), state.selectedNode.position);
        offset.copy(intersects[0].point).sub(state.selectedNode.position);
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
                edges[i] = updateEdge(edges[i]);
            }
        }
    }
}

export function onPointerUp(params) {
    const { controls, state } = params;
    state.selectedNode = null;
    controls.enabled = true;
}
