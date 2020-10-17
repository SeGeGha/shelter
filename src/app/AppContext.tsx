import React, { useState, useContext } from 'react';

import Routes from '../config/routes';

interface AppState {
  headerTheme: string,
  navActiveLink: number,
  pageDidMount: (theme: string) => void,
}

const AppContext = React.createContext({} as AppState);

export const useAppContext = (): AppState => useContext(AppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [headerTheme, setHeaderTheme] = useState('default');
  const [navActiveLink, setNavActiveLink] = useState(1);

  function routeTracker(pagePath: string) {
    switch (pagePath) {
      case Routes.MainPage:
        setHeaderTheme('default');
        setNavActiveLink(1);
        break;
      case Routes.PetsPage:
        setHeaderTheme('light');
        setNavActiveLink(2);
        break;
      default:
        break;
    }
  }

  return (
    <AppContext.Provider value={{
      headerTheme,
      pageDidMount: routeTracker,
      navActiveLink,
    }}
    >
      { children }
    </AppContext.Provider>
  );
};
