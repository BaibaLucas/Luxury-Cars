// Package import
import React from 'react';
import { Link as Scroll } from 'react-scroll';

// Local import


const Home = () => {

  return (
    <section id='middle' className='home'>
      <div className='home-container'>
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
            <h1 className='article-title'>
            SPÉCIALISTE ACHAT/VENTE/DÉPÔT VENTE DE VOITURE DE LUXE, SPORT, PRESTIGE ET COLLECTION, ENTRETIENS ET RÉPARATIONS TOUTES MARQUES.
            </h1>
            <div className='article-content'>
              <p className='title-content'>
                Bienvenue chez Luxury Cars : vente, achat et dépôt de véhicules d’exceptions toutes marques.
              </p>
              <br></br>
              <p>
                Nullam auctor arcu sit amet neque lobortis, vel ultrices nisi scelerisque. Curabitur dapibus fringilla orci, eu viverra sapien tristique eu.
              </p>
              <br></br>
              <p>
                Vivamus nec auctor nulla, eget vehicula erat. Donec et velit iaculis, aliquam nisi id, auctor est. Proin quam odio, vestibulum sit amet nulla eget, molestie ornare libero. Integer efficitur risus sit amet nunc pharetra, ut cursus est ornare. Etiam et justo tellus. Morbi in augue molestie, eleifend neque id, iaculis quam. Duis pharetra cursus felis, at dictum sapien venenatis a. Cras condimentum tempor tristique. Morbi vel mi vel ante cursus viverra.
              </p>
              <br></br>
              <p>
                Nam suscipit nulla vitae ultrices sodales. Aliquam pellentesque turpis erat, in finibus arcu venenatis vitae. Nam augue elit, cursus at orci vitae, consectetur accumsan eros. Etiam vitae finibus magna.
              </p>
              <br></br>
              <p>
                Aliquam eget elit sapien. Fusce ante leo, sodales eu congue eget, ultrices molestie ipsum. Fusce molestie massa non mi aliquet, euismod laoreet mauris imperdiet. Duis quis tristique tortor, a sagittis ex. Praesent urna elit, gravida sed sapien a, eleifend vulputate nibh. Nunc vitae lorem feugiat, faucibus nulla vel, elementum leo. Aliquam mollis leo leo, sit amet ultrices sem varius sed. Suspendisse potenti. Fusce placerat eros eget venenatis tristique. Vestibulum a urna quam. Integer feugiat rutrum tellus vel interdum. In ut diam augue. Phasellus vel ex euismod, bibendum risus sed, semper purus. Cras sit amet interdum nulla. Nam a augue id lectus suscipit tempor quis a ante. Morbi et erat eu dolor maximus eleifend nec sit amet neque.
              </p>
              <br></br>
              <p>
              nteger feugiat rutrum tellus vel interdum. In ut diam augue ? Contact us.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Home;
