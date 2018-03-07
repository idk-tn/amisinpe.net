import React from 'react';
import PropTypes from 'prop-types';
import GLink from 'gatsby-link';

import {
  Main,
  Pagination,
  PageTitle,
  PostDate,
  Separator,
} from '../components';

const BulletinPage = ({ pathContext }) => {
  console.log(pathContext);
  const { group, index, first, last } = pathContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Main>
      <PageTitle>Derniers bulletins</PageTitle>
      <Pagination
        last={last}
        first={first}
        previousUrl={previousUrl}
        nextUrl={nextUrl}
        path="/dernier-bulletin/"
      />
      {group.map(({ node }) => {
        return (
          <div key={node.guid}>
            <h2>
              <GLink
                to={`/dernier-bulletin/${node.guid.replace(
                  'http://amisinpe.lcl/',
                  ''
                )}`}
                dangerouslySetInnerHTML={{ __html: node.title }}
              />
            </h2>

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

BulletinPage.propTypes = {
  pathContext: PropTypes.object.isRequired,
};

export default BulletinPage;
