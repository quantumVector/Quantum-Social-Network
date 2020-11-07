import React from 'react';
import classes from './Chat.module.css';
import sidebar from '../../assets/sidebar.png';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import Ashley from '../../assets/profiles/Ashley-mini.png';
import Shepard from '../../assets/profiles/Shepard-mini.png';
import attach from '../../assets/attach.png';
import emoji from '../../assets/emoji-icon.png';
import voice from '../../assets/voice-att.png';

const msg = 'Cras sagittis vitae nulla id tempus. Aenean iaculis risus mi. Ut mollis turpis non massa interdum varius. Donec consectetur, massa commodo auctor condimentum, neque sapien bibendum nunc, nec molestie orci libero id erat.';

const msg2 = 'Cras sagittis vitae nulla id tempus. Aenean iaculis risus mi.';

const Chat = () => {
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
        <MessageItemFriend photo={Ashley} msg={msg} time='11:23 PM' />
        <MessageItemMy photo={Shepard} msg={msg2} time='11:23 PM' />
        <MessageItemFriend photo={Ashley} msg={msg} time='11:23 PM' />
        <MessageItemMy photo={Shepard} msg={msg2} time='11:23 PM' />
        <MessageItemFriend photo={Ashley} msg={msg} time='11:23 PM' />
        <MessageItemMy photo={Shepard} msg={msg2} time='11:23 PM' />
        <MessageItemFriend photo={Ashley} msg={msg} time='11:23 PM' />
        <MessageItemMy photo={Shepard} msg={msg2} time='11:23 PM' />
        <MessageItemFriend photo={Ashley} msg={msg} time='11:23 PM' />
        <MessageItemMy photo={Shepard} msg={msg2} time='11:23 PM' />
        <MessageItemFriend photo={Ashley} msg={msg} time='11:23 PM' />
        <MessageItemMy photo={Shepard} msg={msg2} time='11:23 PM' />
        <MessageItemFriend photo={Ashley} msg={msg} time='11:23 PM' />
        <MessageItemMy photo={Shepard} msg={msg2} time='11:23 PM' />
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