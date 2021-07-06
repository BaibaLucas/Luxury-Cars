import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../assets/logo/lclogo.png';


const Menu = ({ open, setOpen }) => {
  const close = () => {
    setOpen(!open);
  }
  return (
    <div className={open ? 'menu active' : 'menu'}>
      <nav className='menunav'>
      <ul className='menulist'>
        <li className='itemlist'>
          <NavLink activeClassName='activeBg' onClick={close} exact to='/'>Accueil</NavLink>
        </li>
        <li className='itemlist'>
          <NavLink activeClassName='activeBg' onClick={close} exact to ='/cars'>Vehicules</NavLink>
        </li>
        <li className='itemlist'>
          <NavLink activeClassName='activeBg' onClick={close} exact to ='/services'>Services</NavLink>
        </li>
        <li className='itemlist'>
          <NavLink activeClassName='activeBg' onClick={close} exact to ='/workshop'>Atelier</NavLink>
        </li>
        <li className='itemlist'>
          <NavLink activeClassName='activeBg' onClick={close} exact to ='/actuality'>Actualites</NavLink>
        </li>
        <li className='itemlist'>
          <NavLink activeClassName='activeBg' onClick={close} exact to ='/partner'>Partenaires</NavLink>
        </li>
        <li className='itemlist'>
          <NavLink activeClassName='activeBg' onClick={close} exact to ='/contact'>Contact</NavLink>
        </li>
      </ul>
      <div className='navlogo'>
        <NavLink onClick={close} to ='/'>
          <img src={Logo} alt='LuxuryCars Logo'></img>
        </NavLink>
      </div>
      </nav>
      
      
    </div>
  )
}

export default Menu;