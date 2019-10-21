import React from 'react';
import style from './beer.module.css';


const Beer = ({title, abv, description, image}) => {
  return(
    <div className={style.beer}>
      <h1>{title}</h1>
      <h2>{abv}%</h2>
      <p style={{float: "left"}}>{description}</p>
      <img src={image} alt="" style={{float: "left"}} height="200" crop="scale" />
    </div>
  )
}

export default Beer;