import React from 'react';
import DropDown from './DropDown';
import Info from './Info';
import style from './searchform.module.css';


const SearchForm = ({search, getSearch, updateSearch, updateSortABV, updateSortABVdesc, updateSortName, updateSortNamedesc}) => {
  return(
    <div>
      <Info />
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
     <DropDown sortABV={updateSortABV} sortABVdesc={updateSortABVdesc} sortName={updateSortName} sortNamedesc={updateSortNamedesc}/>
    </div>
  )
}

export default SearchForm;     
     
     