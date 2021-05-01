import React from 'react';
import classes from './Chat.module.css';
import sidebar from '../../assets/sidebar.png';
import attach from '../../assets/attach.png';
import send from '../../assets/send-icon.png';
import emoji from '../../assets/emoji-icon.png';
import voice from '../../assets/voice-att.png';
import { Redirect } from 'react-router';

const Chat = (props) => {
  const onSendMessage = () => {
    props.sendMessage();
  }

  const onChangeMessage = (e) => {
    props.updateMessage(e.target.value);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

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
        {props.messages}
      </div>
      <div className={classes.chatInput}>
        <img src={attach} alt='icon'></img>
        <input className={classes.input}
          type='text'
          placeholder='Write a message...'
          onChange={onChangeMessage}
          value={props.currentTextMessage}>
        </input>
        <img src={send} onClick={onSendMessage} alt='icon'></img>
        <img src={emoji} alt='icon'></img>
        <img src={voice} alt='icon'></img>
      </div>
    </div>
  )
}

export default Chat;