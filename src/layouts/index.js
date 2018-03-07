import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Footer, Header } from '../components';
import { Styling } from '../utils';
import './index.css';

const MainContainer = styled.div`
  background: #adcde3;
  padding: 0px 1.0875rem;
  border-right: 7px solid #efd3a3;
  border-bottom-right-radius: 50px;
  margin: 0 12px;
  margin-right: 6px;
  @media only screen and (max-width: ${Styling.breakpoints.md}px) {
    margin-left: 0;
  }
  @media only screen and (max-width: ${Styling.breakpoints.sm}px) {
    margin-left: 0;
  }
`;

const Decorator = styled.div`
  background: #ffe4b5;
  padding: 0 30px;
  min-height: 100%;
  @media only screen and (max-width: ${Styling.breakpoints.md}px) {
    padding: 0 10px;
  }
  @media only screen and (max-width: ${Styling.breakpoints.sm}px) {
    padding: 0;
  }
`;

const StrippedDecorator = styled.div`
  background: repeating-linear-gradient( -21deg, #8eaec4, #8EAEC6 2px, #b7ccda 2px, #b7ccda 4px );
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  min-height: 100%;
  position: relative;
  @media only screen and (max-width: ${Styling.breakpoints.md}px) {
    padding: 0 10px;
  }
  @media only screen and (max-width: ${Styling.breakpoints.sm}px) {
    padding: 0;
  }
`;

const TemplateWrapper = ({ children }) => (

    <StrippedDecorator className="strip">
    <Helmet
      title="AmisINPE"
      meta={[
        {
          name: 'description',
          content:
            "Le site de l'association des amis de l'Institut National de Protection de l'Enfance en Tunisie",
        },
        {
          name: 'keywords',
          content:
            "I.N.P.E, INPE, Institut national de Protection de l'Enfance, Tunisie",
        },
      ]}
    >
      <html lang="fr" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <script>
        {`setInterval(function() {
            if (document.querySelector('.strip').clientHeight <= window.innerHeight) {
              document.querySelector('.page').setAttribute('style', 'min-height:' + 
              (window.innerHeight - ${Styling.footer.height} - document.querySelector('.header').clientHeight) + 'px');  
            } else {
              document.querySelector('.page').setAttribute('style', '');
            }
          }, 300);`}
      </script>
    </Helmet>
      <Decorator>
        <Header />
        <MainContainer className="main">
          {children()}
          <Footer />
        </MainContainer>
      </Decorator>
    </StrippedDecorator>

);

export default TemplateWrapper;
