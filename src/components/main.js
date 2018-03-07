import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px 7px;
`;

export const Main = ({ children }) => <Wrapper className="page">{children}</Wrapper>;
