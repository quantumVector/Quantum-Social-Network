import React from 'react';
import classes from './FriendsPage.module.css';


import photoAshley from '../../assets/profiles/Ashley-mini.png';
import photoGarrus from '../../assets/profiles/Garrus-mini.png';
import photoLiara from '../../assets/profiles/Liara-mini.png';
import photoMiranda from '../../assets/profiles/Miranda-mini.png';

const FriendsPage = (props) => {
  if (props.friends.length === 0) {
    props.setFriends(
      [
        {
          id: '1',
          name: 'Miranda Lawson',
          photo: photoMiranda,
          status: 'want pizza...',
          inFriends: true,
        },
        {
          id: '2',
          name: 'Garrus Vakarian',
          photo: photoGarrus,
          status: 'In touch with the reptilians, they are my friends',
          inFriends: true,
        },
        {
          id: '3',
          name: "Liara T'Soni",
          photo: photoLiara,
          status: 'Sad 😔',
          inFriends: true,
        },
        {
          id: '4',
          name: 'Ashley Williams',
          photo: photoAshley,
          status: 'Funniest day of the year, what do you think?',
          inFriends: true,
        },
      ]
    );
  }

  return (
    <div className={classes.friends}>
      {
        props.friends.map(friend => {
          return (
            <div className={classes.friend} key={friend.id}>
              <img src={friend.photo} className={classes.photo} alt="icon" />
              <div className={classes.info}>
                <div className={classes.name}>{friend.name}</div>
                <div className={classes.status}>{friend.status}</div>
                <div className={classes.message}>Write message</div>
              </div>
              <div className={classes.actions}>
                <div className={classes.unfriend}
                  onClick={() => { props.unfriends(friend.id) }}>Unfriend</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default FriendsPage;