import React from 'react';
import classes from './Chat.module.css';
import sidebar from '../../assets/sidebar.png';
import attach from '../../assets/attach.png';
import send from '../../assets/send-icon.png';
import emoji from '../../assets/emoji-icon.png';
import voice from '../../assets/voice-att.png';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Chat = (props) => {
  const addNewMessage = (value) => {
    console.log(value.message);
    props.sendMessage(value.message);
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
        {props.messages}
      </div>
      <div className={classes.chatInput}>
        <img src={attach} alt='icon'></img>
        <AddMessageForm onSubmit={addNewMessage} />

        <img src={send} alt='icon'></img>
        <img src={emoji} alt='icon'></img>
        <img src={voice} alt='icon'></img>
      </div>
    </div>
  )
}

export default Chat;