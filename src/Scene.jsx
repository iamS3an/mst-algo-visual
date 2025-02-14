import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const Scene = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const nodesRef = useRef([]);
    const edgesRef = useRef([]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
        }

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#242424');
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 120;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);
        renderer.gammaOutput = true;
        renderer.shadowMap.enabled = true;

        const nodes = [];
        const edges = [];
        const nodeCount = 10;
        const radius = 60;
        const nodeRadius = 5;

        const startNodeIndex = Math.floor(Math.random() * nodeCount);

        for (let i = 0; i < nodeCount; i++) {
            const geometry = new THREE.SphereGeometry(nodeRadius, 32, 32);
            const material = new THREE.MeshBasicMaterial({
                color: i === startNodeIndex ? '#FF0000' : '#02C874',
                transparent: true,
                opacity: 0.9,
            });

            const node = new THREE.Mesh(geometry, material);

            const angle = (i / nodeCount) * Math.PI * 2;
            const randomRadius = radius + (Math.random() * 10 - 5);
            node.position.set(
                randomRadius * Math.cos(angle) + (Math.random() * 6 - 3),
                randomRadius * Math.sin(angle) + (Math.random() * 6 - 3),
                Math.random() * 40 - 20
            );

            scene.add(node);
            nodes.push(node);
        }
        nodesRef.current = nodes;

        const createEdge = (nodeA, nodeB) => {
            let weight = Math.round(nodeA.position.distanceTo(nodeB.position) / 5);

            let path = new THREE.CatmullRomCurve3([nodeA.position, nodeB.position]);
            let geometry = new THREE.TubeGeometry(path, 20, 0.3, 8, false);
            let material = new THREE.MeshBasicMaterial({
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

            sceneRef.current.add(edge);
            sceneRef.current.add(sprite);
            edges.push(edge);
        };

        const updateEdge = (edge) => {
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

        for (let i = 0; i < nodeCount; i++) {
            createEdge(nodes[i], nodes[(i + 1) % nodeCount]);
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
                    return (positions[0].equals(nodeA.position) && positions[1].equals(nodeB.position)) ||
                           (positions[0].equals(nodeB.position) && positions[1].equals(nodeA.position));
                });

                if (!isConnected) {
                    createEdge(nodeA, nodeB);
                }
            }
        };

        addRandomEdges(5);
        edgesRef.current = edges;

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
        let selectedNode = null;
        const plane = new THREE.Plane();
        const offset = new THREE.Vector3();

        function onPointerDown(event) {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObjects(nodesRef.current);
            if (intersects.length > 0) {
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
                edgesRef.current.forEach(edge => {
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

        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.domElement.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            renderer.dispose();
        };
    }, []);

    const handleReload = () => {
        window.location.reload();
    };

    const handleClearCanvas = () => {
        if (sceneRef.current) {
            nodesRef.current.forEach((node) => {
                sceneRef.current.remove(node);
            });
            edgesRef.current.forEach((edge) => {
                sceneRef.current.remove(edge);
                if (edge.sprite) {
                    sceneRef.current.remove(edge.sprite);
                }
            });
            nodesRef.current = [];
            edgesRef.current = [];
        }
    };

    const handleAddNode = () => {
        if (sceneRef.current) {
            const radius = 60;
            const nodeRadius = 5;
            const geometry = new THREE.SphereGeometry(nodeRadius, 32, 32);
            const material = new THREE.MeshBasicMaterial({
                color: '#02C874',
                transparent: true,
                opacity: 0.9,
            });
            const node = new THREE.Mesh(geometry, material);
            const angle = Math.random() * Math.PI * 2;
            const randomRadius = radius + (Math.random() * 10 - 5);
            node.position.set(
                randomRadius * Math.cos(angle) + (Math.random() * 6 - 3),
                randomRadius * Math.sin(angle) + (Math.random() * 6 - 3),
                Math.random() * 40 - 20
            );
            sceneRef.current.add(node);
            nodesRef.current.push(node);
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <div ref={containerRef}></div>
            <button
                onClick={handleReload}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#008000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#006400'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#008000'}>
                Example
            </button>
            <button
                onClick={handleClearCanvas}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#FF5733',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#C70039'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FF5733'}>
                Clear
            </button>
            <button
                onClick={handleAddNode}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}>
                Add Node
            </button>
        </div>
    );
};

export default Scene;
