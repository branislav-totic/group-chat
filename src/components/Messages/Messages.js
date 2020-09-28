import React from 'react';
import PropTypes from 'prop-types';
import MessagesBox from './MessagesBox/MessagesBox';
import MessagesInput from './MessagesInput/MessagesInput';
import { Container, Header, Wrapper } from './Messages.css';

const Messages = () => {
  return (
    <Container>
      <Header>GLOBAL</Header>
      <Wrapper>
        <MessagesBox></MessagesBox>
        <MessagesInput></MessagesInput>
      </Wrapper>
    </Container>
  );
};

Messages.propTypes = {};

export default Messages;
