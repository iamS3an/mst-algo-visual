import * as THREE from 'three';

export const createNode = (i, startNodeIndex, radius, nodeRadius, nodeCount) => {
    const geometry = new THREE.SphereGeometry(nodeRadius, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: i === startNodeIndex ? '#FF0000' : '#02C874',
        transparent: true,
        opacity: 0.9,
    });
    const node = new THREE.Mesh(geometry, material);
    const angle = (i / nodeCount) * Math.PI * 2;
    const randomRadius = radius + (Math.random() * 10 - 5);
    node.position.set(randomRadius * Math.cos(angle) + (Math.random() * 6 - 3), randomRadius * Math.sin(angle) + (Math.random() * 6 - 3), Math.random() * 40 - 20);
    return node;
};

export const createRandomNode = (radius = 60, nodeRadius = 5) => {
    const geometry = new THREE.SphereGeometry(nodeRadius, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: '#02C874',
        transparent: true,
        opacity: 0.9,
    });
    const node = new THREE.Mesh(geometry, material);
    const angle = Math.random() * Math.PI * 2;
    const randomRadius = radius + (Math.random() * 10 - 5);
    node.position.set(randomRadius * Math.cos(angle) + (Math.random() * 6 - 3), randomRadius * Math.sin(angle) + (Math.random() * 6 - 3), Math.random() * 40 - 20);
    return node;
};
