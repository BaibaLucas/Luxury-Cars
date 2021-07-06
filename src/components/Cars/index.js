// Package import
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import Available from '../../assets/logo/available.png';
import Soon from '../../assets/logo/soon.png';



const Cars = () => {
  
  return (
    <section id='middle' className='cars'>
      <div className='cars-container'>
      <div className='easyreturn'>
          <div className='easyreturntext'>
            <Scroll 
            activeClass='active'
            to='top'
            spy={true}
            smooth={true}
            >Accueil</Scroll>
          </div>
        </div>
        <div className='indexDiv'>
          <h1 className='carstitle'>
            NOS VEHICULES
          </h1>
          <div>
            <div className='all-cars'>
              <Link to ='/available'>
              <img src={Available} alt='logo available'/>
              </Link>
              <Link to ='/soon'>
              <img src={Soon} alt='logo soon'/>
              </Link>
            </div>
          <div>
            <SearchBar />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Cars;