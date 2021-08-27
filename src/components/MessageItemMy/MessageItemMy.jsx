import React from 'react';
import classes from './MessageItemMy.module.css';

const MessageItemMy = ({ msg, photo, time }) => {
  return (
    <div className={classes.item}>
      <div className={classes.info}>
        <div className={classes.msg}>{msg}</div>
        <img src={photo} alt='icon'></img>
      </div>
      <div className={classes.time}>{time}</div>
    </div>
  )
}

export default MessageItemMy;