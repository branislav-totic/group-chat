import React from 'react';
import { AppContext } from "../../App/App";
import PropTypes from 'prop-types';

import {
  Breaker,
  Container,
  Icon,
  IconWrapper,
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
              <IconWrapper>
                <Icon src="https://insideofknoxville.com/wp-content/uploads/2012/07/Random-Person-on-the-Street-Knoxville-July-2012.jpg"/>
              </IconWrapper>
              <MessageContent> 
                <MessageInfo>Branislav Totic<span>yestready 12:10</span></MessageInfo>
                <Message>{message}</Message>
              </MessageContent>
            </MessageWrapper>
            <Breaker><span>{`August 3. 2020`}</span></Breaker>
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
