const prim = (nodes, edges, algoSteps) => {
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

        // algoSteps.push(...candidateEdges);

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
};

const kruskal = (nodes, edges, algoSteps) => {
    algoSteps.length = 0;
    if (!nodes.length || !edges.length) return;

    const parent = new Map(nodes.map((n) => [n, n]));
    const rank = new Map(nodes.map((n) => [n, 0]));

    const find = (u) => {
        if (parent.get(u) !== u) {
            parent.set(u, find(parent.get(u)));
        }
        return parent.get(u);
    };

    const union = (a, b) => {
        const ra = find(a),
            rb = find(b);
        if (ra === rb) return false;
        const rA = rank.get(ra),
            rB = rank.get(rb);
        if (rA < rB) parent.set(ra, rb);
        else if (rA > rB) parent.set(rb, ra);
        else {
            parent.set(rb, ra);
            rank.set(ra, rA + 1);
        }
        return true;
    };

    const sortedEdges = [...edges].sort((e1, e2) => (e1.userData.weight || 0) - (e2.userData.weight || 0));

    const need = nodes.length - 1;
    let count = 0;

    for (const edge of sortedEdges) {
        const { nodeA, nodeB } = edge.userData;
        if (union(nodeA, nodeB)) {
            algoSteps.push(edge);
            if (!algoSteps.includes(nodeA)) algoSteps.push(nodeA);
            if (!algoSteps.includes(nodeB)) algoSteps.push(nodeB);
            if (++count === need) break;
        }
    }
};

export function runAlgo(algo, nodes, edges, algoSteps) {
    switch (algo) {
        case 'prim':
            prim(nodes, edges, algoSteps);
            break;
        case 'kruskal':
            kruskal(nodes, edges, algoSteps);
            break;
        default:
            console.error('Unknown algorithm:', algo);
    }
}
