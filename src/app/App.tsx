import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './AppContext';
import Header from '../components/Header/Header';
import Main from '../page/Main/Main';
import Pets from '../page/Pets/Pets';
import Footer from '../components/Footer/Footer';

import Routes from '../config/routes';

import './App.scss';

const App = () => {
  const isMainPage = window.location.pathname === Routes.MainPage;
  const headerTheme = isMainPage ? '' : 'light';
  return (
    <Router>
      <AppProvider>
        <Header theme={headerTheme} />
        <Switch>
          <Route component={Main} path={Routes.MainPage} exact />
          <Route component={Pets} path={Routes.PetsPage} />
        </Switch>
        <Footer />
      </AppProvider>
    </Router>
  );
};

export default App;
