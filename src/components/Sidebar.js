import React, { useState } from 'react';
import '../css/Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Carbon Cell</div>
      <ul className="nav-list">
      <div className="input-container">
      <span>🔍</span> <input type="text" placeholder="Search..." />
      </div>
        <li className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`} onClick={() => handleItemClick('Home')}>
          <span>🏠</span> Home
        </li>
        <li className={`nav-item ${activeItem === 'Organization' ? 'active' : ''}`} onClick={() => handleItemClick('Organization')}>
          <span>🏢</span> Organization
        </li>
        <li className={`nav-item ${activeItem === 'Assets' ? 'active' : ''}`} onClick={() => handleItemClick('Assets')}>
          <span>💼</span> Assets
        </li>
        <li className={`nav-item ${activeItem === 'Trade' ? 'active' : ''}`} onClick={() => handleItemClick('Trade')}>
          <span>📈</span> Trade
        </li>
        <li className={`nav-item ${activeItem === 'History' ? 'active' : ''}`} onClick={() => handleItemClick('History')}>
          <span>📜</span> History
        </li>
        <li className={`nav-item ${activeItem === 'Wallet' ? 'active' : ''}`} onClick={() => handleItemClick('Wallet')}>
          <span>💰</span> Wallet
        </li>
      </ul>
      <div className="extra-items">
        <ul className="nav-list">
          <li className={`nav-item ${activeItem === 'Notifications' ? 'active' : ''}`} onClick={() => handleItemClick('Notifications')}>
            <span>🔔</span> Notifications
          </li>
          <li className={`nav-item ${activeItem === 'Support' ? 'active' : ''}`} onClick={() => handleItemClick('Support')}>
            <span>❓</span> Support
          </li>
          <li className={`nav-item ${activeItem === 'Settings' ? 'active' : ''}`} onClick={() => handleItemClick('Settings')}>
            <span>⚙️</span> Settings
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
