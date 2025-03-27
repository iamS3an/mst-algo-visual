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

        algoSteps.push(...candidateEdges);

        const minEdge = candidateEdges.reduce((min, edge) => {
            const minWeight = min.userData.weight || 0;
            const edgeWeight = edge.userData.weight || 0;
            return edgeWeight < minWeight ? edge : min;
        });
        if (algoSteps[algoSteps.length - 1] !== minEdge) {
            algoSteps.push(minEdge);
        }
        
        const { nodeA, nodeB } = minEdge.userData;
        const nodeToAdd = visited.has(nodeA) ? nodeB : nodeA;
        visited.add(nodeToAdd);
        algoSteps.push(nodeToAdd);
    }
}
