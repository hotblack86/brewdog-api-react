import React,{useEffect, useState} from 'react';
import Beer from './Beer';
import './App.css';

const App = () => {
  
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getBeers();
  }, [query]);


  const getBeers = async () => {
    let url
    (query !== "") ? url = `&beer_name=${query}` : url = "";
    const response = await fetch(`https://api.punkapi.com/v2/beers?per_page=80${url}`);
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

  const sortABV = e => {
    e.preventDefault();
    const ascABV = beers.slice().sort(function(a, b) {
      return a.abv - b.abv;
    });
    setBeers(ascABV);
    console.log(ascABV);
  }

  return (
    <div className="App">
      <h1 className="title">Brewdog Beer Search App</h1>
      <h3 className="title">Enter search term below to see matches</h3>
      <p className="title">Search empty field to see all beers</p>

      <form onSubmit={getSearch} className="search-form">
       <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
       />
       <button className="title" type="submit">
         Search
       </button>

       <button className="sortABV" onClick={sortABV}>
         Sort by ABV (asc)
       </button>
     </form>

     <p className="title">Showing {beers.length} results for "{query}"</p>
 
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
