import React from 'react';

const HamburgerMenu = ({isOpen, fx}) => {
  return (
    <div className='md:hidden' onClick={fx}>
        <div id='menu-btn' className={`hamburger z-40 block  md:hidden focus:outline-none border-none ${isOpen === true ? "open" : ""}`}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </div>
    </div>
  )
}

export default HamburgerMenu;