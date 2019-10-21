import React from 'react';

const SearchForm = ({search, getSearch, updateSearch, sortABV, sortName}) => {
  return(
    <div>
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

       <button className="sortName" onClick={sortName}>
         Sort by Name
       </button>
     </form>
    </div>
  )
}

export default SearchForm;     
     
     