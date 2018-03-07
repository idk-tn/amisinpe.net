import React from 'react';
import PropTypes from 'prop-types';
import { cleanContent } from '../utils';
import { Main, PageTitle } from '../components';

const HomePage = ({ data }) => {
  const { wordpressPage } = data;

  return (
    <Main>
      <PageTitle>Bienvenue</PageTitle>
      <div
        dangerouslySetInnerHTML={{
          __html: cleanContent(wordpressPage.content),
        }}
      />
    </Main>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

/* eslint-disable no-undef */
export const query = graphql`
  query HomePageQuery {
    wordpressPage(title: { eq: "Accueil" }) {
      id
      title
      date
      content
    }
  }
`;
