import React from 'react';
import { AppContext } from '../..';
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
  const formatDate = (date) => {
    const today = new Date();
    const comparedTime = new Date(date);
    const months = [`jan`, `feb`, `mar`, `apr`, `maj`, `jun`, `jul`, `aug`, `sept`, `oct`, `nov`, `dec`];

    const getYear = comparedTime.getFullYear() === today.getFullYear() ? '' : comparedTime.getFullYear();
    const getMonth = months[comparedTime.getMonth()];
    const getDate = comparedTime.getDate();
    const getTime = `${String(comparedTime.getHours()).padStart(2, '0')}:${String(comparedTime.getMinutes()).padStart(2, '0')}`;

    const isThisMonth = comparedTime.getMonth() === today.getMonth() && comparedTime.getFullYear() === today.getFullYear();

    let newDate;

    if (isThisMonth && getDate === today.getDate()) {
      newDate = `today ${getTime}`;
    } else if (isThisMonth && getDate === today.getDate() - 1) {
      newDate = `yestreday ${getTime}`;
    } else {
      newDate = `${getDate}. ${getMonth} ${getYear} ${getTime}`;
    }
    return newDate;
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
  };

  const renderBraker = (time) => {
    return (
      <Breaker><span>{time}</span></Breaker>
    )
  };

  const renderMessages = () => {
    let printedTime;

    return messages.map((item, index)=>{
      const { time } = item;
      const formatedTime = formatDate(time);
      let formatedDateNext;
      let shouldRenderBreake = false;

      const splitedTime = formatedTime.split(' ');
      const formatedDate = splitedTime.length > 2 ? `${splitedTime[0]} ${splitedTime[1]}` : splitedTime[0];
      printedTime = formatedDate;

      if (messages.length !== index + 1) {
        const formatedTimeNext = formatDate(messages[index + 1].time);
        const splitedTimeNext = formatedTimeNext.split(' ');
        formatedDateNext = splitedTimeNext.length > 2 ? `${splitedTimeNext[0]} ${splitedTimeNext[1]}` : splitedTimeNext[0];
      }

      if (formatedDateNext && printedTime && printedTime !== formatedDateNext) {
        shouldRenderBreake = true;
      }

      return (
        <React.Fragment key={time}>
          {renderMessage(item, formatedTime)}
          {shouldRenderBreake && renderBraker(formatedDate)}
        </React.Fragment>
      )
    });
  };

  return (
    <Container>
      <MessagesWrapper>
        {renderMessages()}
      </MessagesWrapper>
    </Container>
  );
};

const MessagesBoxProvider = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return <MessagesBox {...props} {...context}/>;
      }}
    </AppContext.Consumer>
  );
};

MessagesBox.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      time: PropTypes.number,
      userAvatar: PropTypes.string,
      userName: PropTypes.string,
    })
  )
};

export default MessagesBoxProvider;
