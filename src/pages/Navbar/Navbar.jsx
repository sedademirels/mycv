import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-scroll';



function Navbar() {
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
      <ul className='nav-links'>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-item"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <a  href="/SedaDemirelCV.pdf" download className='cv-button'>Download CV</a>
    </nav>
)
}

export default Navbar