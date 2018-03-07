import React from 'react';
import styled from 'styled-components';
import { decode } from '../utils';

const H1 = styled.h1`
  font-size: 2.2rem;
`;

export const PageTitle = ({ children }) => <H1>{decode(children)}</H1>;
