import { createEdge } from '../scene/edges';
import { createNode } from '../scene/nodes';

export function setSelected(node, nodesForEdge) {
    if (!node.userData.originalColor) {
        node.userData.originalColor = node.material.color.clone();
    }
    if (!nodesForEdge.includes(node)) {
        nodesForEdge.push(node);
        node.material.color.set('#F3FF9A');
    } else {
        nodesForEdge.splice(nodesForEdge.indexOf(node), 1);
        node.material.color.copy(node.userData.originalColor);
    }
    return nodesForEdge.length;
}

export function resetSelected(nodesForEdge) {
    nodesForEdge.forEach((node) => {
        if (node.userData.originalColor) {
            node.material.color.copy(node.userData.originalColor);
        }
    });
    nodesForEdge.length = 0;
}

export function createExample(scene, nodes, edges, radius = 60, numNodes = 8, randomEdges = 5) {
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
