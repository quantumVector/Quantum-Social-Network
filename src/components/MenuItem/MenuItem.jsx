import React from 'react';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <li className={classes.item} href={props.href}>
      <div className={classes.iconCont}>
        <img src={props.icon} className={classes.icon} alt='icon'></img>
      </div>
      <a href={props.href}>
        <div className={classes.text}>{props.label}</div>
      </a>
    </li>
  )
}

export default MenuItem;