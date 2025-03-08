const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function prim(nodes, edges, algoSteps) {
    const startNode = nodes.find((node) => node.userData && node.userData.start);
    if (!startNode) {
        return;
    }
    const visited = new Set();
    visited.add(startNode);
    startNode.material.color.set('#007BFF');
	algoSteps.push(startNode);
    await sleep(1000);

    while (visited.size < nodes.length) {
        const candidateEdges = edges.filter((edge) => {
            const { nodeA, nodeB } = edge.userData;
            return (visited.has(nodeA) && !visited.has(nodeB)) || (visited.has(nodeB) && !visited.has(nodeA));
        });

        if (candidateEdges.length === 0) {
            break;
        }

        candidateEdges.sort((a, b) => {
            return (a.userData.weight || 0) - (b.userData.weight || 0);
        });

        const chosenEdge = candidateEdges[0];
        chosenEdge.material.color.set('#FFFFFF');
        algoSteps.push(chosenEdge);

        const { nodeA, nodeB } = chosenEdge.userData;
        if (visited.has(nodeA) && !visited.has(nodeB)) {
            visited.add(nodeB);
            nodeB.material.color.set('#007BFF');
			algoSteps.push(nodeB);
        } else if (visited.has(nodeB) && !visited.has(nodeA)) {
            visited.add(nodeA);
            nodeA.material.color.set('#007BFF');
			algoSteps.push(nodeA);
        }
        await sleep(1000);
    }
}
