// Package import
import React from 'react';
import { Link } from 'react-router-dom';

// Local import
import Map from '../Map/index';


const Whosrus = () => {

  return (
   <div className='whosrus'>
     <div className='container'>
       <div className='map'>
         <Map />
       </div>
       <div className='contact'>
         <h1 className='title'>
          contact
         </h1>
         <div className='coords'>
           <p className='titlecoord'> phone : </p>
           <p className='tel'> 02 36 36 00 34</p>
           <p className='titlecoord'> adresse : </p>
           <p className='adress'> 64, rue du prestige</p>
           <p className='adress'> 75116 paris (16ÈME)</p>
           <p className='titlecoord'> HORAIRE :</p>
           <p className='horaire'> du lundi au samedi uniquement sur rendez-vous </p>
           <Link to='/contact'> nous contacter </Link>
         </div>
       </div>
     </div>
   </div>
  );
}

export default Whosrus;