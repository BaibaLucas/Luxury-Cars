// Package import
import React from 'react';
import { Link as Scroll } from 'react-scroll';

// Local import


const Contact = () => {

  return (
    <section id='middle' className='contact'>
      <div className='contact-container'>
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
          <h1 className='contact-title'>Nous contacter</h1>
          <div className='contact-desc'> Praesent ac risus non tellus vestibulum rhoncus at at diam.</div>
          <form className='contact-form'>
            <div className='part-one'>
            <label className='contact-formlabel'>Nom et prénom</label>
            <input
            className='contact-forminput'
            type='text'
            />
            <label className='contact-formlabel'>Email</label>
            <input
            className='contact-forminput'
            type='text'
            />
            <label className='contact-formlabel'>Telephone</label>
            <input
            className='contact-forminput'
            type='number'
            />
            <label className='contact-formlabel'>Fichier</label>
            <input
            className='contact-forminput'
            type='text'
            />
            </div>
            <div className='part-two'>
            <label className='contact-formlabel'>Message</label>
            <textarea
            className='contact-forminput'
            type='text'
            />
            <button className='button-form'>
              Valider
            </button>
            </div>
          </form>
          <div className='adress'>
            <div className='name'>Luxury cars</div>
            <div className='adresscomp'> 64, rue du préstige paris 75116 paris (16eme)</div>
            <div className='phone'> 00 00 00 00 06</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;