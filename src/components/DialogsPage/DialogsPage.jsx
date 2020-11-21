import React from 'react';
import classes from './DialogsPage.module.css';
import Dialogs from '../Dialogs/Dialogs.jsx';
import Chat from '../Chat/Chat.jsx';
import UserInfo from '../UserInfo/UserInfo';

const DialogsPage = (props) => {
  return (
    <div className={classes.dialogsPage}>
      <Dialogs users={props.users} />
      <Chat />
      <UserInfo />
    </div>
  )
}

export default DialogsPage;