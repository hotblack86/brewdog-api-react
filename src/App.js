import React,{useEffect, useState} from 'react';
import Beer from './Beer';
import './App.css';

const App = () => {

  const allBeersURL = `https://api.punkapi.com/v2/beers?per_page=80`

  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  // ?beer_name=${search}

  useEffect( () => {
    getBeers();
  }, []);


  const getBeers = async () => {
    const response = await fetch(allBeersURL);
    const data = await response.json();
    
    setBeers(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  console.log(beers)

  return (
    <div className="App">
      <form className="search-form">
       <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
       />
       <button className="search-button" type="submit">
         Search
       </button>
     </form>
     
     {beers.map(beer => (
       <Beer 
       key={beer.id}
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
