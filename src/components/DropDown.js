import React from 'react';
import style from './dropdown.module.css';

const DropDown = ({sortABV, sortABVdesc, sortName, sortNamedesc}) => {
  return(
    <div className={style.dropdown} >
      <button className={style.dropbtn}>Sort</button>
      <div className={style.dropdownContent}>

       <button className="sortABV" onClick={sortABV}>
         ABV: Low - High
       </button>

       <button className="sortABVdesc" onClick={sortABVdesc}>
         ABV: High - Low
       </button>

       <button className="sortName" onClick={sortName}>
         Name: A - Z
       </button>

       <button className="sortNamedesc" onClick={sortNamedesc}>
         Name: Z - A
       </button>

      </div>
    </div>
  )
}

export default DropDown;