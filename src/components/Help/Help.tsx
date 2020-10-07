import React from 'react';

import { InnerWrapper } from '../Wrapper/Wrapper';
import List from './List/List';

import './Help.scss';

const Help: React.FC = () => (
  <section id="help">
    <InnerWrapper isContentWrapper>
      <h3 className="content__heading">
        How you can help
        <br />
        our shelter
      </h3>
      <List />
    </InnerWrapper>
  </section>
);

export default Help;
