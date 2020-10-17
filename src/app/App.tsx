import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './AppContext';
import Header from '../components/Header/Header';
import Main from '../page/Main/Main';
import Pets from '../page/Pets/Pets';
import Footer from '../components/Footer/Footer';

import Routes from '../config/routes';

import './App.scss';

const App = () => {
  // TODO: FIX TOP SCROLL WITH ROUTER
  const [headerTheme, setHeaderTheme] = useState('');

  function routeTracker(theme: string) {
    setHeaderTheme(theme);
  }

  return (
    <Router>
      <AppProvider>
        <Header theme={headerTheme} />
        <Switch>
          <Route
            path={Routes.MainPage}
            render={() => <Main pageDidMount={routeTracker} />}
            exact
          />
          <Route
            path={Routes.PetsPage}
            render={() => <Pets pageDidMount={routeTracker} />}
          />
        </Switch>
        <Footer />
      </AppProvider>
    </Router>
  );
};

export default App;
