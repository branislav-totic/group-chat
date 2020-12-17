import React from 'react'
import PropTypes from 'prop-types'

import { AppContext } from '../App/App';
import {
  Container,
  DescriptionInput,
  NameInput,
  Title,
  CreateButton,
} from './Modal.css';

const Modal = props => {
  return (
    <Container>
      <Title>NEW CHANNEL</Title>
      <NameInput
        placeholder='Channel name'
        required
      />
      <DescriptionInput
        as="textarea"
        placeholder='Channel Description'
        required
        rows="3"
      />
      <CreateButton>Save</CreateButton>
    </Container>
  )
}

const ModalProvider = (props) => {
  return (
    <AppContext.Consumer>
      {({ user }) => {
        return <Modal user={user} {...props}/>;
      }}
    </AppContext.Consumer>
  );
};

Modal.propTypes = {

}

export default ModalProvider
