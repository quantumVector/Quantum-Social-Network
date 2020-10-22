import React from 'react';
import classes from './RightSidebar.module.css';
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

const RightSidebar = () => {
  return (
    <div className={classes.block}>
      <div className={classes.stories}>
        <div className={classes.title}>STORIES</div>
        <div className={classes.items}>
          <div className={classes.item}>
            <img src={Ashley} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Ashley Williams</div>
              <div className={classes.time}>29 minutes ago</div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Liara} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Liara T'Soni</div>
              <div className={classes.time}>3 hours ago</div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Mordin} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Mordin Solus</div>
              <div className={classes.time}>9 hours ago</div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={James} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>James Vega</div>
              <div className={classes.time}>18 hours ago</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.friends}>
        <div className={classes.title}>10 FRIENDS ONLINE</div>
        <div className={classes.items}>
          <div className={classes.item}>
            <img src={Anderson} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>David Anderson</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Ashley} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Ashley Williams</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Garrus} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Garrus Vakarian</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={James} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>James Vega</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Liara} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Liara T'Soni</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Miranda} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Miranda Lawson</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Mordin} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Mordin Solus</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Tali} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Tali'Zorah</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Thane} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Thane Krios</div>
              <div className={classes.online}></div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Urdnot} className={classes.profileIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Urdnot Wrex</div>
              <div className={classes.online}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar;