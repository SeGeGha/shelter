import React, { useState, useContext, useEffect } from 'react';

import pageSettings from '../config/navLinks';

interface AppState {
  headerTheme: string,
  navActiveLink: number,
  pageDidMount: (theme: string) => void,
  toggleMobileMenu: () => void,
}

const AppContext = React.createContext({} as AppState);

export const useAppContext = (): AppState => useContext(AppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [headerState, setHeaderState] = useState({
    theme: 'default',
    menuState: {
      isOpened: false,
      activeLink: 1,
    },
  });

  function routeTracker(pagePath: string) {
    const { id, headerTheme } = (pageSettings.find((page) => page.url === pagePath));

    setHeaderState({
      ...headerState,
      theme: headerTheme,
      menuState: {
        isOpened: false,
        activeLink: id,
      },
    });
  }

  function toggleMobileMenu() {
    setHeaderState({
      ...headerState,
      menuState: {
        ...headerState.menuState,
        isOpened: !headerState.menuState.isOpened,
      },
    });
  }

  useEffect(() => {
    if (headerState.menuState.isOpened) {
      document.querySelector('#root').classList.add('menu-opened');
    } else {
      document.querySelector('#root').classList.remove('menu-opened');
    }
  }, [headerState.menuState.isOpened]);

  return (
    <AppContext.Provider value={{
      headerTheme: headerState.theme,
      pageDidMount: routeTracker,
      navActiveLink: headerState.menuState.activeLink,
      toggleMobileMenu,
    }}
    >
      { children }
    </AppContext.Provider>
  );
};
