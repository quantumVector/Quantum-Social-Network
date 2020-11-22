import photoAnderson from '../assets/profiles/Anderson-mini.png';
import photoAshley from '../assets/profiles/Ashley-mini.png';
import photoGarrus from '../assets/profiles/Garrus-mini.png';
import photoJames from '../assets/profiles/James-mini.png';
import photoLiara from '../assets/profiles/Liara-mini.png';
import photoMiranda from '../assets/profiles/Miranda-mini.png';
import photoMordin from '../assets/profiles/Mordin-mini.png';
import photoTali from '../assets/profiles/Tali-mini.png';
import photoThane from '../assets/profiles/Thane-mini.png';
import photoUrdnot from '../assets/profiles/Urdnot-mini.png';
import photoSpectres from '../assets/spectres-icon.png';
import photoAlliance from '../assets/alliance-icon.png';
import photoNews from '../assets/galaxy-news-icon.png';

const state = {
  users: [
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
  ],

  following: [
    {
      name: 'Organization SPECTRES',
      photo: photoSpectres,
    },
    {
      name: 'Alliance Special Forces',
      photo: photoAlliance,
    },
    {
      name: 'Galactic News',
      photo: photoNews,
    },
  ],
}

export default state;