// components/Sidebar.jsx
import React, { useState } from 'react';
import Menu from './Menu';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="sidebar-left">
      {/* Seção principal do sidebar */}
      <p>
        <i className="fas fa-chart-line"></i> Dashboard
      </p>
      <ul>
        <li className="item" onClick={toggleMenu}>
          <i className="fas fa-bars"></i> Menu
        </li>
        <li className="item">
          <i className="fas fa-home"></i> Home
        </li>
        <li className="item">
          <i className="fas fa-user"></i> Profile
        </li>
        <li className="item">
          <i className="fas fa-envelope"></i> Messages
        </li>
        <li className="item">
          <i className="fas fa-history"></i> History
        </li>
        <li className="item">
          <i className="fas fa-tasks"></i> Tasks
        </li>
      </ul>
      <ul>
        <li className="item">
          <i className="fas fa-users"></i> Community
        </li>
        <li className="item">
          <i className="fas fa-cog"></i> Settings
        </li>
        <li className="item">
          <i className="fas fa-question-circle"></i> Support
        </li>
        <li className="item">
          <i className="fas fa-shield-alt"></i> Privacy
        </li>
      </ul>

      {/* Menu recolhível */}
      {isMenuOpen && <Menu toggleSidebar={toggleMenu} />}
    </aside>
  );
};

export default Sidebar;