import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { updateEdge } from './edges';
import { createNode } from './nodes';
import { updatePointer, initExample, connectNodes } from './utils';

export function createScene(container) {
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

    const nodes = [];
    const edges = [];

    const exampleNodes = 10;
    const ramdomEdges = 5;
    const radius = 60;
    const nodeRadius = 5;

    initExample(scene, nodes, edges, exampleNodes, ramdomEdges, radius, nodeRadius);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    const animate = () => {
        requestAnimationFrame(animate);
        nodes.forEach((node) => {});
        controls.update();
        renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const plane = new THREE.Plane();
    const offset = new THREE.Vector3();
    let selectedNode = null;
    let edgeMode = false;
    let selectedNodesForEdge = [];

    const onPointerDown = (event) => {
        updatePointer(event, pointer);
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(nodes);
        if (intersects.length > 0) {
            if (edgeMode) {
                selectedNodesForEdge = connectNodes(intersects[0].object, scene, edges, selectedNodesForEdge, () => {
                    edgeMode = false;
                });
                return;
            }
            selectedNode = intersects[0].object;
            controls.enabled = false;
            plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), selectedNode.position);
            offset.copy(intersects[0].point).sub(selectedNode.position);
        }
    };
    window.addEventListener('pointerdown', onPointerDown, false);

    const onPointerMove = (event) => {
        if (!selectedNode) return;
        updatePointer(event, pointer);
        raycaster.setFromCamera(pointer, camera);
        const intersection = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(plane, intersection)) {
            selectedNode.position.copy(intersection.sub(offset));
            edges.forEach((edge) => {
                const { nodeA, nodeB } = edge.userData;
                if (nodeA === selectedNode || nodeB === selectedNode) {
                    updateEdge(edge);
                }
            });
        }
    };
    window.addEventListener('pointermove', onPointerMove, false);

    const onPointerUp = () => {
        selectedNode = null;
        controls.enabled = true;
    };
    window.addEventListener('pointerup', onPointerUp, false);

    return {
        reload: () => window.location.reload(),
        clearScene: () => {
            nodes.forEach((node) => scene.remove(node));
            edges.forEach((edge) => {
                scene.remove(edge);
                if (edge.sprite) scene.remove(edge.sprite);
            });
            nodes.splice(0);
            edges.splice(0);
        },
        addNode: () => {
            const node = createNode(nodeRadius);
            scene.add(node);
            nodes.push(node);
        },
        addEdge: () => {
            edgeMode = !edgeMode;
            selectedNodesForEdge.forEach((node) => {
                node.material.color.copy(node.userData.originalColor);
            });
            selectedNodesForEdge = [];
        },
        cleanup: () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
        },
    };
}
