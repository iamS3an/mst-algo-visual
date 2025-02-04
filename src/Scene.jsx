import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const Scene = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.innerHTML = '';
		}

		const scene = new THREE.Scene();
		scene.background = new THREE.Color('#242424');

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
			node.position.set(randomRadius * Math.cos(angle) + (Math.random() * 6 - 3), randomRadius * Math.sin(angle) + (Math.random() * 6 - 3), Math.random() * 40 - 20);

			scene.add(node);
			nodes.push(node);
		}

		const createEdge = (nodeA, nodeB) => {
			const weight = Math.round(nodeA.position.distanceTo(nodeB.position) / 5);

			const path = new THREE.CatmullRomCurve3([nodeA.position, nodeB.position]);
			const geometry = new THREE.TubeGeometry(path, 1, 0.3, 8, false);
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

			let position = 0.5;
			const midPoint = path.getPointAt(position);

			sprite.position.copy(midPoint);
			sprite.scale.set(5, 5, 1);
			edge.sprite = sprite;

			scene.add(edge);
			scene.add(sprite);
			edges.push(edge);
		};

		for (let i = 0; i < nodeCount; i++) {
			createEdge(nodes[i], nodes[(i + 1) % nodeCount]);
		}

		const addRandomEdges = (numEdges) => {
			const addedEdges = [];
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
					createEdge(nodeA, nodeB);
					addedEdges.push([nodeA, nodeB]);
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

		return () => {
			window.removeEventListener('resize', onWindowResize);
			renderer.dispose();
		};
	}, []);

	const handleReload = () => {
		window.location.reload();
	};

	return (
		<div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
			<div ref={containerRef}></div>
			<button onClick={handleReload} style={{ position: 'absolute', bottom: '20px', right: '20px', padding: '10px 20px', backgroundColor: '#008000', color: '#FFFFFF', border: 'none', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s ease' }}
				onMouseEnter={(e) => e.target.style.backgroundColor = '#006400'}
				onMouseLeave={(e) => e.target.style.backgroundColor = '#008000'}>
				Example
			</button>
		</div>
	);
};

export default Scene;
