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

  const renderMessage = ({
    userName,
    userAvatar,
    message,
  }) => {
    return (
      <MessageWrapper>
        <IconWrapper>
          <Icon src={userAvatar}/>
        </IconWrapper>
        <MessageContent> 
          <MessageInfo>{userName}<span>yestready 12:10</span></MessageInfo>
          <Message>{message}</Message>
        </MessageContent>
      </MessageWrapper>
    )
  }

  const renderBraker = ({ time }) => {
    return (
      <Breaker><span>{new Date(time).toDateString()}</span></Breaker>
    )
  }

  return (
    <Container>
      <MessagesWrapper>
        {messages.map((item)=>{
          const { time } = item;
          return (
            <React.Fragment key={time}>
              {renderMessage(item)}
              {renderBraker(item)}
            </React.Fragment>
          )
        })}
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
