import React from 'react';

import { InnerWrapper, OuterWrapper } from '../Wrapper/Wrapper';

import EmailIcon from '../../assets/icon/icon-email.svg';
import PhoneIcon from '../../assets/icon/icon-phone.svg';
import MarkerIcon from '../../assets/icon/icon-marker.svg';
import PuppyImg from '../../assets/img/footer-puppy.png';

import './Footer.scss';

const Footer: React.FC = () => (
  <footer id="footer">
    <OuterWrapper>
      <InnerWrapper isContentWrapper>
        <div className="content__column">
          <h3 className="content__column__heading">For questions and suggestions</h3>
          <h4 className="content__column__subheading">
            <a href="mailto:email@shelter.com">
              <img src={EmailIcon} alt="Email" />
              email@shelter.com
            </a>
          </h4>
          <h4 className="content__column__subheading">
            <a href="tel:+136745677554">
              <img src={PhoneIcon} alt="Phone" />
              +13 674 567 75 54
            </a>
          </h4>
        </div>
        <div className="content__column column--extensive">
          <h3 className="content__column__heading">We are waiting for your visit</h3>
          <h4 className="content__column__subheading">
            <img src={MarkerIcon} alt="Marker" />
            1 Central Street, Boston (entrance from the store)
          </h4>
          <h4 className="content__column__subheading">
            <img src={MarkerIcon} alt="Marker" />
            18 South Park, London
          </h4>
        </div>
        <div className="content__column column--adaptive">
          <img src={PuppyImg} alt="Dog Puppy" />
        </div>
      </InnerWrapper>
    </OuterWrapper>
  </footer>
);

export default Footer;
