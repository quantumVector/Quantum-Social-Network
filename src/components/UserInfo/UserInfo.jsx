import React from 'react';
import classes from './UserInfo.module.css';
import Ashley from '../../assets/profiles/Ashley-mini.png';
import Photos from '../../assets/photos-att.png';
import Videos from '../../assets/video-att.png';
import Files from '../../assets/files-att.png';
import Audio from '../../assets/audio-att.png';
import Links from '../../assets/links-att.png';
import Voice from '../../assets/voice-att.png';
import AttachmentItem from '../AttachmentItem/AttachmentItem.jsx';

const UserInfo = (props) => {
  return (
    <div className={classes.userInfo}>
      <div className={classes.userBlock}>
        <div className={classes.title}>USER INFO</div>
        <div className={classes.wrapper}>
          <img src={Ashley} className={classes.photo} alt='icon'></img>
          <div className={classes.userName}>Ashley Williams</div>
          <div className={classes.time}>Active Now</div>
        </div>
      </div>

      <div className={classes.attacment}>
        <div className={classes.title}>ATTACMENT</div>
        <div className={classes.wrapper}>
          <AttachmentItem icon={Photos} count='203' label='photos' />
          <AttachmentItem icon={Videos} count='12' label='videos' />
          <AttachmentItem icon={Files} count='23' label='files' />
          <AttachmentItem icon={Audio} count='10' label='audio files' />
          <AttachmentItem icon={Links} count='238' label='links' />
          <AttachmentItem icon={Voice} count='18' label='voice messages' />
        </div>
      </div>

      <div className={classes.actions}>
        <div className={classes.title}>ACTIONS</div>
        <div className={classes.wrapper}>
          <div className={classes.item}>Disable notifications</div>
          <div className={classes.item}>Share contact</div>
          <div className={classes.item}>Edite contact</div>
          <div className={classes.item}>Search message history</div>
          <div className={classes.item}>Clear message history</div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo;