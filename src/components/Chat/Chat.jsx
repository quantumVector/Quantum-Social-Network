import React from 'react';
import classes from './Chat.module.css';
import sidebar from '../../assets/sidebar.png';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import attach from '../../assets/attach.png';
import emoji from '../../assets/emoji-icon.png';
import voice from '../../assets/voice-att.png';

const Chat = (props) => {
  const messages = props.chat.AshleyWilliams.map( msg => {
    if (msg.from === 'friend') return <MessageItemFriend photo={msg.photo} msg={msg.text} time={msg.time} />
    if (msg.from === 'me') return <MessageItemMy photo={msg.photo} msg={msg.text} time={msg.time} />
  });

  return (
    <div className={classes.chatBody}>
      <div className={classes.header}>
        <div className={classes.userInfo}>
          <div className={classes.name}>Ashley Williams</div>
          <div className={classes.status}></div>
          <div className={classes.time}>Active Now</div>
        </div>
        <img src={sidebar} alt='icon'></img>
      </div>
      <div className={classes.chat}>
        { messages }
      </div>
      <div className={classes.chatInput}>
        <img src={attach} alt='icon'></img>
        <input className={classes.input} type='text' placeholder='Write a message...'></input>
        <img src={emoji} alt='icon'></img>
        <img src={voice} alt='icon'></img>
      </div>
    </div>
  )
}

export default Chat;