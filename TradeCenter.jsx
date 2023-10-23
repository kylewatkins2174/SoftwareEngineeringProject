import React from 'react';
import './App.scss';

const App = () => {
    return (
        <div>
            <header className="section header">
                <h1>Things: Trade Center</h1>
                <div className="header-text">Welcome, User</div>
            </header>

            <div className="container">	
                <div className="container-title">User 1</div>
                <nav className="section">
                    <ul>
                        <li>How to Contact</li>
                        <li>Library</li>
                    </ul>
                </nav>
            </div>

            <div className="container2"> 
                <div className="container2-title">User 2</div>
                <nav className="section">
                    <ul>
                        <li>How to Contact</li>
                        <li>Library</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default App;
