import * as THREE from 'three';

const isConnected = (nodeA, nodeB, edges) => {
    const foundEdge = edges.find((edge) => {
        const positions = edge.geometry.parameters.path.points;
        return (positions[0].equals(nodeA.position) && positions[1].equals(nodeB.position)) || (positions[0].equals(nodeB.position) && positions[1].equals(nodeA.position));
    });
    return foundEdge || null;
};

const defineEdge = (nodeA, nodeB) => {
    const weight = Math.round(nodeA.position.distanceTo(nodeB.position) / 5);
    const path = new THREE.CatmullRomCurve3([nodeA.position, nodeB.position]);
    const geometry = new THREE.TubeGeometry(path, 20, 0.4, 8, false);
    const material = new THREE.MeshBasicMaterial({
        color: '#3B3B3B',
        transparent: true,
        opacity: 0.8,
    });
    const edge = new THREE.Mesh(geometry, material);

    const weightTexture = (() => {
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
    })();
    const spriteMaterial = new THREE.SpriteMaterial({
        map: weightTexture,
        transparent: true,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    const midPoint = path.getPointAt(0.5);
    sprite.position.copy(midPoint);
    sprite.scale.set(5, 5, 1);
    edge.sprite = sprite;
    edge.userData = { nodeA, nodeB, weight };

    return edge;
};

export function createEdge(scene, edges, selectedNodes) {
    const [node1, node2] = selectedNodes;
    if (!isConnected(node1, node2, edges)) {
        const edge = defineEdge(node1, node2);
        scene.add(edge);
        scene.add(edge.sprite);
        edges.push(edge);
    }
}

export function deleteEdge(scene, edges, selectedNodes) {
    const [node1, node2] = selectedNodes;
    const foundEdge = isConnected(node1, node2, edges);
    if (foundEdge) {
        scene.remove(foundEdge);
        scene.remove(foundEdge.sprite);
        const index = edges.indexOf(foundEdge);
        if (index > -1) edges.splice(index, 1);
    }
}

export function updateEdge(edge) {
    const { nodeA, nodeB } = edge.userData;
    const newEdge = defineEdge(nodeA, nodeB);
    edge.geometry.dispose();
    edge.geometry = newEdge.geometry;
    edge.sprite.position.copy(newEdge.sprite.position);
    edge.sprite.material.map.dispose();
    edge.sprite.material.map = newEdge.sprite.material.map;
    edge.userData.weight = newEdge.userData.weight;
}
