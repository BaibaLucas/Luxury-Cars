// Package import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
// Components
import Header from '../Header';
import Home from '../Home';
import Shop from '../Shop';
import Reviews from '../Reviews';
import WhosRus from '../WhosRus';
import Footer from '../Footer';
import Cars from '../Cars';
import Garage from '../Garage';
import Actuality from '../Actuality';
import Partner from '../Partner';
import Contact from '../Contact';

const App = () => {


  return (
    <div className='App'>
      <Header />

      {/* ROUTER */}
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/cars'>
        <Cars />
      </Route>
      <Route exact path='/workshop'>
        <Garage />
      </Route>
      <Route exact path='/actuality'>
        <Actuality />
      </Route>
      <Route exact path='/partner'>
        <Partner />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>

      <Shop />
      <Reviews />
      <WhosRus />
      <Footer />
    </div>
  );
}

export default App;