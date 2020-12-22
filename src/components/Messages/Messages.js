import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MessagesBox from './MessagesBox/MessagesBox';
import MessagesInput from './MessagesInput/MessagesInput';
import {
  Container,
  Header,
  Wrapper,
} from './Messages.css';

const Messages = ({channelName}) => {
const [messages, setMessages] = useState([{
  "userName": "Branislav Totic",
  "userAvatar": "https://pbs.twimg.com/profile_images/973611685822058497/yRRo9D52_normal.jpg",
  "message": "saddas",
  "time": 1601954099857
}]);

  return (
    <Container>
      <Header>{channelName.toUpperCase()}</Header>
      <Wrapper>
        <MessagesBox messages={messages} />
        <MessagesInput
          setMessages={setMessages}
        />
      </Wrapper>
    </Container>
  );
};

Messages.propTypes = {
  channelName: PropTypes.string
};

export default Messages;
