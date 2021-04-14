import React, { useContext } from 'react';
import { ActionMenuContext } from './../Context';
import ActionMenuWrapper from './ActionMenuWrapper';
import {ReactComponent as MenuDots} from './../img/dot-menu.svg';
import styled from 'styled-components';

const StyledPresentationListItem = styled.div`
  display: flex;
  font-weight: 400;
  padding: 15px;
  border-bottom: 1px solid #f1f1f1;

  &:hover {
    background: #f1f1f1;
  }

  .list-item {
    align-items: center;
    display: flex;
  }

  .title {
    flex: 0 1 100%;
  }

  .date {
    color: #989898;
    display: none;
    width: 400px;
    @media (min-width: 768px) {
      display: flex;
    }
  }
`

const PresentationListItem = (props) => {
  const { actions } = useContext(ActionMenuContext);
  return (
    <StyledPresentationListItem>
      <span className="list-item title">My test presentation</span>
      <span className="list-item date">Sep 27, 2020</span>
      <ActionMenuWrapper
        trigger={<span className="presentation-menu"><MenuDots role="img" /></span>}
        menu={actions.getActionMenu('presentationMenu')}
      />
    </StyledPresentationListItem>
  );
}

export default PresentationListItem;
