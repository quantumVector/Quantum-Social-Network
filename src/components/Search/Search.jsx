import React from 'react';
import classes from './Search.module.css';
import icon from '../../assets/search-icon.png';

const Search = () => {
  return (
    <div className={classes.block}>
      <img src={icon} alt='icon' className={classes.icon}></img>
      <input className={classes.input} type='text' placeholder='Search'></input>
    </div>
  )
}

export default Search;