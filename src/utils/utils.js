import { createEdge } from '../scene/edges';
import { createNode } from '../scene/nodes';

export function visualizeMST(targetStep, algoSteps) {
    algoSteps.forEach((obj) => {
        if (obj.userData.originalColor) {
            obj.material.color.copy(obj.userData.originalColor);
        }
    });
    for (let i = 0; i < targetStep; i++) {
        if (!algoSteps[i].userData.originalColor) {
            algoSteps[i].userData.originalColor = algoSteps[i].material.color.clone();
        }
        if (algoSteps[i].userData.weight) {
            // if (i > 0 && algoSteps[i - 1].userData.weight) {
            //     algoSteps[i - 1].material.color.copy(algoSteps[i - 1].userData.originalColor);
            // }
            algoSteps[i].material.color.set('#FFFFFF');
        } else {
            algoSteps[i].material.color.set('#007BFF');
        }
    }
}

export function setSelected(node, selectedNodes) {
    if (!selectedNodes.includes(node)) {
        selectedNodes.push(node);
        node.userData.originalColor = node.material.color.clone();
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

export function createExample(scene, nodes, edges, randomStart = false, numNodes = 9, randomEdges = 4, radius = 80) {
    const randomRadiusX = radius + (Math.random() * 10 - 5);
    const randomRadiusY = radius * 0.7 + (Math.random() * 10 - 5);
    for (let i = 0; i < numNodes - 2; i++) {
        const angle = (i / (numNodes - 2)) * Math.PI * 2;
        const x = randomRadiusX * Math.cos(angle) + (Math.random() * 6 - 3);
        const y = randomRadiusY * Math.sin(angle) + (Math.random() * 6 - 3);
        const z = Math.random() * 40 - 10;
        createNode(scene, nodes, x, y, z);
    }

    if (randomStart) {
        const startIndex = Math.floor(Math.random() * (numNodes - 2));
        const startNode = nodes[startIndex];
        startNode.material.color.set('#FF0000');
        startNode.userData.start = true;
    }

    for (let i = 0; i < numNodes - 2; i++) {
        createEdge(scene, edges, [nodes[i], nodes[(i + 1) % (numNodes - 2)]]);
    }

    createNode(scene, nodes, 10 + Math.random() * 30, Math.random() * 20 - 10, Math.random() * 20 - 10);
    createNode(scene, nodes, -10 - Math.random() * 30, Math.random() * 20 - 10, Math.random() * 20 - 10);

    for (let i = numNodes - 2; i < numNodes; i++) {
        const distances = [];
        for (let j = 0; j < nodes.length; j++) {
            if (j !== i) {
                distances.push({ index: j, distance: nodes[i].position.distanceTo(nodes[j].position) });
            }
        }
        distances.sort((a, b) => a.distance - b.distance);
        for (let k = 0; k < Math.min(randomEdges, distances.length); k++) {
            createEdge(scene, edges, [nodes[i], nodes[distances[k].index]]);
        }
    }
}
