import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    console.log("fetch data here");
  }, []);

  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
