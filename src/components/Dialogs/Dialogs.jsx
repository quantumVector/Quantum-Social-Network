import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from '../DialogsItem/DialogsItem.jsx';
import Search from '../Search/Search.jsx';

const Dialogs = (props) => {
  const msg = 'Mauris consectetur risus sit amet ultrices laoreet. Sed et varius metus...';

  const dialogs = props.users.map( user => {
    return <DialogsItem photo={user.photo} name={user.name} msg={msg} count='5' online='true'/>
  });

  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.title}>DIALOGS</div>
      <div className={classes.dialogsBlock}>
        { dialogs }
      </div>
      <div className={classes.search}>
        <Search />
      </div>
    </div>
  )
}

export default Dialogs;