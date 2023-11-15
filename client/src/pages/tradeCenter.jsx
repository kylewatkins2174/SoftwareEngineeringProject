import React from 'react';
import './tradeCenter.scss';

const TradeCenter = () => {
    return (
        <div className='body'>
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
                <div className="container-title">Items for Trade</div>
                <div className="item-section">
                    {/* Book Section */}
                    <div className="section">
                        <h2>Book:</h2>
                        <ul>
                            <li>Title: The Great Gatsby</li>
                            <li>Author: F. Scott Fitzgerald</li>
                            <li>Vol: Volume 1</li>
                        </ul>
                        <div className="user-section">
                            <h3>User:</h3>
                            <ul>
                                <li>User: Kyle</li>
                                {/* Add more user details as needed */}
                            </ul>
                        </div>
                    </div>

                    {/* Another Book Section */}
                    <div className="section">
                        <h2>Book:</h2>
                        <ul>
                            <li>Title: To Kill a Mockingbird</li>
                            <li>Author: Harper Lee</li>
                            <li>Vol: Volume 2</li>
                        </ul>
                        <div className="user-section">
                            <h3>User:</h3>
                            <ul>
                                <li>User: Travis</li>
                                {/* Add more user details as needed */}
                            </ul>
                        </div>
                    </div>

                    {/* Movie Section */}
                    <div className="section">
                        <h2>Movie:</h2>
                        <ul>
                            <li>Movie Title: The Titanic</li>
                            {/* Add more movie items as needed */}
                        </ul>
                        <div className="user-section">
                            <h3>User:</h3>
                            <ul>
                                <li>User: Ricky</li>
                                {/* Add more user details as needed */}
                            </ul>
                        </div>
                    </div>

                    {/* CD Section */}
                    <div className="section">
                        <h2>CD:</h2>
                        <ul>
                            <li>CD Artist/Band: Daves Matthews Band</li>
                            <li>CD Album: Crash</li>
                            {/* Add more CD items as needed */}
                        </ul>
                        <div className="user-section">
                            <h3>User:</h3>
                            <ul>
                                <li>User: Allison</li>
                                {/* Add more user details as needed */}
                            </ul>
                        </div>
                    </div>

                    {/* Vinyl Section */}
                    <div className="section">
                        <h2>Vinyl:</h2>
                        <ul>
                            <li>Vinyl Artist/Band: Evanescence</li>
                            <li>Vinyl Album: Fallen</li>
                            {/* Add more Vinyl items as needed */}
                        </ul>
                        <div className="user-section">
                            <h3>User:</h3>
                            <ul>
                                <li>User: Kelly</li>
                                {/* Add more user details as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeCenter;