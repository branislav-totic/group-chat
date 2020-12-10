import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'node-emoji';
import { replaceEmoticons } from 'emoticon-to-emoji';
import { Container, Input, Send } from './MessagesInput.css';
import { ReactComponent as SendSVG } from '../../../assets/images/send-white.svg';

const MessagesInput = ({
  setMessages,
}) => {
  const ref = useRef();
  const [ message, setMessage ] = useState(``);

  const handleInputSend = (e) => {
    if (e.key === `Enter` || e.keyCode === 13) {
      handleSend();
    }
  };

  const handleSend = () => {
    if (message === ``) return;
    const newMsg = {
      userName: `Branislav Totic`,
      userAvatar: `https://pbs.twimg.com/profile_images/973611685822058497/yRRo9D52_normal.jpg`,
      message,
      time: new Date().getTime()
    }
    setMessages((messages)=>([newMsg, ...messages]))
    setMessage(``)
  };

  const handleInputChange = (e) => {
    const converedMsg = replaceEmoticons(emoji.emojify(e.target.value));
    setMessage(converedMsg);
  };

  return (
    <Container>
      <Input
        onChange={handleInputChange}
        onKeyPress={handleInputSend}
        placeholder="Type a message here"
        type="text"
        ref={ref}
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

MessagesInput.propTypes = {};

export default MessagesInput;
