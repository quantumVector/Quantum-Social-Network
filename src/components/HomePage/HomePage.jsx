import React from 'react';
import classes from './HomePage.module.css';
import RightSidebar from '../RightSidebar/RightSidebar.jsx';
import ProfileTop from '../ProfileTop/ProfileTop.jsx';
import SubmitPost from '../SubmitPost/SubmitPost.jsx';
import ProfileInfo from '../ProfileInfo/ProfileInfo.jsx';
import EventBlock from '../EventBlock/EventBlock.jsx';
import FollowingBlock from '../FollowingBlock/FollowingBlock.jsx';
import Post from '../Post/Post.jsx';

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.scrollBlock}>
        <ProfileTop />
        <div className={classes.narrowColumn}>
          <ProfileInfo />
          <EventBlock />
          <FollowingBlock />
        </div>
        <SubmitPost />
        <Post />
      </div>
      <div className={classes.rightSidebar}>
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage;