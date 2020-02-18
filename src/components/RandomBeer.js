import React from 'react';
import style from './dropdown.module.css';

const RandomBeer = ({randomBeer}) => {
  return(
    <div className={style.dropdown} >
      <button className={style.dropbtn} onClick={randomBeer}>Random</button>
      
    </div>
  )
}

export default RandomBeer;