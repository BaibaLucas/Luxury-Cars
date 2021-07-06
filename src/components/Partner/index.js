// Package import
import React from 'react';
import { Link as Scroll } from 'react-scroll';

// Local import
import partners from '../../utils/partner';

const Partner = () => {

  return (
    <section id='middle' className='partner'>
      <div className='partner-container'>
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
          <h1 className='partner-title'>Partenaires</h1>
          <div className='partner-desc'> Praesent ac risus non tellus vestibulum rhoncus at at diam. Quisque volutpat tincidunt finibus. Mauris porta non mi sit amet dictum. Phasellus in lectus sit amet mi vehicula finibus tempor eu augue. Curabitur id mi eget lectus elementum sodales nec vitae elit. Vestibulum ligula dui, maximus sit amet hendrerit at, vulputate tincidunt augue.</div>
          <nav className='partner-nav'>
            {partners.map((partner) => {
              return <a href='https://www.google.fr' target='_blank' rel='noreferrer' className='partner-card' key={partner.id}>
                <img className='partnerimage' src={partner.img} alt={partner.name} />
                <div className='partnerinfo'>
                <div className='partnername'>{partner.name}</div>
                <div className='partnertitle'>{partner.title}</div>
                <div className='partnerdesc'>{partner.desc}</div>
                </div>
              </a>
            })}
          </nav>
        </div>
      </div>
    </section>
  )
};

export default Partner;