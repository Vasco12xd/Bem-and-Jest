//Class Header

import React from 'react';


export default function Header() {
    return (
    <div className="App">
      <div className="header">
        <nav className="nav">
          <div className="nav__logo">
            <img src="./logo192.png" alt="logo" className='nav__img' />
          </div>
        
            <div>
                <a href="#" className='nav__link nav__link--active'>Active</a>
                <a href="#" className='nav__link'>disable</a>
            </div>
        </nav>


      </div>
    </div>
    );
}

