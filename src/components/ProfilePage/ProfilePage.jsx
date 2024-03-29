import React from 'react';
import classes from './ProfilePage.module.css';
import HomePageSidebar from '../HomePageSidebar/HomePageSidebar.jsx';
import ProfilePageTop from '../ProfilePageTop/ProfilePageTop.jsx';
import ProfilePageInfo from '../ProfilePageInfo/ProfilePageInfo.jsx';
import EventBlock from '../EventBlock/EventBlock.jsx';
import FollowingBlock from '../FollowingBlock/FollowingBlock.jsx';
import SubmitPostContainer from '../SubmitPost/SubmitPostContainer';

const HomePage = ({ profile, status, updateStatus, savePhoto, isOwner, saveProfileInfo, state }) => {
  return (
    <div className={classes.homePage}>
      <div className={classes.scrollBlock}>
        <ProfilePageTop
          savePhoto={savePhoto}
          isOwner={isOwner}
          profile={profile}
          status={status}
          updateStatus={updateStatus} />
        <div className={classes.narrowColumn}>
          <ProfilePageInfo
            isOwner={isOwner}
            profile={profile}
            saveProfileInfo={saveProfileInfo} />
          <EventBlock events={state.events} />
          <FollowingBlock following={state.following} />
        </div>
        <SubmitPostContainer />
      </div>
      <div className={classes.rightSidebar}>
        <HomePageSidebar state={state} />
      </div>
    </div>
  )
}

export default HomePage;