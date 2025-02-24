import * as THREE from 'three';

export const createEdge = (scene, nodeA, nodeB, edges) => {
    const weight = Math.round(nodeA.position.distanceTo(nodeB.position) / 5);
    const path = new THREE.CatmullRomCurve3([nodeA.position, nodeB.position]);
    const geometry = new THREE.TubeGeometry(path, 20, 0.3, 8, false);
    const material = new THREE.MeshBasicMaterial({
        color: '#7B7B7B',
        transparent: true,
        opacity: 0.8,
    });
    const edge = new THREE.Mesh(geometry, material);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 64;
    canvas.height = 64;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#FFE153';
    context.font = '60px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(weight.toString(), 32, 32);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    const midPoint = path.getPointAt(0.5);
    sprite.position.copy(midPoint);
    sprite.scale.set(5, 5, 1);
    edge.sprite = sprite;

    edge.userData = { nodeA, nodeB };

    scene.add(edge);
    scene.add(sprite);
    edges.push(edge);
};

export const updateEdge = (edge) => {
    const { nodeA, nodeB } = edge.userData;
    const newPath = new THREE.CatmullRomCurve3([nodeA.position, nodeB.position]);
    edge.geometry.dispose();
    edge.geometry = new THREE.TubeGeometry(newPath, 20, 0.3, 8, false);

    const midPoint = newPath.getPointAt(0.5);
    edge.sprite.position.copy(midPoint);
    const newWeight = Math.round(nodeA.position.distanceTo(nodeB.position) / 5);
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#FFE153';
    context.font = '60px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(newWeight.toString(), 32, 32);
    const newTexture = new THREE.CanvasTexture(canvas);
    edge.sprite.material.map = newTexture;
    edge.sprite.material.needsUpdate = true;
};
