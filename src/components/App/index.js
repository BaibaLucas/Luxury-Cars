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

const App = () => {


  return (
    <div className='App'>
      <Header />
      {/* FUTUR ROUTER */}
      <Route exact path='/'>
        <Home />
      </Route>
      <Shop />
      <Reviews />
      <WhosRus />
      <Footer />
    </div>
  );
}

export default App;