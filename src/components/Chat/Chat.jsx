import React from 'react';
import classes from './Chat.module.css';
import sidebar from '../../assets/sidebar.png';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import attach from '../../assets/attach.png';
import send from '../../assets/send-icon.png';
import emoji from '../../assets/emoji-icon.png';
import voice from '../../assets/voice-att.png';
import { addMessageActionCreator } from '../../state/state';

const Chat = (props) => {
  const messages = props.chat.AshleyWilliams.messages.map( msg => {
    if (msg.from === 'friend') return <MessageItemFriend photo={msg.photo} msg={msg.text} time={msg.time} />
    if (msg.from === 'me') return <MessageItemMy photo={msg.photo} msg={msg.text} time={msg.time} />
  });

  const newMessage = React.createRef();

  const sendMessage = () => {
    const action = addMessageActionCreator(newMessage.current.value)

    props.dispatch(action);
    newMessage.current.value = '';
  }

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
        <input className={classes.input} type='text' ref={newMessage} placeholder='Write a message...'></input>
        <img src={send} onClick={sendMessage} alt='icon'></img>
        <img src={emoji} alt='icon'></img>
        <img src={voice} alt='icon'></img>
      </div>
    </div>
  )
}

export default Chat;