import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Send } from './MessagesInput.css';
import { ReactComponent as SendSVG } from '../../../assets/images/send-white.svg';

const MessagesInput = () => {
  const [msg, setMsg] = useState('');
  const ref = useRef();

  const handleInputSend = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      // send msg
      e.target.value = '';
    }
  }

  const handleSend = () => {
    // send msg
  }

  const handleInputChange = (e) => {
    setMsg(e.target.value);
  }

  return (
    <Container>
      <Input
        onChange={handleInputChange}
        onKeyPress={handleSend}
        placeholder="Type a message here"
        type="text"
        ref={ref}
      />
      <Send onClick={handleSend}><SendSVG /></Send>
    </Container>
  )
};

MessagesInput.propTypes = {

};

export default MessagesInput;
