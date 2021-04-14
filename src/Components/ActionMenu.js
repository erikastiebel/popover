import React from 'react';
import styled from "styled-components";

const StyledActionMenu = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  color: #000;
  .action-menu-arrow {
    height: 10px;
    position: absolute;
    width: 10px;
  }
  .action-menu-arrow {
    position: absolute;
    width: 10px;
    height: 10px;

    &:after {
      content: " ";
      position: absolute;
      top: -5px;
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
      background-color: #fff;
    }
  }

  &[data-popper-placement^='top'] > .action-menu-arrow {
    bottom: -10px;
  }
`;

const ActionMenu = React.forwardRef((props, ref) => (
  <StyledActionMenu ref={ref} style={props.style} >
    {props.children}
  </StyledActionMenu>
));

export default ActionMenu;
