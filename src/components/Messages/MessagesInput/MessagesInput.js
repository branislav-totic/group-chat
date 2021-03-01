import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'node-emoji';
import { AppContext } from '../../';
import { replaceEmoticons } from 'emoticon-to-emoji';
import { Container, Input, Send } from './MessagesInput.css';
import { ReactComponent as SendSVG } from '../../../assets/images/send-white.svg';

const MessagesInput = ({
  setMessages,
  currentUser,
}) => {
  const [message, setMessage] = useState(``);
  const { username, useravatr } = currentUser;

  const handleInputSend = (e) => {
    if (e.key === `Enter` || e.keyCode === 13) {
      handleSend();
    };
  };

  const handleSend = () => {
    if (message === ``) return;

    const convertedMsg = replaceEmoticons(emoji.emojify(message));
    const newMsg = {
      userName: username,
      userAvatar: `https://pbs.twimg.com/profile_images/973611685822058497/yRRo9D52_normal.jpg`,
      message: convertedMsg,
      time: new Date().getTime()
    };

    setMessages((messages) => ([newMsg, ...messages]));
    setMessage(``);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <Container>
      <Input
        onChange={handleInputChange}
        onKeyPress={handleInputSend}
        placeholder="Type a message here"
        type="text"
        value={message}
        spellcheck="false"
        autoFocus
      />
      <Send onClick={handleSend}>
        <SendSVG />
      </Send>
    </Container>
  );
};

const MessagesInputProvider = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return <MessagesInput {...props} {...context} />;
      }}
    </AppContext.Consumer>
  );
};

MessagesInput.propTypes = {
  setMessages: PropTypes.func,
};

export default MessagesInputProvider;
