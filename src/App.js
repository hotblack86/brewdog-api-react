import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const allBeersURL = "https://api.punkapi.com/v2/beers?per_page=80"

  useEffect( () => {
    getBeers();
  }, []);


  const getBeers = async () => {
    const response = await fetch(allBeersURL);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
       <input className="search-bar" type="text" />
       <button className="search-button" type="submit">
         Search
       </button>
     </form>
    </div>
  );
}

export default App;
