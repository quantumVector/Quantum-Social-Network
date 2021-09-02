import React from 'react';
import classes from './DialogsPage.module.css';
import Dialogs from '../Dialogs/Dialogs.jsx';
import ChatContainer from '../Chat/ChatContainer';
import UserInfo from '../UserInfo/UserInfo';

const DialogsPage = ({ state }) => {
  return (
    <div className={classes.dialogsPage}>
      <Dialogs users={state.users} />
      <ChatContainer />
      <UserInfo chat={state.chat} />
    </div>
  )
}

export default DialogsPage;