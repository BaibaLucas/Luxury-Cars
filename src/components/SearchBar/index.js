// Package imports
import React from 'react';


const SearchBar = () => {

  return(
    <div className='searchBar'>
      <form className='form'>
        <select className='carbrand'>
          <option value=''>Marque</option>
          <option value='audi'>Audi</option>
          <option value='vw'>VW</option>
          <option value='porsche'>Porsche</option>
          <option value='maserati'>Maserati</option>
          <option value='Renault'>Renault</option>
        </select>
        <select className='carstock'>
          <option value='available'>Disponible</option>
          <option value='soon'>Bientôt disponible</option>
        </select>
        <button className='formbutton'>Rechercher</button>
      </form>
    </div>
  )
};

export default SearchBar;