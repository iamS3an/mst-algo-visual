import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { createEdge, updateEdge } from './utils/edgeUtils';
import { createNode, createRandomNode } from './utils/nodeUtils';

export function Canvas(container) {
    if (container) container.innerHTML = '';
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#242424');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const nodes = [];
    const edges = [];
    const nodeCount = 10;
    const radius = 60;
    const nodeRadius = 5;
    const startNodeIndex = Math.floor(Math.random() * nodeCount);

    for (let i = 0; i < nodeCount; i++) {
        const node = createNode(i, startNodeIndex, radius, nodeRadius, nodeCount);
        scene.add(node);
        nodes.push(node);
    }

    for (let i = 0; i < nodeCount; i++) {
        createEdge(scene, nodes[i], nodes[(i + 1) % nodeCount], edges);
    }

    const addRandomEdges = (numEdges) => {
        for (let i = 0; i < numEdges; i++) {
            const nodeAIndex = Math.floor(Math.random() * nodeCount);
            let nodeBIndex = Math.floor(Math.random() * nodeCount);
            while (nodeAIndex === nodeBIndex) {
                nodeBIndex = Math.floor(Math.random() * nodeCount);
            }
            const nodeA = nodes[nodeAIndex];
            const nodeB = nodes[nodeBIndex];
            const isConnected = edges.some((edge) => {
                const positions = edge.geometry.parameters.path.points;
                return (positions[0].equals(nodeA.position) && positions[1].equals(nodeB.position)) || (positions[0].equals(nodeB.position) && positions[1].equals(nodeA.position));
            });
            if (!isConnected) {
                createEdge(scene, nodeA, nodeB, edges);
            }
        }
    };
    addRandomEdges(5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    const animate = () => {
        requestAnimationFrame(animate);
        nodes.forEach((node) => {
            node.rotation.x += 0.01;
            node.rotation.y += 0.01;
        });
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

    function handleEdgeNodeClick(clickedNode) {
        if (!clickedNode.userData.originalColor) {
            clickedNode.userData.originalColor = clickedNode.material.color.clone();
        }
        if (!selectedNodesForEdge.includes(clickedNode)) {
            selectedNodesForEdge.push(clickedNode);
            clickedNode.material.color.set('#F3FF9A');
        } else {
            selectedNodesForEdge = selectedNodesForEdge.filter((node) => node !== clickedNode);
            clickedNode.material.color.copy(clickedNode.userData.originalColor);
            return;
        }
        if (selectedNodesForEdge.length === 2) {
            const [node1, node2] = selectedNodesForEdge;
            const isConnected = edges.some((edge) => {
                const positions = edge.geometry.parameters.path.points;
                return (positions[0].equals(node1.position) && positions[1].equals(node2.position)) || (positions[0].equals(node2.position) && positions[1].equals(node1.position));
            });
            if (!isConnected) {
                createEdge(scene, node1, node2, edges);
            }
            selectedNodesForEdge.forEach((node) => {
                node.material.color.copy(node.userData.originalColor);
            });
            window.dispatchEvent(new Event('edgeComplete'));
            edgeMode = false;
            selectedNodesForEdge = [];
        }
    }

    function onPointerDown(event) {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(nodes);
        if (intersects.length > 0) {
            if (edgeMode) {
                handleEdgeNodeClick(intersects[0].object);
                return;
            }
            selectedNode = intersects[0].object;
            controls.enabled = false;
            plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), selectedNode.position);
            offset.copy(intersects[0].point).sub(selectedNode.position);
        }
    }

    function onPointerMove(event) {
        if (!selectedNode) return;
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
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
    }

    function onPointerUp() {
        selectedNode = null;
        controls.enabled = true;
    }

    renderer.domElement.addEventListener('pointerdown', onPointerDown, false);
    window.addEventListener('pointermove', onPointerMove, false);
    window.addEventListener('pointerup', onPointerUp, false);

    return {
        reload: () => window.location.reload(),
        clearCanvas: () => {
            nodes.forEach((node) => scene.remove(node));
            edges.forEach((edge) => {
                scene.remove(edge);
                if (edge.sprite) scene.remove(edge.sprite);
            });
            nodes.splice(0);
            edges.splice(0);
        },
        addNode: () => {
            const node = createRandomNode();
            scene.add(node);
            nodes.push(node);
        },
        addEdge: () => {
            if (edgeMode) {
                edgeMode = false;
            } else {
                edgeMode = true;
            }
            selectedNodesForEdge.forEach((node) => {
                node.material.color.copy(node.userData.originalColor);
            });
            selectedNodesForEdge = [];
        },
        cleanup: () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.domElement.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            renderer.dispose();
        },
    };
}
