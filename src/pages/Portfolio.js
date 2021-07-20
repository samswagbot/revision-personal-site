import React from 'react';
import styled from 'styled-components';
import { MainContainer, Code } from 'Components/components';

const StyledMainCtn = styled(MainContainer)`
  @media screen and (min-width: 768px) {
    &:first-child {
      width: 90%;
    }
  }
`;

const Portfolio = () => (
  <StyledMainCtn>
    <Code />
  </StyledMainCtn>
);
export default Portfolio;
