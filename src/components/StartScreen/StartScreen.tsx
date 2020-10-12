import React from 'react';

import { InnerWrapper, OuterWrapper } from '../Wrapper/Wrapper';
import Text from '../Text/Text';
import Button from '../Button/Button';

import PuppyDogImg from '../../assets/img/start-screen-puppy.png';

import './StartScreen.scss';

const StartScreen: React.FC = () => {
  const textContent = {
    heading: 'Not only people need a house',
    subheadings: [
      `We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or 
      she will love you more than anybody else in the world, you will see!`,
    ],
  };

  const content = (
    <div className="content">
      <Text
        heading={textContent.heading}
        subheadings={textContent.subheadings}
      >
        <Button type="primary">Make a friend</Button>
      </Text>
      <img src={PuppyDogImg} alt="Dog Puppy" className="content__image" />
    </div>
  );

  return (
    <section id="start-screen">
      <OuterWrapper>
        <InnerWrapper>
          {content}
        </InnerWrapper>
      </OuterWrapper>
    </section>
  );
};

export default StartScreen;
