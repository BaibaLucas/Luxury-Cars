// Package Import
import React from 'react';


const Burger = ({ open, setOpen }) => {
  
  const closeMenu = () => {
    setOpen(!open);
  }
  return (
    <div
    className='burger'
    onClick={closeMenu}>
      <span className={open ? 'active' : ''}/>
      <span className={open ? 'active' : ''}/>
      <span className={open ? 'active' : ''}/>
    </div>
  )
}

export default Burger;