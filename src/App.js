import React from 'react';
import './App.css';

const App = () => {

  const allBeersURL = "https://api.punkapi.com/v2/beers?per_page=80"


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
