# Minimum Spanning Tree Algorithm Visualization

Visit the live demo at: [iamS3an.github.io/mst-algo-visual](https://iamS3an.github.io/mst-algo-visual)

## Overview
This is a web-based interactive visualization tool for Minimum Spanning Tree (MST) algorithms. Through dynamic animations and user interactions, it helps users understand how prim's and kruskal algorithm finds the minimum spanning tree in graphs. The tool utilizes Three.js to provide 3D visualization effects, making algorithm learning more intuitive and engaging.

## Features
**1. Interactive Graph Editing**
- Add/Delete nodes
- Create/Remove edges
- Select starting points for prim's algorithm
- Auto-generate example graphs
- Switch to experience another algorithm

**2. Algorithm Visualization**  
- Step-by-step demonstration of Prim's algorithm execution
- Color-coded highlighting of visited nodes and selected edges
- Adjustable playback speed and manual slider controls
- Dynamic hint for the algorithm proceeding stage

**3. Fully Web-Based**
- No installation required, runs directly in the browser
- Light-weighted design, available for different access methods
- 3D interactive interface allowing freely exploration

## Usage Guide

### Basic Operations
- **Add Node**: Click the "Add Node" button, then click anywhere on the screen
- **Delete Node**: Click the "Remove Node" button, then select the node to delete
- **Connect Edges**: Click the "Add Edge" button, then select two nodes to connect
- **Remove Edges**: Click the "Remove Edge" button, then select two connected nodes
- **Select Start Point**: Click the "Select Start Point" button, then choose a node as the algorithm's starting point
- **Load Example**: Click the "Example" button to automatically generate a sample graph
- **Clear Screen**: Click the "Clear" button to remove all nodes and edges
- **Switch Algorithm**: Click the sidebar on the bottom-left corner and choose the algorithm to display the result

### Algorithm Controls
- **Play/Pause**: Use the play/pause button in the bottom control panel to control algorithm execution
- **Reset**: Click the reset button to return to the initial algorithm state
- **Step Control**: Use the slider to manually control the algorithm's progress

## Technical Implementation

### Core Technologies
- **React**: Building the user interface and handle the communication of the components
- **Three.js**: Providing 3D rendering and interaction capabilities
- **JavaScript**: Implementing algorithm logic and event handling

### Project Structure
```
src/
├── components/        # React components
│   ├── Interface.jsx
│   ├── ControlButton.jsx
│   ├── PlaybackControls.jsx
│   └── Sidebar.jsx
├── scene/             # Three.js scene related
│   ├── manageScene.js
│   ├── initScene.js
│   ├── nodes.js
│   └── edges.js
├── utils/             # Utility functions
│   ├── algo.js
│   ├── handleEvents.js
│   └── utils.js
└── styles/            # CSS styles
```

## Algorithm Details
This project implements two common minimum spanning tree algorithms: **Prim's Algorithm** and **Kruskal's Algorithm**. Use the sidebar on the bottom-left corner in order to toggle between them.

### Prim's Algorithm
1. Choose a starting node and add it to the visited set.  
2. Find all edges connecting visited and unvisited nodes.  
3. Select the edge with the minimum weight, add it to the tree, and mark the new node as visited.  
4. Repeat steps 2–3 until all nodes are visited or no edges remain.

### Kruskal's Algorithm
1. Sort all edges by weight in non-decreasing order.  
2. Iterate through the sorted edges and add each edge to the tree if it does not form a cycle (using a Union-Find data structure).  
3. Repeat step 2 until the tree has (number of nodes – 1) edges or no edges remain.  

## Contact
Feel free to contact me at:
Huan-Cheng Lin - seanlin12345@gmail.com
