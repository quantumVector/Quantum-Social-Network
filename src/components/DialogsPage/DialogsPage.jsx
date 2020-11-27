import React from 'react';
import classes from './DialogsPage.module.css';
import Dialogs from '../Dialogs/Dialogs.jsx';
import Chat from '../Chat/Chat.jsx';
import UserInfo from '../UserInfo/UserInfo';

const DialogsPage = (props) => {
  return (
    <div className={classes.dialogsPage}>
      <Dialogs users={props.state.users} />
      <Chat chat={props.state.chat} dispatch={props.dispatch} />
      <UserInfo chat={props.state.chat} />
    </div>
  )
}

export default DialogsPage;