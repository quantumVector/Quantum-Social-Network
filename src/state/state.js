import photoShepard from '../assets/profiles/Shepard-mini.png';
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
import photoEvent from '../assets/event.jpg';
import photo1Post1 from '../assets/postPhotos/photo1.jpg';
import photo2Post1 from '../assets/postPhotos/photo2.jpg';
import photo3Post1 from '../assets/postPhotos/photo3.jpg';

const state = {
  profile: {
    name: 'John Shepard',
    photo: photoShepard,
  },

  posts: {
    time: '6 hours ago',
    text: 'Individuals forged in the fire of service and battle.',
    content: [photo1Post1, photo2Post1, photo3Post1],
    likes: '87',
    comments: '20',
    shared: '13',
  },

  friendsOnline: '10',

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

  events: {
    label: 'Travel to the Citadel for supplies.',
    photo: photoEvent,
    fullTime: '01st Jan, 2186 07:00AM',
    day: '01',
    month: 'Jan',
  },

  chat: {
    AshleyWilliams: {
      messages: [
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:05 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare.',
        },
        {
          from: 'me',
          photo: photoShepard,
          time: '10:25 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis purus sapien. Nullam id ligula sem. Proin vitae risus rutrum.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:26 PM',
          text: 'Lorem ipsum dolor sit amet.',
        },
        {
          from: 'me',
          photo: photoShepard,
          time: '10:47 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ultrices ligula, et placerat libero. Suspendisse potenti. Nam non commodo.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:48 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget imperdiet ante. Aliquam quis tortor.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:49 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex eget ligula auctor, non tempor massa sodales. Ut rutrum elit id accumsan bibendum. Vivamus at tincidunt eros, sed porttitor est. Curabitur ultricies congue aliquam.',
        },
        {
          from: 'me',
          photo: photoShepard,
          time: '11:05 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare luctus dui.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '11:07 PM',
          text: 'Lorem ipsum dolor.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:05 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare.',
        },
        {
          from: 'me',
          photo: photoShepard,
          time: '10:25 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis purus sapien. Nullam id ligula sem. Proin vitae risus rutrum.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:26 PM',
          text: 'Lorem ipsum dolor sit amet.',
        },
        {
          from: 'me',
          photo: photoShepard,
          time: '10:47 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ultrices ligula, et placerat libero. Suspendisse potenti. Nam non commodo.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:48 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget imperdiet ante. Aliquam quis tortor.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '10:49 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ex eget ligula auctor, non tempor massa sodales. Ut rutrum elit id accumsan bibendum. Vivamus at tincidunt eros, sed porttitor est. Curabitur ultricies congue aliquam.',
        },
        {
          from: 'me',
          photo: photoShepard,
          time: '11:05 PM',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare luctus dui.',
        },
        {
          from: 'friend',
          photo: photoAshley,
          time: '11:07 PM',
          text: 'Lorem ipsum dolor.',
        }],

      attachment: {
        photos: {
          count: '203',
        },
        videos: {
          count: '12',
        },
        files: {
          count: '23',
        },
        audio: {
          count: '10',
        },
        links: {
          count: '238',
        },
        voice: {
          count: '19',
        },
      }
    }
  }
}

export default state;