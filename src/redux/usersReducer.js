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

const initialState = [
  {
    name: 'David Anderson',
    photo: photoAnderson,
    story: false,
    storyCreated: null,
    id: 1
  },
  {
    name: 'Ashley Williams',
    photo: photoAshley,
    story: true,
    storyCreated: '29 minutes ago',
    id: 2
  },
  {
    name: 'Garrus Vakarian',
    photo: photoGarrus,
    story: false,
    storyCreated: null,
    id: 3
  },
  {
    name: 'James Vega',
    photo: photoJames,
    story: true,
    storyCreated: '3 hours ago',
    id: 4
  },
  {
    name: "Liara T'Soni",
    photo: photoLiara,
    story: true,
    storyCreated: '9 hours ago',
    id: 5
  },
  {
    name: 'Miranda Lawson',
    photo: photoMiranda,
    story: false,
    storyCreated: null,
    id: 6
  },
  {
    name: 'Miranda Lawson',
    photo: photoMordin,
    story: true,
    storyCreated: '18 hours ago',
    id: 7
  },
  {
    name: "Tali'Zorah",
    photo: photoTali,
    story: false,
    storyCreated: null,
    id: 8
  },
  {
    name: 'Thane Krios',
    photo: photoThane,
    story: false,
    storyCreated: null,
    id: 9
  },
  {
    name: 'Urdnot Wrex',
    photo: photoUrdnot,
    story: false,
    storyCreated: null,
    id: 10
  },
];

const usersReducer = (state = initialState, action) => {
  return state;
}

export default usersReducer;