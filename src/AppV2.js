import React, { Component } from 'react';
import './App.css';
import Beer from './Beer';


class AppV2 extends Component {
    constructor(){
        super();

        this.state = {
            beers: []
        }
    }

    render() {
      return (
        <div className="App">
        <h1 className="title">Brewdog Beer Search App</h1>
        <h3 className="title">Enter search term below to see matches</h3>
        <p className="title">Search empty field to see all beers</p>
  
        <form className="search-form">
         <input 
            className="search-bar" 
            type="text" 
         />
         <button className="title" type="submit">
           Search
         </button>
       </form>

       <h3>{this.state.beers}</h3>
  
       {/* <p className="title">Showing {beers.length} results for "{query}"</p>
   
       {beers.map(beer => (
         <Beer 
         key={beer.id}
         title={beer.name}
         abv={beer.abv}
         description={beer.description}
         image={beer.image_url}
         />
       ))} */}
      </div>
      );
  }
}

export default AppV2;