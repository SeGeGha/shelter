import React from 'react';

import Text from '../Text/Text';
import { InnerWrapper } from '../Wrapper/Wrapper';

import Pets from '../../assets/img/about-pets.png';

import './About.scss';

const About: React.FC = () => {
  const textContent = {
    heading: 'About the shelter “Cozy House”',
    subheadings: [
      `Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. 
      The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.`,
      `We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including 
      psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of 
      the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would 
      hardly ever leave them alone.`,
    ],
  };

  return (
    <section id="about">
      <InnerWrapper isContentWrapper>
        <img
          src={Pets}
          alt="Pets"
          className="content__image"
        />
        <Text heading={textContent.heading} subheadings={textContent.subheadings} />
      </InnerWrapper>
    </section>
  );
};

export default About;
