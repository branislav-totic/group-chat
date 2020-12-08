import React from 'react';
import { AppContext } from "../../App/App";
import PropTypes from 'prop-types';

import {
  Breaker,
  Container,
  Icon,
  Message,
  MessageContent,
  MessageInfo,
  MessageWrapper,
  MessagesWrapper,
} from './MessagesBox.css';

const MessagesBox = ({
  messages,
}) => {
  
  return (
    <Container>
      <MessagesWrapper>
        {messages.map((message)=>(
          <>
            <MessageWrapper>
              <Icon>icon</Icon>
              <MessageContent> 
                <MessageInfo>Branislav Totic<span>yestready 12:10</span></MessageInfo>
                <Message>{message}</Message>
              </MessageContent>
            </MessageWrapper>
            <Breaker>{`August 3. 2020`}</Breaker>
          </>
        ))}
      </MessagesWrapper>
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
