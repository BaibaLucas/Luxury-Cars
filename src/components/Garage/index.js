// Package import
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
// Local import

const Garage = () => {

  return (
    <section id='middle' className='garage'>
      <div className='garage-container'>
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
          <h1 className='garage-title'>garage automobile - entretien et réparation toutes marques</h1>
          <div className='garage-desc'>Praesent ac risus non tellus vestibulum rhoncus at at diam. Quisque volutpat tincidunt finibus. Mauris porta non mi sit amet dictum. Phasellus in lectus sit amet mi vehicula finibus tempor eu augue. Curabitur id mi eget lectus elementum sodales nec vitae elit. Vestibulum ligula dui, maximus sit amet hendrerit at, vulputate tincidunt augue.</div>
          <p className='garage-content'>Suspendisse aliquam vestibulum elit. Vivamus ac dictum sapien, nec semper ex. Proin euismod hendrerit arcu, nec porttitor magna tincidunt sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Phasellus tincidunt massa vel rutrum hendrerit. Duis turpis nisl, vulputate dignissim suscipit a, porttitor pretium leo. Sed nec vestibulum mi. Aliquam eget vehicula orci, ut rhoncus nisi. Nunc efficitur eleifend dolor, vitae rhoncus nulla feugiat sed. Nam eget massa convallis, lobortis dolor nec, aliquet odio. Donec condimentum elit orci, vel dapibus metus iaculis eget. Fusce pretium feugiat nibh, et molestie purus placerat non. Sed maximus urna a fringilla suscipit. Phasellus laoreet scelerisque tincidunt.</p>
          <Link to='/booking' className='booking'>Prendre rdv</Link>
        </div>
      </div>
    </section>
  )
};

export default Garage;