import React from 'react';
import './Marketplace.scss';

function Marketplace() {
  return (
    <div className="body">
      <header className="section header">
        <div className="h1-container">
          <h1>Things: Trade Center</h1>
        </div>
        <div>
          <div className="WelcomeUser">Welcome, User</div>
          <div className="Library">Library</div>
        </div>
      </header>

      <div className="container">
        <div className="container-title">User 1</div>
        <nav className="section">
          <ul>
            <li>Chat Here</li>
            <li>Items to trade</li>
          </ul>
        </nav>
      </div>

      <div className="container2">
        <div className="container2-title">User 2</div>
        <nav className="section">
          <ul>
            <li>Chat Here</li>
            <li>Items to trade</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Marketplace;
