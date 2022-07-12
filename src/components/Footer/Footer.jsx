import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinkItems,
  FooterHeader,
  FooterLink,
  Icons,
  // FooterCopyRight,
} from '../style/Footer.style';

import { IoLogoGithub, IoLogoStackoverflow, IoLogoLinkedin } from 'react-icons/io5';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkItems>
          <FooterHeader>Contacts</FooterHeader>
          <FooterLink>
          <a href="https://github.com/SophoanMeas" target="_blank" rel="noreferrer">  <Icons>
              <IoLogoGithub/>
            </Icons></a>
            </FooterLink>
            <FooterLink>
          <a href="https://www.linkedin.com/in/sophoan-meas/" target="_blank" rel="noreferrer">  <Icons>
              <IoLogoLinkedin/>
            </Icons></a>
            </FooterLink>
            <FooterLink>
          <a href="https://stackoverflow.com/users/19531652/ponny-meas" target="_blank" rel="noreferrer">  <Icons>
              <IoLogoStackoverflow/>
            </Icons></a>
            </FooterLink>
        </FooterLinkItems>
      </FooterWrapper>
    </FooterContainer>
  );
}
