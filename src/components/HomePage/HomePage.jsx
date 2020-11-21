import React from 'react';
import classes from './HomePage.module.css';
import HomePageSidebar from '../HomePageSidebar/HomePageSidebar.jsx';
import ProfileTop from '../ProfileTop/ProfileTop.jsx';
import SubmitPost from '../SubmitPost/SubmitPost.jsx';
import ProfileInfo from '../ProfileInfo/ProfileInfo.jsx';
import EventBlock from '../EventBlock/EventBlock.jsx';
import FollowingBlock from '../FollowingBlock/FollowingBlock.jsx';
import Post from '../Post/Post.jsx';

const HomePage = (props) => {
  return (
    <div className={classes.homePage}>
      <div className={classes.scrollBlock}>
        <ProfileTop />
        <div className={classes.narrowColumn}>
          <ProfileInfo />
          <EventBlock />
          <FollowingBlock following={props.following} />
        </div>
        <SubmitPost />
        <Post />
      </div>
      <div className={classes.rightSidebar}>
        <HomePageSidebar users={props.users} />
      </div>
    </div>
  )
}

export default HomePage;