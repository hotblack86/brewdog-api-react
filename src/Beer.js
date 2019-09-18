import React from 'react';


const Beer = ({title, abv, description, image}) => {
  return(
    <div >
      <h1>{title}</h1>
      <h2>{abv}</h2>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default Beer;