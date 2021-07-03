// Package import
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

// Local import
import ArrowUp from '../../assets/logo/whitearrowup.png';


const Footer = () => {

  return (
   <div className='footer'>
     <div className='container'>
       <div className='footernav'>
         <ul>
           <li><Link to='/notices'>mentions legales</Link></li>
           <li><Link to='/sitemap'>plan du site</Link></li>
           <li><Link to='othercarsdealer'>voiture de luxe Nice</Link></li>
           <li><Link to='/admin'>administration</Link></li>
         </ul>
       </div>
       <div className='arrow-up'>
         <Scroll
         activeClass='active'
         to='top'
         spy={true}
         smooth={true}
         >
          <img src={ArrowUp} alt='Flèche haut de page'></img>
         </Scroll>
       </div>
     </div>
   </div>
  );
}

export default Footer;