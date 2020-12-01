import photoSpectres from '../assets/spectres-icon.png';
import photoAlliance from '../assets/alliance-icon.png';
import photoNews from '../assets/galaxy-news-icon.png';

const initialState = [
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
];

const followingReducer = (state = initialState, action) => {
  return state;
}

export default followingReducer;