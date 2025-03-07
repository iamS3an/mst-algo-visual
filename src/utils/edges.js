import * as THREE from 'three';
import { isConnected, selectNode, resetSelections } from './utils';

const createWeightTexture = (weight) => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#FFE153';
    context.font = '60px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(weight.toString(), 32, 32);
    return new THREE.CanvasTexture(canvas);
};

export function defineEdge(nodeA, nodeB) {
    const weight = Math.round(nodeA.position.distanceTo(nodeB.position) / 5);
    const path = new THREE.CatmullRomCurve3([nodeA.position, nodeB.position]);
    const geometry = new THREE.TubeGeometry(path, 20, 0.3, 8, false);
    const material = new THREE.MeshBasicMaterial({
        color: '#7B7B7B',
        transparent: true,
        opacity: 0.8,
    });
    const edge = new THREE.Mesh(geometry, material);

    const weightTexture = createWeightTexture(weight);
    const spriteMaterial = new THREE.SpriteMaterial({
        map: weightTexture,
        transparent: true,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    const midPoint = path.getPointAt(0.5);
    sprite.position.copy(midPoint);
    sprite.scale.set(5, 5, 1);
    edge.sprite = sprite;
    edge.userData = { nodeA, nodeB };

    return edge;
}

export function updateEdge(edge) {
    const { nodeA, nodeB } = edge.userData;
    const newEdge = defineEdge(nodeA, nodeB);
    edge.geometry.dispose();
    edge.geometry = newEdge.geometry;
    edge.sprite.position.copy(newEdge.sprite.position);
    edge.sprite.material.map = newEdge.sprite.material.map;
}

export function createEdge(clickedNode, scene, edges, nodesForEdge) {
    if (!selectNode(clickedNode, nodesForEdge)) return;
    if (nodesForEdge.length === 2) {
        const [node1, node2] = nodesForEdge;
        if (!isConnected(node1, node2, edges)) {
            const edge = defineEdge(node1, node2);
            scene.add(edge);
            scene.add(edge.sprite);
            edges.push(edge);
        }
        resetSelections(nodesForEdge);
    }
}

export function deleteEdge(clickedNode, scene, edges, nodesForEdge) {
    if (!selectNode(clickedNode, nodesForEdge)) return;
    if (nodesForEdge.length === 2) {
        const [node1, node2] = nodesForEdge;
        const foundEdge = isConnected(node1, node2, edges);
        if (foundEdge) {
            scene.remove(foundEdge);
            scene.remove(foundEdge.sprite);
            const index = edges.indexOf(foundEdge);
            if (index > -1) edges.splice(index, 1);
        }
        resetSelections(nodesForEdge);
    }
}