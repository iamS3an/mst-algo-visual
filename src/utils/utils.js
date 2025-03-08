import { createEdge } from '../scene/edges';
import { createNode } from '../scene/nodes';

export function setSelected(node, selectedNodes) {
    if (!node.userData.originalColor) {
        node.userData.originalColor = node.material.color.clone();
    }
    if (!selectedNodes.includes(node)) {
        selectedNodes.push(node);
        node.material.color.set('#F3FF9A');
    } else {
        selectedNodes.splice(selectedNodes.indexOf(node), 1);
        node.material.color.copy(node.userData.originalColor);
    }
    return selectedNodes.length;
}

export function resetSelected(selectedNodes) {
    selectedNodes.forEach((node) => {
        if (node.userData.originalColor) {
            node.material.color.copy(node.userData.originalColor);
        }
    });
    selectedNodes.length = 0;
}

export function createExample(scene, nodes, edges, numNodes = 8, randomEdges = 5, radius = 60) {
    const randomRadius = radius + (Math.random() * 10 - 5);
    for (let i = 0; i < numNodes; i++) {
        const angle = (i / numNodes) * Math.PI * 2;
        const x = randomRadius * Math.cos(angle) + (Math.random() * 30 - 3);
        const y = randomRadius * Math.sin(angle) + (Math.random() * 30 - 3);
        const z = Math.random() * 40 - 10;
        createNode(scene, nodes, x, y, z);
    }

    const startIndex = Math.floor(Math.random() * numNodes);
    const startNode = nodes[startIndex];
    startNode.material.color.set('#FF0000');
    startNode.userData.start = true;

    for (let i = 0; i < numNodes; i++) {
        createEdge(scene, edges, [nodes[i], nodes[(i + 1) % numNodes]]);
    }

    for (let i = 0; i < randomEdges; i++) {
        const nodeAIndex = Math.floor(Math.random() * numNodes);
        let nodeBIndex = Math.floor(Math.random() * numNodes);
        while (nodeAIndex === nodeBIndex) {
            nodeBIndex = Math.floor(Math.random() * numNodes);
        }
        createEdge(scene, edges, [nodes[nodeAIndex], nodes[nodeBIndex]]);
    }
}
