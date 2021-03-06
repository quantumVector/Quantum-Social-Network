import React from 'react';
import classes from './DialogsPage.module.css';
import Dialogs from '../Dialogs/Dialogs.jsx';
import ChatContainer from '../Chat/ChatContainer';
import UserInfo from '../UserInfo/UserInfo';

const DialogsPage = (props) => {
  return (
    <div className={classes.dialogsPage}>
      <Dialogs users={props.state.users} />
      <ChatContainer />
      <UserInfo chat={props.state.chat} />
    </div>
  )
}

export default DialogsPage;