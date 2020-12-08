import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MessagesBox from './MessagesBox/MessagesBox';
import MessagesInput from './MessagesInput/MessagesInput';
import { Container, Header, Wrapper } from './Messages.css';

const Messages = () => {
const [ messages, setMessages ] = useState([]);

  return (
    <Container>
      <Header>GLOBAL</Header>
      <Wrapper>
        <MessagesBox messages={messages} />
        <MessagesInput
          setMessages={setMessages}
        />
      </Wrapper>
    </Container>
  );
};

Messages.propTypes = {};

export default Messages;
