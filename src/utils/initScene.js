import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

export function initScene(container) {
    if (container) container.innerHTML = '';
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#242424');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 125;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane();
    const offset = new THREE.Vector3();
    const state = {
        selectedNode: null,
        modes: {
            connectNodes: false,
            selectStart: false,
        },
        nodesForEdge: [],
    };

    return { scene, camera, renderer, controls, pointer, raycaster, plane, offset, state };
}
