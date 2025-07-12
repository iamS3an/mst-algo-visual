import '../styles/Sidebar.css';

function Sidebar({ isSidebarOpen, toggleSidebar, handleAlgo }) {
    return (
        <div className="sidebar-container">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isSidebarOpen ? '<' : '>'}
            </button>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-item" onClick={() => handleAlgo('prim')}>
                    Prim
                </div>
                <div className="sidebar-item" onClick={() => handleAlgo('kruskal')}>
                    Kruskal
                </div>
            </div>
        </div>
    );
}

export default Sidebar;