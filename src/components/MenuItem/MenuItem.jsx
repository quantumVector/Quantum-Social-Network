import React from 'react';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.iconCont}>
        <img src={props.icon} className={classes.icon} alt='icon'></img>
      </div>
      <div className={classes.text}>{props.label}</div>
    </li>
  )
}

export default MenuItem;