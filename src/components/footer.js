import React from 'react';
import styled from 'styled-components';
import { Styling } from '../utils';

const Wrapper = styled.div`
  height: ${Styling.footer.height}px;
  font-weight: bold;
  text-align: center;
  background: #adcde3;
  border-bottom-right-radius: 50px;
  padding-top: 27px;
  font-style: italic;
  font-size: 0.8em;
  color: #5a5a5a;
  @media only screen and (max-width: ${Styling.breakpoints.md}px) {
    padding-top: 19px;
    font-size: 0.7em;
  }
`;

export const Footer = () => (
  <Wrapper>
    {'Association des Amis de l\'INPE, INPE, rue Jabrane Khalil Jabrane, La Manouba'}
  </Wrapper>
);
