import React, { Component } from 'react';
import './App.css';
import Beer from './Beer';


class AppV2 extends Component {
    state = {
      beers: []
    }

    getBeers = async () => {
      // let url
      // (query !== "") ? url = `&beer_name=${query}` : url = "";
      const response = await fetch(`https://api.punkapi.com/v2/beers?per_page=80`);
      const data = await response.json();
      console.log(data)
      this.setState({
        beers: data
      })
    }

    componentDidMount(){
      this.getBeers();
    }
  
    render() {
      const { beers } = this.state;

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
}

export default AppV2;