import { createEdge } from './edges';
import { createNode } from './nodes';

export function updatePointer(event, pointer) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

export function isConnected(nodeA, nodeB, edges) {
    return edges.some((edge) => {
        const positions = edge.geometry.parameters.path.points;
        return (positions[0].equals(nodeA.position) && positions[1].equals(nodeB.position)) || (positions[0].equals(nodeB.position) && positions[1].equals(nodeA.position));
    });
}

export function updateEdge(edge) {
    const { nodeA, nodeB } = edge.userData;
    const newEdge = createEdge(nodeA, nodeB);
    edge.geometry.dispose();
    edge.geometry = newEdge.geometry;
    edge.sprite.position.copy(newEdge.sprite.position);
    edge.sprite.material.map = newEdge.sprite.material.map;
    return edge;
}

export function selectStart(clickedNode, nodes) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].userData.start) {
            nodes[i].userData.start = false;
            nodes[i].material.color.set('#02C874');
            break;
        }
    }
    clickedNode.userData.start = true;
    clickedNode.material.color.set('#FF0000');
    return nodes;
    
}

export function connectNodes(clickedNode, scene, edges, nodesForEdge) {
    if (!clickedNode.userData.originalColor) {
        clickedNode.userData.originalColor = clickedNode.material.color.clone();
    }
    if (!nodesForEdge.includes(clickedNode)) {
        nodesForEdge.push(clickedNode);
        clickedNode.material.color.set('#F3FF9A');
    } else {
        nodesForEdge = nodesForEdge.filter((node) => node !== clickedNode);
        clickedNode.material.color.copy(clickedNode.userData.originalColor);
        return nodesForEdge;
    }
    if (nodesForEdge.length === 2) {
        const [node1, node2] = nodesForEdge;
        if (!isConnected(node1, node2, edges)) {
            const edge = createEdge(node1, node2);
            scene.add(edge);
            scene.add(edge.sprite);
            edges.push(edge);
        }
        nodesForEdge.forEach((node) => {
            node.material.color.copy(node.userData.originalColor);
        });
        return [];
    }
    return nodesForEdge;
}

export function createExample(scene, nodes, edges, numNodes, randomEdges, radius, nodeRadius) {
    const randomRadius = radius + (Math.random() * 10 - 5);
    for (let i = 0; i < numNodes; i++) {
        const node = createNode(nodeRadius);
        const angle = (i / numNodes) * Math.PI * 2;
        const x = randomRadius * Math.cos(angle) + (Math.random() * 6 - 3);
        const y = randomRadius * Math.sin(angle) + (Math.random() * 6 - 3);
        const z = Math.random() * 40 - 10;
        node.position.set(x, y, z);
        scene.add(node);
        nodes.push(node);
    }

    const startIndex = Math.floor(Math.random() * numNodes);
    const startNode = nodes[startIndex];
    startNode.material.color.set('#FF0000');
    startNode.userData.start = true;

    for (let i = 0; i < numNodes; i++) {
        const edge = createEdge(nodes[i], nodes[(i + 1) % numNodes]);
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
            const edge = createEdge(nodeA, nodeB);
            scene.add(edge);
            scene.add(edge.sprite);
            edges.push(edge);
        }
    }
}
