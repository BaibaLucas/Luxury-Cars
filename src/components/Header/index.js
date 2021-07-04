// Package import
import React, { useRef, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

// Local import
import Logo from '../../assets/logo/lclogo.png';
import FbLogo from '../../assets/logo/facebook.png';
import InstaLogo from '../../assets/logo/instagram-logo.png';
import ArrowDown from '../../assets/logo/whitearrowdown.png';
import { BgImages } from '../../utils/utils';
import { cycleImages } from '../../utils/utils';
import Burger from './burger/index';
import Menu from './menu/index';
import { useOnClickOutside } from '../../utils/utils';


const Header = () => {
// Node Element
const elementRef = useRef();
const node = useRef();
// Burger State
const [open, setOpen] = useState(false);
// CloseClick Outside
useOnClickOutside(node, () => setOpen(false));

// useEffect 
useEffect(() => {
  const divElement = elementRef.current;
  cycleImages(BgImages, divElement, 7000);
}, []);



if (open === true) {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
} else {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});


  return (
    <header id='top'>
      <div className={open ? 'filter active' : 'filter'}></div>
      <div className='container-header'>
      <div
      ref={elementRef}
      className='container-header-background'></div>
      <div className='inner-header'>
        <div className='adress'>
          luxury cars - 64, rue du prestige 75116 Paris (16ème)
        </div>
        <div className='navigation'
        ref={node}>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen}/>
          <div className='small-adress'><span>luxury cars -</span> 64, rue du prestige 75116 Paris</div>
          <nav className='navdesk'>
          <NavLink activeClassName='activeBg' exact to ='/'>Accueil</NavLink>
          <NavLink activeClassName='activeBg' exact to ='/cars'>Vehicules</NavLink>
          <NavLink activeClassName='activeBg' exact to ='/services'>Services</NavLink>
          <NavLink activeClassName='activeBg' exact to ='/workshop'>Atelier</NavLink>
          <NavLink activeClassName='activeBg' exact to ='/actu'>Actualites</NavLink>
          <NavLink activeClassName='activeBg' exact to ='/partner'>Partenaires</NavLink>
          <NavLink activeClassName='activeBg' exact to ='/contact'>Contact</NavLink>
          </nav>
        </div>
        <div className='logo'>    
            <Link to ='/'>
              <img src={Logo} alt='LuxuryCars Logo'></img>
            </Link>
        </div>
        <div className='baseline-header'>
          <div className='baseline-text'>
          La représentation du <br/>
          préstige à l'état pur.
          </div>
          <div className='baseline-network'>
            <a href='https://www.instagram.com/' rel="noopener noreferrer" target="_blank">
            <img className='network-logo' src={InstaLogo} alt='Instagram Logo'></img>
            </a>
            <a href='https://www.facebook.com/' rel="noopener noreferrer" target="_blank">
            <img className='network-logo' src={FbLogo} alt='Facebook Logo'></img>
            </a>
          </div>
        </div>
        <div className='arrow-down'>
          <Scroll
          activeClass='active'
          to='middle'
          spy={true}
          smooth={true}>
          <img src={ArrowDown} alt='Flèche bas prochaine section'></img>
          </Scroll>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;