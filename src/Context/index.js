import React, { useState } from 'react';
import menus from './../data/menus.json';
import { menuFunctions } from './../menuFunctions';

export const ActionMenuContext = React.createContext();

export const Provider = (props) => {
  const [actionMenus] = useState(menus);

  const getActionMenu = (menuId) => {
    return menus[menuId];
  }

  const performMenuAction = (menuAction) => {
    return menuFunctions[menuAction];
  }

  return (
    <ActionMenuContext.Provider value={{
      actionMenus,
      actions: {
        getActionMenu: getActionMenu,
        performMenuAction: performMenuAction
      }
    }}>
      { props.children }
    </ActionMenuContext.Provider>
  );
};
