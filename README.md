# Minimum Spanning Tree Algorithm Visualization

Visit the live demo at: [iamS3an.github.io/mst-algo-visual](https://iamS3an.github.io/mst-algo-visual)

## Overview
This is a web-based interactive visualization tool for Minimum Spanning Tree (MST) algorithms. Through dynamic animations and user interactions, it helps users understand how the Prim's algorithm finds the minimum spanning tree in graphs. The tool utilizes Three.js to provide 3D visualization effects, making algorithm learning more intuitive and engaging.

## Features
**1. Interactive Graph Editing**
- Add/Delete nodes
- Create/Remove edges
- Select starting points
- Auto-generate example graphs

**2. Algorithm Visualization**  
- Step-by-step demonstration of Prim's algorithm execution
- Color-coded highlighting of visited nodes and selected edges
- Adjustable playback speed and manual slider controls

**3. Fully Web-Based**
- No installation required, runs directly in the browser
- Responsive design, adapts to different device sizes
- 3D interactive interface

## Usage Guide

### Basic Operations
- **Add Node**: Click the "Add Node" button, then click anywhere on the screen
- **Delete Node**: Click the "Remove Node" button, then select the node to delete
- **Connect Edges**: Click the "Add Edge" button, then select two nodes to connect
- **Remove Edges**: Click the "Remove Edge" button, then select two connected nodes
- **Select Start Point**: Click the "Select Start Point" button, then choose a node as the algorithm's starting point
- **Load Example**: Click the "Example" button to automatically generate a sample graph
- **Clear Screen**: Click the "Clear" button to remove all nodes and edges

### Algorithm Controls
- **Play/Pause**: Use the play/pause button in the bottom control panel to control algorithm execution
- **Reset**: Click the reset button to return to the initial algorithm state
- **Step Control**: Use the slider to manually control the algorithm's progress

## Technical Implementation

### Core Technologies
- **React**: Building the user interface
- **Three.js**: Providing 3D rendering and interaction capabilities
- **JavaScript**: Implementing algorithm logic and event handling

### Project Structure
```
src/
├── components/        # React components
│   ├── Interface.jsx
│   ├── ControlButton.jsx
│   └── PlaybackControls.jsx
├── scene/             # Three.js scene related
│   ├── createScene.js
│   ├── initScene.js
│   ├── nodes.js
│   └── edges.js
├── utils/             # Utility functions
│   ├── algo.js
│   ├── eventHandlers.js
│   └── utils.js
└── styles/            # CSS styles
```

## Algorithm Details
This project implements Prim's algorithm, a common minimum spanning tree algorithm. The algorithm starts from a specified starting point and gradually expands the connected node set:

1. Start from the initial node
2. In each step, find all edges connecting visited and unvisited nodes
3. Select the edge with the minimum weight and add it to the minimum spanning tree
4. Add the new node to the visited set
5. Repeat steps 2-4 until all nodes are visited or cannot continue

## Contact
Feel free to contact me at:
Sean Lin - seanlin12345@gmail.com
