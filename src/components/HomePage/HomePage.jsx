import React from 'react';
import classes from './HomePage.module.css';
import HomePageSidebar from '../HomePageSidebar/HomePageSidebar.jsx';
import ProfileTop from '../ProfileTop/ProfileTop.jsx';
import ProfileInfo from '../ProfileInfo/ProfileInfo.jsx';
import EventBlock from '../EventBlock/EventBlock.jsx';
import FollowingBlock from '../FollowingBlock/FollowingBlock.jsx';
import Post from '../Post/Post.jsx';
import SubmitPostContainer from '../SubmitPost/SubmitPostContainer';

const HomePage = (props) => {
  const posts = props.state.posts.published.map( post => {
    return <Post profile={props.state.profile} post={post} />
  });

  return (
    <div className={classes.homePage}>
      <div className={classes.scrollBlock}>
        <ProfileTop profile={props.state.profile} />
        <div className={classes.narrowColumn}>
          <ProfileInfo />
          <EventBlock events={props.state.events} />
          <FollowingBlock following={props.state.following} />
        </div>
        <SubmitPostContainer profile={props.state.profile} posts={props.state.posts} dispatch={props.dispatch} />
        { posts }
      </div>
      <div className={classes.rightSidebar}>
        <HomePageSidebar state={props.state} />
      </div>
    </div>
  )
}

export default HomePage;