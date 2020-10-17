import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './AppContext';
import Header from '../components/Header/Header';
import Main from '../page/Main/Main';
import Pets from '../page/Pets/Pets';
import Footer from '../components/Footer/Footer';

import Routes from '../config/routes';

import './App.scss';

// TODO: FIX TOP SCROLL WITH ROUTER
// const [activeNavLink, setActiveNavLink] = useState(1);
// const [menuState, setMenuState] = useState('opened');
const App = () => (
  <Router>
    <AppProvider>
      <Header />
      <Switch>
        <Route
          path={Routes.MainPage}
          render={({ location }) => <Main pagePath={location.pathname} />}
          exact
        />
        <Route
          path={Routes.PetsPage}
          render={({ location }) => <Pets pagePath={location.pathname} />}
        />
      </Switch>
      <Footer />
    </AppProvider>
  </Router>
);
export default App;
