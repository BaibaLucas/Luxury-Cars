// Package import
import React from 'react';
import { Link } from 'react-router-dom';

// Local import
import cars from '../../utils/cars'


const Shop = () => {

  return (
   <div className='bottom'>
     <div className='titlebot'>
       last second-hand
     </div>
     <div className='car-container'>
       {cars.map((car) => {
         return <Link to='/cars' className='carcard' key={car.id}>
           <img className='cardimage' src={car.picture} alt={car.carname} /> 
           <div className='cardproduct'> {car.carname}</div>
           <div className='cardfinition'> {car.finition}</div>
           <div className="carddetails1">{car.gas} - {car.boite}</div>
           <div className="carddetails2">{car.km} KM - {car.year}</div>
          </Link>
       })}
     </div>
     <Link to='#' className='allcars'> Voir nos véhicules en vente</Link>
   </div>
  );
}

export default Shop;