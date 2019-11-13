import React from 'react';
import style from './dropdown.module.css';

const Info = () => {
  return(
    <div className={style.dropdown} >
      <button className={style.dropbtn}>Info</button>
      <div className={style.dropdownContent}>

      <ul>
        <li>Search empty field to see all beers</li>
        <li>Exact search term isn't required but will return more accurate results</li>
        <li>Brewdog API limits search results to 80 per page and has a rate limit of 3600 requests per hour</li>
        <li>Visit https://punkapi.com/documentation/v2 for more info on the API</li>
      </ul>

      </div>
    </div>
  )
}

export default Info;