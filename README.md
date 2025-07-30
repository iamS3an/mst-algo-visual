# Minimum Spanning Tree Algorithm Visualization

[Live Demo](https://iamS3an.github.io/mst-algo-visual)

## Overview

This is an interactive, web-based visualization tool for Minimum Spanning Tree (MST) algorithms, specifically **Prim's** and **Kruskal's** algorithms. It leverages Three.js for immersive 3D graph rendering, React for modular UI, and a stepwise animation engine to help learners explore and understand MST construction visually and interactively.

Key educational features:
- **Customizable 3D graphs** – users can freely add/remove nodes/edges, edit graph layouts, and adjust edge weights in real time.
- **Step-by-step algorithm animation** – clear color-coded highlights, playback controls, and explanatory hints guide learners through the MST building process.
- **Beginner-friendly UI** – simple controls, clear tooltips, and a focus on usability over complexity.

## Features

### 1. Interactive Graph Editing
- **Add/Delete Nodes**: Place or remove nodes in the 3D scene.
- **Create/Remove Edges**: Connect/disconnect nodes; edge weights auto-update based on 3D positions.
- **Drag and Move Nodes**: Rearrange nodes freely; edge weights adjust in real time.
- **Select Start Node (Prim's)**: Choose the root node interactively when using Prim's algorithm.
- **Auto-generate Example Graphs**: Instantly create a sample graph for demo or testing.
- **Clear Workspace**: Remove all elements to start fresh.
- **Switch Algorithms**: Easily toggle between Prim's and Kruskal's via the sidebar.

### 2. Algorithm Visualization & Playback
- **Stepwise Animation**: Play, pause, reset, and manually scrub through each algorithm step.
- **Color-coded Feedback**: MST nodes and edges are clearly distinguished at each step.
- **Synchronized Hints**: Contextual instructions explain every stage of the algorithm.
- **Responsive Design**: The 3D scene can be explored from any angle via mouse/touch controls.

### 3. Technology Stack
- **React**: UI logic and state management.
- **Three.js**: 3D rendering and interactive graph manipulation.
- **Vite**: Fast development server and build tool.
- **Pure Front-end**: No backend or server required—deploy anywhere.

## Usage Guide

### Basic Operations
- **Add Node**: Click “Add Node”, then click anywhere in the scene.
- **Remove Node**: Click “Remove Node”, then select a node to delete.
- **Add Edge**: Click “Add Edge”, then select two nodes to connect.
- **Remove Edge**: Click “Remove Edge”, then select two nodes to disconnect.
- **Select Start Node** (Prim’s only): Click “Select Start Point”, then choose a node.
- **Load Example**: Click “Example” to generate a demo graph.
- **Clear All**: Click “Clear All” to remove everything.
- **Switch Algorithm**: Use the sidebar at the lower left to toggle Prim/Kruskal.

### Algorithm Controls
- **Play/Pause**: Use the bottom control panel to start or pause the animation.
- **Reset**: Rewind the animation to the beginning.
- **Step Slider**: Scrub through steps manually; each step is explained via a hint message.

## Project Structure

```plaintext
src/
├── components/      # React UI components
│   ├── ControlButton.jsx
│   ├── PlaybackControl.jsx
│   └── Sidebar.jsx
├── scene/           # Three.js scene and management
│   ├── manageScene.js
│   └── initScene.js
├── utils/           # Algorithm and helper logic
│   ├── algoEngine.js
│   ├── edgeUtils.js
│   ├── eventHandler.js
│   ├── nodeUtils.js
│   └── visualHelper.js
├── styles/          # CSS modules
├── App.jsx          # Application container
├── main.jsx         # App entry point
└── index.html       # SPA entry
```

## Algorithm Details

This tool visualizes two classic MST algorithms:

### Prim's Algorithm
- Starts from a user-selected node.
- At each step, selects the smallest-weight edge connecting the growing tree to a new node.
- Repeats until all nodes are included.

### Kruskal's Algorithm
- Sorts all edges by increasing weight.
- Iteratively adds the next smallest edge that does **not** create a cycle (using Union-Find).
- Stops when all nodes are connected.

Visualizations include clear step highlights and contextual explanations, making it suitable for self-guided learning or classroom demonstrations.

## Development & Deployment

**Requirements**: Node.js >= v18

**Setup**:
```bash
npm install
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to view.

**Production Build**:
```bash
npm run build
```

**Deploy to GitHub Pages**:
```bash
npm run deploy
```
(Both homepage and Vite base URL are preconfigured.)


## Contact

**Huan-Cheng Lin**  
Email: seanlin12345@gmail.com