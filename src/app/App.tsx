import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Main from '../page/Main/Main';
import Pets from '../page/Pets/Pets';
import Footer from '../components/Footer/Footer';

import './App.scss';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route component={Main} path="/" exact />
      <Route component={Pets} path="/pets" />
    </Switch>
    <Footer />
  </>
);

export default App;
