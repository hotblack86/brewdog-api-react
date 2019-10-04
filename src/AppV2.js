import React, { Component } from 'react';
import './App.css';
import Beer from './Beer';


class AppV2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      search: (""),
      query: ("")
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    getBeers = async () => {
      const { query } = this.state;
      let url
      (query !== "") ? url = `&beer_name=${query}` : url = "";
      console.log(url);
      const response = await fetch(`https://api.punkapi.com/v2/beers?per_page=80${url}`);
      const data = await response.json();
      console.log(data)
      this.setState({
        beers: data
      })
    }

    componentDidMount(){
      this.getBeers();
    }

    handleChange = e => {
      const newValue = (e.target.value);
      this.setState({
        search: (newValue)
      })
      console.log(newValue);
    }

    handleSubmit = e => {
      e.preventDefault();
      this.setState({
        query: (this.search)
      })
      this.setState({
        search: ("")
      })
    }

  
    render() {
      const { beers } = this.state;
      const { search } = this.state;

      return (
        <div className="App">
        <h1 className="title">Brewdog Beer Search App</h1>
        <h3 className="title">Enter search term below to see matches</h3>
        <p className="title">Search empty field to see all beers</p>
  
        <form onSubmit={this.handleSubmit} className="search-form">
         <input 
            className="search-bar" 
            type="text"
            value={search} 
            onChange={this.handleChange}
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