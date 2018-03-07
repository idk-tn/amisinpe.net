import React from 'react';
import PropTypes from 'prop-types';
import GLink from 'gatsby-link';
import styled from 'styled-components';

import {
  Main,
  Pagination,
  PageTitle,
  PostDate,
  Separator,
} from '../components';

const PostTitle = styled.h2`
  float: left;
`;

const JdbPage = ({ pathContext }) => {
  const { group, index, first, last } = pathContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Main>
      <PageTitle>Journal de bord</PageTitle>
      <Pagination
        last={last}
        first={first}
        previousUrl={previousUrl}
        nextUrl={nextUrl}
        path="/journal-de-bord/"
      />
      {group.map(({ node }) => {
        return (
          <div key={node.guid}>
            <PostTitle>
              <GLink
                to={`/journal-de-bord/${node.guid.replace(
                  'http://amisinpe.lcl/',
                  ''
                )}`}
                dangerouslySetInnerHTML={{ __html: node.title }}
              />
            </PostTitle>

            <PostDate date={node.date} />
            <div style={{ clear: 'both' }} />
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Separator />
          </div>
        );
      })}
    </Main>
  );
};

JdbPage.propTypes = {
  pathContext: PropTypes.object.isRequired,
};

export default JdbPage;
