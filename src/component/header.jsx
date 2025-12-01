import React from 'react';
import Search from '../component/Search';


const Header = () => {
  return (
    <div className='header'>
      <div>
        <div className="bone-header">
            <h1>TMDB</h1>
          </div>
      </div>
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


