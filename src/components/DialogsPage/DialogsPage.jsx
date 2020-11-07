import React from 'react';
import classes from './DialogsPage.module.css';
import Dialogs from '../Dialogs/Dialogs.jsx';
import Chat from '../Chat/Chat.jsx';

const DialogsPage = (props) => {
  return (
    <div className={classes.dialogsPage}>
      <Dialogs />
      <Chat />
    </div>
  )
}

export default DialogsPage;