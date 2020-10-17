import React, { useContext } from 'react';

interface AppState {
}

const AppContext = React.createContext({});

export const useAppContext = (): AppState => useContext(AppContext);

export const AppProvider: React.FC = ({ children }) => (
  <AppContext.Provider value={{}}>
    { children }
  </AppContext.Provider>
);
