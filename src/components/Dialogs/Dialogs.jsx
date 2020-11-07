import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from '../DialogsItem/DialogsItem.jsx';
import Search from '../Search/Search.jsx';
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

const msg = 'Mauris consectetur risus sit amet ultrices laoreet. Sed et varius metus...';

const Dialogs = () => {
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.title}>DIALOGS</div>
      <div className={classes.dialogsBlock}>
        <DialogsItem photo={Ashley} name='Ashley Williams' msg={msg} count='5' online='true'/>
        <DialogsItem photo={Liara} name='Liara' msg={msg} count='3' online='true'/>
        <DialogsItem photo={James} name='James Vega' msg={msg} count='1' online='true'/>
        <DialogsItem photo={Mordin} name='Mordin Solus' msg={msg} count='5' online='true'/>
        <DialogsItem photo={Anderson} name='David Anderson' msg={msg} count='' online='true'/>
        <DialogsItem photo={Garrus} name='Garrus Vak' msg={msg} count='5' online='true'/>
        <DialogsItem photo={Miranda} name='Miranda' msg={msg} count='5' online='true'/>
        <DialogsItem photo={Tali} name='Tali' msg={msg} count='5' online='true'/>
        <DialogsItem photo={Thane} name='Thane' msg={msg} count='5' online='true'/>
        <DialogsItem photo={Urdnot} name='Urdnot' msg={msg} count='5' online='true'/>
      </div>
      <div className={classes.search}>
        <Search />
      </div>
    </div>
  )
}

export default Dialogs;