import React from 'react';
import PresentationListItem from './PresentationListItem';
import styled from 'styled-components'

const StyledPresentationList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (min-width: 992px) {
    padding: 100px;
  }

  .list-heading {
    display: flex;
    padding: 15px;
    font-weight: 700;
    color: #ddd;
    font-weight: 700;
    color: #989898;
    border-bottom: 2px solid #e6e6e6;
  }

  .title {
    flex: 0 1 100%;
  }

  .date {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      width: 400px;
    }
  }

  .menu {
    min-width: 40px;
  }
`

const PresentationList = () => {
  return (
    <StyledPresentationList>
      <div className="list-heading">
        <span className="title">Title</span>
        <span className="date">Created</span>
        <span className="menu"></span>
      </div>
      <PresentationListItem />
      <PresentationListItem />
      <PresentationListItem />
    </StyledPresentationList>
  );
}

export default PresentationList;
