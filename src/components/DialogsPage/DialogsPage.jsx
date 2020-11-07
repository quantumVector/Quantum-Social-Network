import React from 'react';
import classes from './DialogsPage.module.css';
import Dialogs from '../Dialogs/Dialogs.jsx';

const DialogsPage = (props) => {
  return (
    <div className={classes.dialogsPage}>
      <Dialogs />
    </div>
  )
}

export default DialogsPage;