import React from 'react';
import GLink from 'gatsby-link';
import PropTypes from 'prop-types';
import { cleanContent } from '../utils';
import { PostDate, PageTitle, Main } from '../components';

/* eslint-disable react/no-danger */
const JdbSingle = ({ data }) => {
  const { wordpressPost } = data;

  return (
    <Main>
      <PageTitle>{wordpressPost.title}</PageTitle>
      <PostDate date={wordpressPost.date} />
      <div
        dangerouslySetInnerHTML={{
          __html: cleanContent(wordpressPost.content),
        }}
      />

      <GLink to="/journal-de-bord/">Retour</GLink>
    </Main>
  );
};

JdbSingle.propTypes = {
  data: PropTypes.object.isRequired,
};

export default JdbSingle;

/* eslint-disable no-undef */
export const query = graphql`
  query BlogPostQuery($guid: String!) {
    wordpressPost(guid: { eq: $guid }) {
      id
      title
      date
      content
    }
  }
`;
