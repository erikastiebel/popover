import React, { useContext } from 'react';
import { ActionMenuContext } from './../Context';
import ActionMenuWrapper from './ActionMenuWrapper';
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  padding: 20px;

  .logo {
    font-size: 1.2em;
    font-weight: 800;
  }
`

const Header = () => {
  const { actions } = useContext(ActionMenuContext);
  return (
    <StyledHeader>
      <span aria-label="UI case for Mentimeter" className="logo">UI Case</span>
      <div>
        <ActionMenuWrapper
          trigger={<span className="profile-menu">ES</span>}
          menu={actions.getActionMenu('profileMenu')}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
