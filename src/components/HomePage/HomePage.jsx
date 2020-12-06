import React from 'react';
import classes from './HomePage.module.css';
import HomePageSidebar from '../HomePageSidebar/HomePageSidebar.jsx';
import ProfileTop from '../ProfileTop/ProfileTop.jsx';
import ProfileInfo from '../ProfileInfo/ProfileInfo.jsx';
import EventBlock from '../EventBlock/EventBlock.jsx';
import FollowingBlock from '../FollowingBlock/FollowingBlock.jsx';
import SubmitPostContainer from '../SubmitPost/SubmitPostContainer';

const HomePage = (props) => {
  return (
    <div className={classes.homePage}>
      <div className={classes.scrollBlock}>
        <ProfileTop profile={props.state.profile} />
        <div className={classes.narrowColumn}>
          <ProfileInfo />
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