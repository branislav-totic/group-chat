import React, { useState } from 'react';
import { AppContext } from '../App/App';
import PropTypes from 'prop-types';
import { Messages, Channels, Modal } from '..';
import { Root } from './GroupChat.css';

const GroupChat = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Root>
      <Modal/>
      <Channels/>
      <Messages/>
    </Root>
  );
};

const GroupChatProvider = () => {
  return (
    <AppContext.Consumer>
      {({ user }) => {
        return <GroupChat user={user} />;
      }}
    </AppContext.Consumer>
  );
};

GroupChat.propTypes = {
  user: PropTypes.object,
};

export default GroupChatProvider;
