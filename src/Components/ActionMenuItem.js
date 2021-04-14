import React, { useContext } from 'react';
import { ActionMenuContext } from './../Context';
import { ReactComponent as Polygon } from './../img/polygon.svg';
import styled from 'styled-components';

const StyledActionMenuItemButton = styled.button`
  padding: 5px 20px;
  font-size: 0.975rem;
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  &:hover,
  &:active,
  &:focus {
    background: #e6e6e6;
  }
  .icon {
    display: flex;
    margin-right: 10px;
    min-width: 30px;
  }
`

const StyledActionMenuItemLink = styled.a`
  padding: 5px 20px;
  font-size: 0.975rem;
  display: flex;
  color: inherit;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    background: #e6e6e6;
  }
`

const StyledActionMenuItemText = styled.span`
  padding: 5px 20px;
  font-size: 0.975rem;
  display: flex;
  width: 100%;
`

const ActionMenuItem = (props) => {
  const { actions } = useContext(ActionMenuContext);
  return (
    <>
      {props.menuitem.type === 'text' &&
        <StyledActionMenuItemText>{props.menuitem.value}</StyledActionMenuItemText>
      }
      {props.menuitem.type === 'link' &&
        <StyledActionMenuItemLink aria-label={props.menuitem.value} href={props.menuitem.link}>{props.menuitem.value}</StyledActionMenuItemLink>
      }
      {props.menuitem.type === 'button' &&
        <StyledActionMenuItemButton aria-label={props.menuitem.value} onClick={actions.performMenuAction(props.menuitem.onclick)}>
          <span className="icon">
            {props.menuitem.icon && <Polygon role="img" />}
          </span>
          <span className="title">
            {props.menuitem.value}
          </span>
        </StyledActionMenuItemButton>
      }
    </>
  );
};

export default ActionMenuItem;
