import React from 'react';
import classes from './MessageItemMy.module.css';

const MessageItemMy = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.info}>
        <div className={classes.msg}>{props.msg}</div>
        <img src={props.photo} alt='icon'></img>
      </div>
      <div className={classes.time}>{props.time}</div>
    </div>
  )
}

export default MessageItemMy;