import React from 'react';
import classes from './Header.module.css';
import Search from '../Search/Search.jsx';
import msg from '../../assets/msg-icon.png';
import notify from '../../assets/notify-icon.png';
import photo from '../../assets/profiles/Shepard-mini.png';
import arrow from '../../assets/arrow-icon.png';
import unread from '../../assets/unread-icon.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={classes.block}>
      <ul className={classes.inner}>
        <li className={classes.item}>
          <div className={classes.logo}>QuantumNET</div>
        </li>
        <li className={classes.item}>
          <Search />
        </li>
        {props.isAuth
          ? <>
            <li className={classes.item}>
              <NavLink to='/dialogs'>
                <img src={msg} className={classes.msgIcon} alt='icon'></img>
              </NavLink>
            </li>
            <li className={classes.item}>
              <div className={classes.notifyBlock}>
                <img src={notify} className={classes.notifyIcon} alt='icon'></img>
                <img src={unread} className={classes.unreadIcon} alt='icon'></img>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.profileHeaderBlock}>
                <div className={classes.name}>John</div>
                <img src={photo} className={classes.photo} alt='icon'></img>
                <img src={arrow} className={classes.arrow} alt='icon'></img>
              </div>
            </li>
          </>
          : <li className={classes.item}>
            <NavLink to={'/login'}>Login</NavLink>
          </li>}
      </ul>
    </div>
  )
}

export default Header;

