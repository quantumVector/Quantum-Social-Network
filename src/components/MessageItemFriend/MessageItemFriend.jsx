import React from 'react';
import classes from './MessageItemFriend.module.css';

const MessageItemFriend = ({ photo, msg, time }) => {
  return (
    <div className={classes.item}>
      <div className={classes.info}>
        <img src={photo} alt='icon'></img>
        <div className={classes.msg}>{msg}</div>
      </div>
      <div className={classes.time}>{time}</div>
    </div>
  )
}

export default MessageItemFriend;