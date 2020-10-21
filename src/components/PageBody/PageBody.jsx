import React from 'react';
import classes from './PageBody.module.css';
import ProfileTop from '../ProfileTop/ProfileTop.jsx';
import SubmitPost from '../SubmitPost/SubmitPost.jsx';
import ProfileInfo from '../ProfileInfo/ProfileInfo.jsx';
import EventBlock from '../EventBlock/EventBlock.jsx';
import FollowingBlock from '../FollowingBlock/FollowingBlock.jsx';
import Post from '../Post/Post.jsx';

const PageBody = () => {
  return (
    <div className={classes.body}>
      <ProfileTop />
      <div className={classes.narrowColumn}>
        <ProfileInfo />
        <EventBlock />
        <FollowingBlock />
      </div>
      <SubmitPost />
      <Post />
    </div>
  )
}

export default PageBody;