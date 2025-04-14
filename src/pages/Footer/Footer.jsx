import React from 'react'
import '../Footer/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
    <div className='footer-content'>
      <h3>Contact Me</h3>
      <h4>Let's Discuss About Your Project</h4>

      <div className='contact-info'>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> sedeyldem@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +90 555 555 55 55
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Ankara, Turkey
        </p>
      </div>

      <p className='footer-note'>© {new Date().getFullYear()} Seda Demirel. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer