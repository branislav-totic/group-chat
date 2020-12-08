import React from 'react';
import { AppContext } from "../../App/App";
import PropTypes from 'prop-types';

import { Container } from './MessagesBox.css';

const MessagesBox = ({
  messages,
}) => {
  
  return (
    <Container>
      {messages.map((message)=>(
        <div>{message}</div>
      ))}
    </Container>
  )
};

const MessagesBoxProvider = (props) => {
  return (
    <AppContext.Consumer>
      {() => {
        return <MessagesBox {...props} />;
      }}
    </AppContext.Consumer>
  );
};

MessagesBox.propTypes = {

};

export default MessagesBoxProvider;
