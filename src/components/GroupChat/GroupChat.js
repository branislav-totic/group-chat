import React from 'react';
import PropTypes from 'prop-types';
import { Messages, Channels, CreateChannel, AppContext } from '..';
import { Root } from './GroupChat.css';

const GroupChat = ({
  activeChannel,
  isModalOpen,
}) => {
  return (
    <Root 
      modalOpen={isModalOpen}
    >
      <CreateChannel/>
      <Channels/>
      <Messages channelName={activeChannel}/>
    </Root>
  );
};

const GroupChatProvider = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return <GroupChat {...props} {...context} />;
      }}
    </AppContext.Consumer>
  );
};

GroupChat.propTypes = {
  user: PropTypes.object,
};

export default GroupChatProvider;
