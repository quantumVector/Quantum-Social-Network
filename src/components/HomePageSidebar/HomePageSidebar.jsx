import React from 'react';
import StoriesPreview from '../StoriesPreview/StoriesPreview.jsx';
import FriendsOnline from '../FriendsOnline/FriendsOnline.jsx';
import Search from '../Search/Search.jsx';
import classes from './HomePageSidebar.module.css';
import Ashley from '../../assets/profiles/Ashley-mini.png';
import Liara from '../../assets/profiles/Liara-mini.png';
import Mordin from '../../assets/profiles/Mordin-mini.png';
import James from '../../assets/profiles/James-mini.png';
import Anderson from '../../assets/profiles/Anderson-mini.png';
import Garrus from '../../assets/profiles/Garrus-mini.png';
import Miranda from '../../assets/profiles/Miranda-mini.png';
import Tali from '../../assets/profiles/Tali-mini.png';
import Thane from '../../assets/profiles/Thane-mini.png';
import Urdnot from '../../assets/profiles/Urdnot-mini.png';
import settings from '../../assets/settings-icon.png';
import edite from '../../assets/edite-icon.png';
import add from '../../assets/add-icon.png';

const HomePageSidebar = () => {
  return (
    <div className={classes.block}>
      <div className={classes.stories}>
        <div className={classes.title}>STORIES</div>
        <div className={classes.items}>
          <StoriesPreview profilePhoto={Ashley} name='Ashley Williams' time='29 minutes ago' />
          <StoriesPreview profilePhoto={Liara} name="Liara T'Soni" time='3 hours ago' />
          <StoriesPreview profilePhoto={Mordin} name='Mordin Solus' time='9 hours ago' />
          <StoriesPreview profilePhoto={James} name='James Vega' time='18 hours ago' />
        </div>
      </div>

      <div className={classes.friends}>
        <div className={classes.title}>10 FRIENDS ONLINE</div>
        <div className={classes.items}>
          <FriendsOnline profilePhoto={Anderson} name='David Anderson' />
          <FriendsOnline profilePhoto={Ashley} name='Ashley Williams' />
          <FriendsOnline profilePhoto={Garrus} name='Garrus Vakarian' />
          <FriendsOnline profilePhoto={James} name='James Vega' />
          <FriendsOnline profilePhoto={Liara} name="Liara T'Soni" />
          <FriendsOnline profilePhoto={Miranda} name='Miranda Lawson' />
          <FriendsOnline profilePhoto={Mordin} name='Mordin Solus' />
          <FriendsOnline profilePhoto={Tali} name="Tali'Zorah" />
          <FriendsOnline profilePhoto={Thane} name='Thane Krios' />
          <FriendsOnline profilePhoto={Urdnot} name='Urdnot Wrex' />
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