import React from 'react';
import style from './searchform.module.css';


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
       <button className={style.searchbtn} type="submit">
         Search
       </button>
   
     </form>
     
    </div>
  )
}

export default SearchForm;     
     
     