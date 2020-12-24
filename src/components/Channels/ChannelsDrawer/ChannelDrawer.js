import React from 'react'
import PropTypes from 'prop-types'

import {
  ChannelDescription,
  ChannelTitle,
  ChannelUser,
  ChannelUsers,
  UserName,
  Container,
} from './ChannelDrawer.css';

import {
  UserIcon,
  ChannelName,
} from '../Channels.css';

const ChannelDrawer = ({ channels, isVisible }) => {
  return (
    <Container
      isVisible={isVisible}
    >
      <ChannelName>{channels[0] && channels[0].name}</ChannelName>
      <ChannelDescription>{channels[0] && channels[0].desc}</ChannelDescription>
      <ChannelUsers>
        <ChannelTitle>MEMBERS</ChannelTitle>
        <ChannelUser>
          <UserIcon image="assets/images/3b9735f2ac6ac459b44dd6fa1b8a771b.png" />
          <UserName>Xanthe Neal</UserName>
        </ChannelUser>
        <ChannelUser>
          <UserIcon image="assets/images/3b9735f2ac6ac459b44dd6fa1b8a771b.png" />
          <UserName>Xanthe Neal</UserName>
        </ChannelUser>
        <ChannelUser>
          <UserIcon image="assets/images/3b9735f2ac6ac459b44dd6fa1b8a771b.png" />
          <UserName>Xanthe Neal</UserName>
        </ChannelUser>
      </ChannelUsers>
    </Container>
  );
};

ChannelDrawer.propTypes = {
  channels: PropTypes.shape({
    desc: PropTypes.string,
    name: PropTypes.string,
  })
};

export default ChannelDrawer;
