import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import photoAnderson from './assets/profiles/Anderson-mini.png';
import photoAshley from './assets/profiles/Ashley-mini.png';
import photoGarrus from './assets/profiles/Garrus-mini.png';
import photoJames from './assets/profiles/James-mini.png';
import photoLiara from './assets/profiles/Liara-mini.png';
import photoMiranda from './assets/profiles/Miranda-mini.png';
import photoMordin from './assets/profiles/Mordin-mini.png';
import photoTali from './assets/profiles/Tali-mini.png';
import photoThane from './assets/profiles/Thane-mini.png';
import photoUrdnot from './assets/profiles/Urdnot-mini.png';

const usersData = [
  {
    name: 'David Anderson',
    photo: photoAnderson,
    story: false,
    storyCreated: null,
  },
  {
    name: 'Ashley Williams',
    photo: photoAshley,
    story: true,
    storyCreated: '29 minutes ago',
  },
  {
    name: 'Garrus Vakarian',
    photo: photoGarrus,
    story: false,
    storyCreated: null,
  },
  {
    name: 'James Vega',
    photo: photoJames,
    story: true,
    storyCreated: '3 hours ago',
  },
  {
    name: "Liara T'Soni",
    photo: photoLiara,
    story: true,
    storyCreated: '9 hours ago',
  },
  {
    name: 'Miranda Lawson',
    photo: photoMiranda,
    story: false,
    storyCreated: null,
  },
  {
    name: 'Miranda Lawson',
    photo: photoMordin,
    story: true,
    storyCreated: '18 hours ago',
  },
  {
    name: "Tali'Zorah",
    photo: photoTali,
    story: false,
    storyCreated: null,
  },
  {
    name: 'Thane Krios',
    photo: photoThane,
    story: false,
    storyCreated: null,
  },
  {
    name: 'Urdnot Wrex',
    photo: photoUrdnot,
    story: false,
    storyCreated: null,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App users={usersData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
