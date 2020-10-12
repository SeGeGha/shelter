import React from 'react';

import StartScreen from '../../components/StartScreen/StartScreen';
import About from '../../components/About/About';
import Pets from '../../components/Pets/Pets';
import Help from '../../components/Help/Help';
import Donation from '../../components/Donation/Donation';

import './Main.scss';

const Main: React.FC = () => (
  <main id="main-page">
    <StartScreen />
    <About />
    <Pets />
    <Help />
    <Donation />
  </main>
);

export default Main;
