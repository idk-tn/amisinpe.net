import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

import { cleanContent, decode } from '../utils';
import { Main, PageTitle, Separator } from '../components';

const PostTitle = styled.h2` 
  cursor: pointer;
`;

const ActionPage = ({ data }) => {
  const { allWordpressPost } = data;

  return (
    <Main>
      <PageTitle>Actions</PageTitle>

      {allWordpressPost.edges.map(({ node }) => {
        return (
          <div key={node.guid}>
            <Collapsible trigger={<PostTitle>{decode(node.title)}</PostTitle>}>
              <div
                dangerouslySetInnerHTML={{ __html: cleanContent(node.content) }}
              />
              <Separator />
            </Collapsible>
          </div>
        );
      })}
    </Main>
  );
};

ActionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActionPage;

/* eslint-disable no-undef */
export const query = graphql`
  query actionQuery {
    allWordpressPost(
      filter: { categories: { name: { eq: "Actions" } } }
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
