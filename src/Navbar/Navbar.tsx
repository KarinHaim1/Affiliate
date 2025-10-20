import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img id='logo' src="logo.jpg" alt="logo" />
      <div className="nav-links">
        <Link to="/">בית</Link>
        <Link to="/category/clothes">בגדים</Link>
        <Link to="/category/electronics">אלקטרוניקה</Link>
        <Link to="/category/home">כלי בית</Link>
                 <img id='menu' src="menu.png" alt="menu" />

      </div>
    </nav>
  );
};

export default Navbar
