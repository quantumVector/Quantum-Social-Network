import React from 'react';
import StoriesPreview from '../StoriesPreview/StoriesPreview.jsx';
import FriendsOnline from '../FriendsOnline/FriendsOnline.jsx';
import Search from '../Search/Search.jsx';
import classes from './HomePageSidebar.module.css';
import settings from '../../assets/settings-icon.png';
import edite from '../../assets/edite-icon.png';
import add from '../../assets/add-icon.png';

const HomePageSidebar = (props) => {
  const stories = props.state.users.map( user => {
    if (user.story) return <StoriesPreview profilePhoto={user.photo} name={user.name} time={user.storyCreated} />

    return false;
  });

  const friends = props.state.users.map( user => {
    return <FriendsOnline profilePhoto={user.photo} name={user.name} />
  });

  return (
    <div className={classes.block}>
      <div className={classes.stories}>
        <div className={classes.title}>STORIES</div>
        <div className={classes.items}>
          { stories }
        </div>
      </div>

      <div className={classes.friends}>
        <div className={classes.title}>{props.state.friendsOnline} FRIENDS ONLINE</div>
        <div className={classes.items}>
          { friends }
        </div>
      </div>

      <div className={classes.footer}>
        <Search />
        <div className={classes.item}>
          <img src={settings} className={classes.settings} alt="icon"/>
        </div>
        <div className={classes.item}>
          <img src={edite} className={classes.edite} alt="icon"/>
        </div>
        <div className={classes.item}>
          <img src={add} className={classes.add} alt="icon"/>
        </div>
      </div>
    </div>
  )
}

export default HomePageSidebar;