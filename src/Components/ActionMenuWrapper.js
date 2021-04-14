import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import ActionMenuSection from './ActionMenuSection';
import ActionMenuItem from './ActionMenuItem';
import ActionMenuTriggerElement from './ActionMenuTriggerElement';
import ActionMenu from './ActionMenu';
import ActionMenuContainer from './ActionMenuContainer';

const ActionMenuWrapper = (props) => {
  const node = useRef();
  const [showActionMenu, setShowActionMenu] = useState(false);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowElement
        }
      },
      {
        name: "offset",
        options: {
          offset: [0, 15]
        }
      }
    ],
  });

  const createSections = (menuSections) => {
    return menuSections.map((menuSection, index) => {
      return (
        <ActionMenuSection key={index}>
          {menuSection.menuitems.map((menuitem, index) => {
            return <ActionMenuItem key={index} menuitem={menuitem} />
          })}
        </ActionMenuSection>
      );
    })
  }

  const toggleActionMenu = () => {
    if (!showActionMenu) {
      document.addEventListener('click', handleOutsideClick, false);
    }
    setShowActionMenu(!showActionMenu);
  }

  const handleOutsideClick = (e) => {
    e.stopPropagation();
    if (popperElement.current != null && popperElement.current.contains(e.target) ) {
      return;
    }
    setShowActionMenu(false);
    document.removeEventListener('click', handleOutsideClick, false);
  }

  return (
    <div className="node" ref={node}>
      <ActionMenuTriggerElement ref={referenceElement} toggleActionMenu={toggleActionMenu} menu={props.menu}>
        {props.trigger}
      </ActionMenuTriggerElement>
      { showActionMenu ? (
        createPortal(
        <ActionMenu ref={popperElement} style={styles.popper} {...attributes.popper}>
          <div ref={setArrowElement} style={styles.arrow} className="action-menu-arrow" />
          <ActionMenuContainer>
            {createSections(props.menu.sections)}
          </ActionMenuContainer>
        </ActionMenu>,
        document.querySelector('#action-menu-portal')
      )) : null
    }
    </div>
  );
};

export default ActionMenuWrapper;
