import React from 'react';

import StartScreen from '../../components/StartScreen/StartScreen';
import About from '../../components/About/About';
import Pets from '../../components/Pets/Pets';
import Help from '../../components/Help/Help';
import Donation from '../../components/Donation/Donation';
import Footer from '../../components/Footer/Footer';

import './Main.scss';

const Main: React.FC = () => (
  <div id="main-page">
    <StartScreen />
    <About />
    <Pets />
    <Help />
    <Donation />
    <Footer />
  </div>
);

export default Main;
