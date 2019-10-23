import React from 'react';
import style from './dropdown.module.css';

const DropDown = ({sortABV, sortName}) => {
  return(
    <div className={style.dropdown} >
      <button className={style.dropbtn}>Sort</button>
      <div className={style.dropdownContent}>

       <button className="sortABV" onClick={sortABV}>
         Sort by ABV (asc)
       </button>

       <button className="sortName" onClick={sortName}>
         Sort by Name
       </button>

      </div>
    </div>
  )
}

export default DropDown;