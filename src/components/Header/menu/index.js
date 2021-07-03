import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link onClick={close} to ='/'>Accueil</Link>
        </li>
        <li className='itemlist'>
          <Link onClick={close} to ='/cars'>Vehicules</Link>
        </li>
        <li className='itemlist'>
          <Link onClick={close} to ='/services'>Services</Link>
        </li>
        <li className='itemlist'>
          <Link onClick={close} to ='/workshop'>Atelier</Link>
        </li>
        <li className='itemlist'>
          <Link onClick={close} to ='/actu'>Actualites</Link>
        </li>
        <li className='itemlist'>
          <Link onClick={close} to ='/partner'>Partenaires</Link>
        </li>
        <li className='itemlist'>
          <Link onClick={close} to ='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='navlogo'>
        <Link onClick={close} to ='/'>
          <img src={Logo} alt='LuxuryCars Logo'></img>
        </Link>
      </div>
      </nav>
      
      
    </div>
  )
}

export default Menu;