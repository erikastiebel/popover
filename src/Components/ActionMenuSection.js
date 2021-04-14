import React from 'react';
import styled from 'styled-components';

const StyledActionMenuSection = styled.div`
  border-top: 1px solid #aaa;
  padding: 10px 0;
  &:first-of-type {
    border-top: none;
  }
`

const ActionMenuSection = (props) => (
  <StyledActionMenuSection>
    {props.children}
  </StyledActionMenuSection>
);

export default ActionMenuSection;
