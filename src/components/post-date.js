import React from 'react';
import format from 'date-fns/format';
import * as locale from 'date-fns/locale/fr';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.span`
  text-transform: capitalize;
  font-style: italic;
  font-size: 0.8em;
  float: right;
  color: #000;
  padding-bottom: 12px;
`;

export const PostDate = ({ date }) => (
  <Label>{format(new Date(date), 'DD MMMM YYYY', { locale })}</Label>
);

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
};
