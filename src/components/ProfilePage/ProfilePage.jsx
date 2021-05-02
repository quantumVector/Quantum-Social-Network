import React from 'react';
import classes from './ProfilePage.module.css';
import HomePageSidebar from '../HomePageSidebar/HomePageSidebar.jsx';
import ProfilePageTop from '../ProfilePageTop/ProfilePageTop.jsx';
import ProfilePageInfo from '../ProfilePageInfo/ProfilePageInfo.jsx';
import EventBlock from '../EventBlock/EventBlock.jsx';
import FollowingBlock from '../FollowingBlock/FollowingBlock.jsx';
import SubmitPostContainer from '../SubmitPost/SubmitPostContainer';

const HomePage = (props) => {
  return (
    <div className={classes.homePage}>
      <div className={classes.scrollBlock}>
        <ProfilePageTop profile={props.profile} />
        <div className={classes.narrowColumn}>
          <ProfilePageInfo />
          <EventBlock events={props.state.events} />
          <FollowingBlock following={props.state.following} />
        </div>
        <SubmitPostContainer />
      </div>
      <div className={classes.rightSidebar}>
        <HomePageSidebar state={props.state} />
      </div>
    </div>
  )
}

export default HomePage;