import * as THREE from 'three';

export function createNode(nodeRadius) {
    const geometry = new THREE.SphereGeometry(nodeRadius, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: '#02C874',
        transparent: true,
        opacity: 0.9,
    });
    const node = new THREE.Mesh(geometry, material);
    node.position.set(0, 0, 0);

    return node;
}
