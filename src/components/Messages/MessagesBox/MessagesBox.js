import React, { useState } from 'react';
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
  const [lastBreakTime, setLastBreakTime] = useState('');

  const formatDate = (date) => {
    const today = new Date();
    const comparedTime = new Date(date);
    const months = [`jan`, `feb`, `mar`, `apr`, `maj`, `jun`, `jul`, `aug`, `sept`, `oct`, `nov`, `dec`];
    const isThisMonth = comparedTime.getMonth() === today.getMonth() &&
    comparedTime.getFullYear() === today.getFullYear();
    const getTime = `${String(comparedTime.getHours()).padStart(2, '0')}:${String(comparedTime.getMinutes()).padStart(2, '0')}`;
    let getDate;

    if (isThisMonth && comparedTime.getDate() === today.getDate()) {
      getDate = `today ${getTime}`;
    } else if (isThisMonth && comparedTime.getDate() === today.getDate() - 1) {
      getDate = `yestreday ${getTime}`;
    } else {
      getDate = `${comparedTime.getDate()}. ${months[comparedTime.getMonth()]} ${getTime}`;
    }
    return getDate;
  }

  const renderMessage = ({
    userName,
    userAvatar,
    message,
  }, formatedTime) => {
    return (
      <MessageWrapper>
        <IconWrapper>
          <Icon src={userAvatar}/>
        </IconWrapper>
        <MessageContent> 
          <MessageInfo>{userName}<span>{formatedTime}</span></MessageInfo>
          <Message>{message}</Message>
        </MessageContent>
      </MessageWrapper>
    )
  }

  const renderBraker = (time) => {
    return (
      <Breaker><span>{time}</span></Breaker>
    )
  }

  return (
    <Container>
      <MessagesWrapper>
        {messages.map((item)=>{
          const { time } = item;
          const formatedTime = formatDate(time);

          const splitedTime = formatedTime.split(' ');
          const formatedDate = splitedTime.length > 2 ? `${splitedTime[0]} ${splitedTime[1]}` : splitedTime[0];
          
          return (
            <React.Fragment key={time}>
              {renderMessage(item, formatedTime)}
              {renderBraker(formatedDate)}
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
