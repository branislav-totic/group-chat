import React, { useState, createContext } from "react";
import { Container } from "./App.css";

// import ClientComponent from "../ClientComponent/ClientComponent";
import { Login, GroupChat } from "..";

export const AppContext = createContext();

const AppProvider = () => {
  // const [loadClient, setLoadClient] = useState(true);
  const [user, setUser] = useState(false);
  return (
    <AppContext.Provider value={{ user, setUser }}>
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
