import React from 'react';
import bugsLogo from '../../img/bugs1.png';
import "./header.css"

function Header() {
  return (
    
      <header className='header'> 
        <img className="img-logo-header" src={bugsLogo} alt="Logo" />
        <div className='header-1'>
          <div className="header-div">
              <a href="" className='btn btn-1'>Store</a>
          </div>
          <div className="header-div">
              <a href="" className='btn btn-1'>Abaut</a>
          </div>
          <div className="header-div">
              <a href="" className='btn btn-1'>Services</a>
          </div>
        </div>
        <div className="header-div">
             <a href="" className='btn btn-1 '>
                Sing-up
              </a>
              <a href="" className='btn btn-1 '>
                Login
              </a>
        </div>
      </header>
    
  );
}

export default Header;
