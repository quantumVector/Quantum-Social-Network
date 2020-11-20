import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <li className={classes.item} href={props.href}>
      <NavLink to={props.href} activeClassName={classes.active}>
        <div className={classes.iconCont}>
          <img src={props.icon} className={classes.icon} alt='icon'></img>
        </div>
        <div className={classes.text}>{props.label}</div>
      </NavLink>
    </li>
  )
}

export default MenuItem;