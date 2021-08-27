import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.css';

const MenuItem = ({ href, icon, label }) => {
  return (
    <li className={classes.item} href={href}>
      <NavLink to={href} activeClassName={classes.active}>
        <div className={classes.iconCont}>
          <img src={icon} className={classes.icon} alt='icon'></img>
        </div>
        <div className={classes.text}>{label}</div>
      </NavLink>
    </li>
  )
}

export default MenuItem;