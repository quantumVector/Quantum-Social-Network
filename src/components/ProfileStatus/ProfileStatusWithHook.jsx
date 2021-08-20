import React, { useState } from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
  let [editeMode, setEditeMode] = useState(false);
  let [status, setEditeStatus] = useState(props.status);

  const activateEditMode = () => setEditeMode(true);

  const deactivateEditMode = () => {
    setEditeMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setEditeStatus(e.currentTarget.value);
  }

  return (
    <div className={classes.status}>
      {!editeMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '------------'}</span>
        </div>
      }
      {editeMode &&
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;