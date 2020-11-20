import React from 'react';
import classes from './MainMenu.module.css';
import MenuItem from '../MenuItem/MenuItem.jsx';
import home from '../../assets/home-icon.png';
import news from '../../assets/news-icon.png';
import friends from '../../assets/friends-icon.png';
import communities from '../../assets/communities-icon.png';
import photos from '../../assets/photos-icon.png';
import videos from '../../assets/videos-icon.png';
import files from '../../assets/files-icon.png';
import events from '../../assets/events-icon.png';

const MainMenu = () => {
  return (
    <div className={classes.block}>
      <div className={classes.menu}>
        <div className={classes.title}>MENU</div>
        <nav className={classes.nav}>
          <ol>
            <MenuItem icon={home} label='Home' href='/home' />
            <MenuItem icon={news} label='News' />
            <MenuItem icon={friends} label='Friends' />
            <MenuItem icon={communities} label='Communities' />
            <MenuItem icon={photos} label='Photos' />
            <MenuItem icon={videos} label='Videos' />
            <MenuItem icon={files} label='Files' />
            <MenuItem icon={events} label='Events' />
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default MainMenu;