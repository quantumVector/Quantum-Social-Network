import React from 'react';
import classes from './LeftSidebar.module.css';
import home from '../../assets/home-icon.png';
import news from '../../assets/news-icon.png';
import friends from '../../assets/friends-icon.png';
import communities from '../../assets/communities-icon.png';
import photos from '../../assets/photos-icon.png';
import videos from '../../assets/videos-icon.png';
import files from '../../assets/files-icon.png';
import events from '../../assets/events-icon.png';

const LeftSidebar = () => {
  return (
    <div className={classes.block}>
      <div className={classes.menu}>
        <div className={classes.title}>MENU</div>
        <nav className={classes.nav}>
          <ol>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={home} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>Home</div>
            </li>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={news} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>News</div>
            </li>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={friends} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>Friends</div>
            </li>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={communities} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>Communities</div>
            </li>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={photos} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>Photos</div>
            </li>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={videos} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>Videos</div>
            </li>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={files} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>Files</div>
            </li>
            <li className={classes.item}>
              <div className={classes.iconCont}>
                <img src={events} className={classes.icon} alt='icon'></img>
              </div>
              <div className={classes.text}>Events</div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default LeftSidebar;