import React from 'react';

import { InnerWrapper } from '../Wrapper/Wrapper';
import Text from '../Text/Text';

import DonationDogImg from '../../assets/img/donation-dog.png';
import CreditCardIcon from '../../assets/icon/credit-card.svg';

import './Donation.scss';

const Donation: React.FC = () => {
  const textContent = {
    heading: 'You can also make a donation',
    subheadings: 'Name of the bank / Type of bank account',
    creditCardNumber: '8380 2880 8028 8791 7435',
    description: `Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et 
    vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
  };

  return (
    <section id="donation">
      <InnerWrapper isContentWrapper>
        <img
          src={DonationDogImg}
          alt="Dog"
          className="content__image"
        />
        <Text heading={textContent.heading}>
          <h5 className="text__subheading">
            {textContent.subheadings}
          </h5>
          <p className="text__credit-card">
            <img src={CreditCardIcon} alt="Credit card" />
            {textContent.creditCardNumber}
          </p>
          <p className="text__description">
            {textContent.description}
          </p>
        </Text>
      </InnerWrapper>
    </section>
  );
};

export default Donation;
