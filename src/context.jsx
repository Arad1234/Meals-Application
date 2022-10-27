import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
