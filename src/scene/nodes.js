import * as THREE from 'three';

const defineNode = (x, y, z) => {
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: '#02C874',
        transparent: true,
        opacity: 0.9,
    });
    const node = new THREE.Mesh(geometry, material);
    node.position.set(x, y, z);
    node.userData.start = false;
    return node;
};

export function createNode(scene, nodes, x = 0, y = 0, z = 0) {
    const node = defineNode(x, y, z);
    scene.add(node);
    nodes.push(node);
}

export function deleteNode(clickedNode, scene, nodes, edges) {
    scene.remove(clickedNode);
    const foundIndex = nodes.indexOf(clickedNode);
    if (foundIndex > -1) {
        nodes.splice(foundIndex, 1);
    }
    for (let i = edges.length - 1; i >= 0; i--) {
        const { nodeA, nodeB } = edges[i].userData;
        if (nodeA === clickedNode || nodeB === clickedNode) {
            scene.remove(edges[i]);
            scene.remove(edges[i].sprite);
            edges.splice(i, 1);
        }
    }
}

export function chooseStart(clickedNode, nodes) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].userData.start) {
            nodes[i].userData.start = false;
            nodes[i].material.color.set('#02C874');
            break;
        }
    }
    clickedNode.userData.start = true;
    clickedNode.material.color.set('#FF0000');
}
