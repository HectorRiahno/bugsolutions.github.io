import React from 'react';
import bugsLogo from '../../img/bugs1.png';
import "./header.css"

function Header() {
  return (
    
      <header className='header'> 
        <img className="img-logo-header" src={bugsLogo} alt="Logo" />
        <div className='header-1'>
          <div className="header-div">
              <p>HOME</p>
          </div>
          <div className="header-div">
              <p>ABAUT</p>
          </div>
          <div className="header-div">
              <p>SERVICES</p>
          </div>
        </div>
        <div className="contact">
              <p>CONTACT</p>
          </div>
      </header>
    
  );
}

export default Header;
