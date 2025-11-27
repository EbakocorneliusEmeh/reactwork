import React from 'react';
import Search from '../component/Search';

const Header = () => {
  return (
    <div className='header'>
      <div className='con'>

        <div className='hero'>
          <img src="../../src/assets/hero-img.png"   alt="Hero" /> 
       </div>


        <div className='head'>
          <h2>
            Find       Movies You'll Love Without the Hassel
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;


