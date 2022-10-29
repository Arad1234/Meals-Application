import React from "react";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { useGlobalContext } from "./context";
const App = () => {
  const { showModal } = useGlobalContext();

  return (
    <main>
      <Search />
      {/* <Favorites />  */}
      <Meals />
      {showModal && <Modal />}
    </main>
  );
};

export default App;
