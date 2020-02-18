import React,{useEffect, useState} from 'react';
import Beer from './components/Beer';
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import RandomBeer from './components/RandomBeer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    setBeers(data);
  }

  const randomBeer = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/random`);
    const data = await response.json();
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

  const ascABV = beers.slice().sort((a, b) => a.abv - b.abv);
  const descABV = beers.slice().sort((a, b) => b.abv - a.abv);
  const ascName = beers.slice().sort((a, b) => a.name.localeCompare(b.name));
  const descName = beers.slice().sort((a, b) => b.name.localeCompare(a.name));

  const updateSortABV = e => {
    e.preventDefault();
    setBeers(ascABV);
  }

  const updateSortABVdesc = e => {
    e.preventDefault();
    setBeers(descABV);
  }

  const updateSortName = e => {
    e.preventDefault();
    setBeers(ascName);
  }

  const updateSortNamedesc = e => {
    e.preventDefault();
    setBeers(descName);
  }


  return (
    <div className="App">
      <Header />
        <SearchForm 
          search={search}
          getSearch={getSearch}
          updateSearch={updateSearch}
          updateSortName={updateSortName}
          updateSortNamedesc={updateSortNamedesc}
          updateSortABV={updateSortABV}
          updateSortABVdesc={updateSortABVdesc}
        />
        <RandomBeer randomBeer={randomBeer}/>
            
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
