import Routes from './routes';

const navLinks = [
  {
    id: 1,
    name: 'About the shelter',
    url: Routes.MainPage,
    headerTheme: 'default',
  },
  {
    id: 2,
    name: 'Our pets',
    url: Routes.PetsPage,
    headerTheme: 'light',
  },
  {
    id: 3,
    name: 'Help the shelter',
    url: '#',
    headerTheme: 'light',
  },
  {
    id: 4,
    name: 'Contacts',
    url: '#',
    headerTheme: 'light',
  },
];

export default navLinks;
