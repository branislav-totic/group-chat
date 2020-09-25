import React, { useState } from "react";
import {
  Container,
  GlobalStyle,
} from './App.css';

import ClientComponent from "../ClientComponent/ClientComponent";
import { Login } from '..';

function App() {
  const [loadClient, setLoadClient] = useState(true);
  return (
    <Container>
      <Login/>
    </Container>
    // <>
    //   {/* LOAD OR UNLOAD THE CLIENT */}
    //   <button onClick={() => setLoadClient(prevState => !prevState)}>
    //     STOP CLIENT
    //   </button>
    //   {/* SOCKET IO CLIENT*/}
    //   {loadClient ? <ClientComponent /> : <Login/>}
    // </>
  );
}

export default App;