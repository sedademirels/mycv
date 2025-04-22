import { useState } from 'react';
import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';



function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About Me' },
        { id: 'experience', label: 'Experience' },
        { id:'project', label:'Project'},
        { id: 'skills' , label:'Skills'}
      ];
  return (
    <nav className='navbar'>
      <div className='logo'>My Portfolio</div>
      <div className='menu-icon' onClick={toggleMenu}>{menuOpen ? <FaTimes/> : <FaBars/>}</div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-item"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <a  href="/SedaDemirelCV.pdf" download className='cv-button' onClick={closeMenu}>Download CV</a>
    </nav>
)
}

export default Navbar