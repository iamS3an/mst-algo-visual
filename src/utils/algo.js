export function prim(nodes, edges, algoSteps) {
    algoSteps.length = 0;

    const startNode = nodes.find((node) => node.userData && node.userData.start);
    if (!startNode) {
        return;
    }

    const visited = new Set();
    visited.add(startNode);
    algoSteps.push(startNode);

    while (visited.size < nodes.length) {
        const candidateEdges = edges.filter((edge) => {
            const { nodeA, nodeB } = edge.userData;
            return visited.has(nodeA) !== visited.has(nodeB);
        });

        if (candidateEdges.length === 0) {
            break;
        }

        candidateEdges.sort((a, b) => (a.userData.weight || 0) - (b.userData.weight || 0));
        const chosenEdge = candidateEdges[0];
        algoSteps.push(chosenEdge);

        const { nodeA, nodeB } = chosenEdge.userData;
        const nodeToAdd = visited.has(nodeA) ? nodeB : nodeA;
        visited.add(nodeToAdd);
        algoSteps.push(nodeToAdd);
    }
}
