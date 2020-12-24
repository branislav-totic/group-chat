import React, { useState, createContext } from "react";
import { Container } from "./App.css";

// import ClientComponent from "../ClientComponent/ClientComponent";
import { Login, GroupChat } from "..";

export const AppContext = createContext();

const AppProvider = () => {
  // const [loadClient, setLoadClient] = useState(true);
  const [user, setUser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState(``)
  
  const context = {
    user,
    setUser,
    isModalOpen,
    setIsModalOpen,
    activeChannel,
    setActiveChannel,
  }

  return (
    <AppContext.Provider value={context}>
      <Container>
        {!user ? <Login setUser={setUser} /> : <GroupChat user={user}/>}
      </Container>
    </AppContext.Provider>
    // <>
    //   {/* LOAD OR UNLOAD THE CLIENT */}
    //   <button onClick={() => setLoadClient(prevState => !prevState)}>
    //     STOP CLIENT
    //   </button>
    //   {/* SOCKET IO CLIENT*/}
    //   {loadClient ? <ClientComponent /> : <Login/>}
    // </>
  );
};

export default AppProvider;
