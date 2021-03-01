import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '..';
import {
  Container,
  DescriptionInput,
  NameInput,
  Title,
  Form,
  CreateButton,
} from './CreateChannel.css';

const NewChannel = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const nameRef = useRef();
  const [nameChannel, setNameChannel] = useState('');
  const [nameDesc, setNameDesc] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        nameRef.current.focus();
      }, 50)
    }
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(nameChannel + ` ` + nameDesc);
  };

  const handleCloseModal = (e) => {
    if((e.key === "Escape" || e.keyCode === 27) && isModalOpen) {
      setIsModalOpen(false)
      setNameChannel('');
      setNameDesc('');
    }
  };

  return (
    <Container
      isVisible={isModalOpen}
      onKeyDown={handleCloseModal}
      tabIndex="0"
    >
      <Form
        onSubmit={handleSubmit}
        isVisible={isModalOpen}
      >
        <Title>NEW CHANNEL</Title>
        <NameInput
          placeholder='Channel name'
          ref={nameRef}
          onChange={(e)=>setNameChannel(e.target.value)}
          value={nameChannel}
          required
          />
        <DescriptionInput
          as="textarea"
          placeholder='Channel Description'
          onChange={(e)=>setNameDesc(e.target.value)}
          value={nameDesc}
          required
          rows="3"
        />
        <CreateButton>Save</CreateButton>
      </Form>
    </Container>
  );
};

const NewChannelProvider = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return <NewChannel {...props} {...context}/>;
      }}
    </AppContext.Consumer>
  );
};

NewChannel.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
}

export default NewChannelProvider
