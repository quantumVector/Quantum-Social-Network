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
            <MenuItem icon={news} label='News' href='/news' />
            <MenuItem icon={friends} label='Friends' href='/friends' />
            <MenuItem icon={communities} label='Communities' href='/communities' />
            <MenuItem icon={photos} label='Photos' href='/photos' />
            <MenuItem icon={videos} label='Videos' href='/videos' />
            <MenuItem icon={files} label='Files' href='/files' />
            <MenuItem icon={events} label='Events' href='/events' />
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default MainMenu;