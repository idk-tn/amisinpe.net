import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavLink = ({ isClickable, path = '', url, text, ...props }) => {
  if (!isClickable) {
    return (
      <Link to={`${path}${url}`} {...props}>
        {text}
      </Link>
    );
  }

  return <span style={{ background: '#91809c' }} {...props}>{text}</span>;
};

NavLink.propTypes = {
  isClickable: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  text-align: center;
`;

const PaginationLink = styled(NavLink)`
  background: #574264;
  height: 40px;
  width: 40px;
  display: inline-block;
  border-radius: 20px;
  line-height: 40px;
  font-size: 24px;
  margin: 0 3px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const Pagination = ({ path, first, last, previousUrl, nextUrl }) => (
  (!(first && last) &&
  <Wrapper>
    <PaginationLink
      path={path}
      isClickable={first}
      url={previousUrl}
      text="<<"
    />
    <PaginationLink path={path} isClickable={last} url={nextUrl} text=">>" />
  </Wrapper>
  )
);

Pagination.propTypes = {
  path: PropTypes.string.isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  previousUrl: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
};
