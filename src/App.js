import React,{useEffect, useState} from 'react';
import Beer from './Beer';
import './App.css';

const App = () => {

  
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Punk');
  const [api, setAPI] = useState(`https://api.punkapi.com/v2/beers?beer_name=${query}`)




  useEffect( () => {
    getBeers();
  }, [query]);


// ?beer_name=${query}

  const getBeers = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
    setBeers(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const showAllBeers = () => {
    setAPI(`https://api.punkapi.com/v2/beers?per_page=80`)
  }


  console.log(beers)

  return (
    <div className="App">
      <h1 className="title">Brewdog Beer Search App</h1>
      <h3 className="title">Enter beer name below to see matches</h3>
      
      <button type="button" onClick={showAllBeers}>Show All Beers</button>
      
      <form onSubmit={getSearch} className="search-form">
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
