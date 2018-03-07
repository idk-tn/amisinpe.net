import React from 'react';
import styled from 'styled-components';

import bonhommes from '../../static/assets/bonhommes.gif';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Separator = () => (
  <Wrapper>
    <img src={bonhommes} alt="Séparation" />
  </Wrapper>
);
