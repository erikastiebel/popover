import React from 'react';
import styled from 'styled-components';

  const StyledActionMenuTriggerElement = styled.button`
    display: flex;
    padding: 0;
    background: none;
    border: none;
    appearance: none;
    color: inherit;

    &:hover {
      cursor: pointer;
    }

    .profile-menu {
      background-color: darkcyan;
      border-radius: 50%;
      display: flex;
      color: #fff;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
    .presentation-menu {
      width: 40px;
    }
  `

  const ActionMenuTriggerElement = React.forwardRef((props, ref) => (
    <StyledActionMenuTriggerElement aria-label={`open ${props.menu.title}`} ref={ref} onClick={() => props.toggleActionMenu()}>
      {props.children}
    </StyledActionMenuTriggerElement>
  ));

export default ActionMenuTriggerElement;
