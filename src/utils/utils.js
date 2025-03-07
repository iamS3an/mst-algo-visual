import { defineEdge } from './edges';
import { createNode } from './nodes';

export function isConnected(nodeA, nodeB, edges) {
    const foundEdge = edges.find((edge) => {
        const positions = edge.geometry.parameters.path.points;
        return (positions[0].equals(nodeA.position) && positions[1].equals(nodeB.position)) || (positions[0].equals(nodeB.position) && positions[1].equals(nodeA.position));
    });
    return foundEdge || null;
};

export function selectNode(node, nodesForEdge) {
    if (!node.userData.originalColor) {
        node.userData.originalColor = node.material.color.clone();
    }
    if (!nodesForEdge.includes(node)) {
        nodesForEdge.push(node);
        node.material.color.set('#F3FF9A');
        return true;
    } else {
        nodesForEdge.splice(nodesForEdge.indexOf(node), 1);
        node.material.color.copy(node.userData.originalColor);
        return false;
    }
};

export function resetSelections(nodesForEdge) {
    nodesForEdge.forEach((node) => node.material.color.copy(node.userData.originalColor));
    nodesForEdge.length = 0;
};

export function createExample(scene, nodes, edges, numNodes, randomEdges, radius, nodeRadius) {
    const randomRadius = radius + (Math.random() * 10 - 5);
    for (let i = 0; i < numNodes; i++) {
        const angle = (i / numNodes) * Math.PI * 2;
        const x = randomRadius * Math.cos(angle) + (Math.random() * 6 - 3);
        const y = randomRadius * Math.sin(angle) + (Math.random() * 6 - 3);
        const z = Math.random() * 40 - 10;
        createNode(scene, nodes, nodeRadius, x, y, z);
    }

    const startIndex = Math.floor(Math.random() * numNodes);
    const startNode = nodes[startIndex];
    startNode.material.color.set('#FF0000');
    startNode.userData.start = true;

    for (let i = 0; i < numNodes; i++) {
        const edge = defineEdge(nodes[i], nodes[(i + 1) % numNodes]);
        scene.add(edge);
        scene.add(edge.sprite);
        edges.push(edge);
    }

    for (let i = 0; i < randomEdges; i++) {
        const nodeAIndex = Math.floor(Math.random() * numNodes);
        let nodeBIndex = Math.floor(Math.random() * numNodes);
        while (nodeAIndex === nodeBIndex) {
            nodeBIndex = Math.floor(Math.random() * numNodes);
        }
        const nodeA = nodes[nodeAIndex];
        const nodeB = nodes[nodeBIndex];
        if (!isConnected(nodeA, nodeB, edges)) {
            const edge = defineEdge(nodeA, nodeB);
            scene.add(edge);
            scene.add(edge.sprite);
            edges.push(edge);
        }
    }
}
