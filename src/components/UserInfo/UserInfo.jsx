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
  console.log(props)
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

      <div className={classes.attachment}>
        <div className={classes.title}>ATTACHMENT</div>
        <div className={classes.wrapper}>
          <AttachmentItem icon={Photos} count={props.chat.AshleyWilliams.attachment.photos.count} label='photos' />
          <AttachmentItem icon={Videos} count={props.chat.AshleyWilliams.attachment.videos.count} label='videos' />
          <AttachmentItem icon={Files} count={props.chat.AshleyWilliams.attachment.files.count} label='files' />
          <AttachmentItem icon={Audio} count={props.chat.AshleyWilliams.attachment.audio.count} label='audio files' />
          <AttachmentItem icon={Links} count={props.chat.AshleyWilliams.attachment.links.count} label='links' />
          <AttachmentItem icon={Voice} count={props.chat.AshleyWilliams.attachment.voice.count} label='voice messages' />
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