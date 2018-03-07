import React from 'react';
import PropTypes from 'prop-types';
import { cleanContent, decode } from '../utils';
import { Main, PageTitle, Separator } from '../components';

const PresentationPage = ({ data }) => {
  const { allWordpressPost } = data;

  return (
    <Main>
      <PageTitle>Présentation</PageTitle>

      {allWordpressPost.edges.map(({ node }) => {
        return (
          <div key={node.guid}>
            <h2>{decode(node.title)}</h2>

            <div
              dangerouslySetInnerHTML={{ __html: cleanContent(node.content) }}
            />
            <Separator />
          </div>
        );
      })}
    </Main>
  );
};

PresentationPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PresentationPage;

/* eslint-disable no-undef */
export const query = graphql`
  query presentationQuery {
    allWordpressPost(
      filter: { categories: { name: { eq: "Présentation" } } }
      sort: { order: ASC, fields: [date] }
    ) {
      edges {
        node {
          guid
          title
          content
          date
          categories {
            name
          }
        }
      }
    }
  }
`;
