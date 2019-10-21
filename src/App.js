import React,{useEffect, useState} from 'react';
import Beer from './components/Beer';
import SearchForm from './components/SearchForm';
import Header from './components/Header';
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

  const ascABV = beers.slice().sort((a, b) => a.abv - b.abv);

  const ascName = beers.slice().sort((a, b) => a.name.localeCompare(b.name));
 
  const updateSortABV = e => {
    e.preventDefault();
    setBeers(ascABV);
    console.log(beers)
  }

  const updateSortName = e => {
    e.preventDefault();
    setBeers(ascName);
    console.log(ascName)
  }



  return (
    <div className="App">
      <Header />
      <SearchForm 
        search={search}
        getSearch={getSearch}
        updateSearch={updateSearch}
        sortABV={updateSortABV}
        sortName={updateSortName}
      />

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
