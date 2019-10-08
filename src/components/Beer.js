import React from 'react';
import style from './beer.module.css';


const Beer = ({title, abv, description, image}) => {
  return(
    <div className={style.beer}>
      <h1>{title}</h1>
      <h2>{abv}</h2>
      <p>{description}</p>
      <img src={image} alt=""  />
    </div>
  )
}

export default Beer;