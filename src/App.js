import React,{useEffect, useState} from 'react';
import Beer from './Beer';
import './App.css';

const App = () => {

  const allBeersURL = "https://api.punkapi.com/v2/beers?per_page=80"

  const [beers, setBeers] = useState([]);

  useEffect( () => {
    getBeers();
  }, []);


  const getBeers = async () => {
    const response = await fetch(allBeersURL);
    const data = await response.json();
    
    setBeers(data);
  }

  console.log(beers)

  return (
    <div className="App">
      <form className="search-form">
       <input className="search-bar" type="text" />
       <button className="search-button" type="submit">
         Search
       </button>
     </form>
     
     {beers.map(beer => (
       <Beer 
       title={beer.name}
       abv={beer.abv}
       description={beer.description}
       image={beer.image_url}
       />
     ))}
    </div>
  );
}

export default App;
