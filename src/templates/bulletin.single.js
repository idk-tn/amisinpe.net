import React from 'react';
import GLink from 'gatsby-link';
import PropTypes from 'prop-types';
import { cleanContent } from '../utils';
import { PostDate, PageTitle, Main } from '../components';

/* eslint-disable react/no-danger */
const BulletinSingle = ({ data }) => {
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

      <GLink to="/dernier-bulletin/">Retour</GLink>
    </Main>
  );
};

BulletinSingle.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BulletinSingle;

/* eslint-disable no-undef */
export const query = graphql`
  query BulletinQuery($guid: String!) {
    wordpressPost(guid: { eq: $guid }) {
      id
      title
      date
      content
    }
  }
`;
