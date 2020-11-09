import React, { useState } from 'react';
import { ReactComponent as PlusSVG } from '../../assets/images/plus.svg';
import { ReactComponent as DownarrowSVG } from '../../assets/images/down-arrow.svg';
import PropTypes from 'prop-types';
import {
  AddNew,
  ChannelIcon,
  ChannelName,
  ChannelWrapper,
  ChannelsWrapper,
  Container,
  ContentWrapper,
  Header,
  HeaderWrapper,
  Search,
  SearchIcon,
  SearchWrapper,
  Footer,
  FooterIcon,
  FooterDropdown,
  FooterWrapper,
} from './Channels.css';

const channelsData = [
  {
    icon: 'FD',
    name: 'Front-end developers',
  },
  {
    icon: 'R',
    name: 'Front-end developers',
  },
  {
    icon: 'B',
    name: 'Back-end',
  },
  {
    icon: 'CA',
    name: 'Cats and Dogs',
  },
  {
    icon: 'W',
    name: 'Wellcome',
  },
  {
    icon: 'FD',
    name: 'Front-end developers',
  },
  {
    icon: 'R',
    name: 'Front-end developers',
  },
  {
    icon: 'B',
    name: 'Back-end',
  },
  {
    icon: 'CA',
    name: 'Cats and Dogs',
  },
  {
    icon: 'W',
    name: 'Wellcome',
  },
  {
    icon: 'FD',
    name: 'Front-end developers',
  },
  {
    icon: 'R',
    name: 'Front-end developers',
  },
  {
    icon: 'B',
    name: 'Back-end',
  },
  {
    icon: 'CA',
    name: 'Cats and Dogs',
  },
  {
    icon: 'W',
    name: 'Wellcome',
  },
]

const Channels = () => {
  const [channels, setChannels] = useState(channelsData);
  return (
    <Container>
      <HeaderWrapper>
        <Header>Channels</Header>
        <AddNew><PlusSVG /></AddNew>
      </HeaderWrapper>
      <ContentWrapper>
        <SearchWrapper>
          <Search type='search' placeholder='Search' required />
          <SearchIcon></SearchIcon>
        </SearchWrapper>
        <ChannelsWrapper>

          {channels.map(({ icon, name }, index) => (
            <ChannelWrapper key={`${name}-${index}`}>
              <ChannelIcon>{icon}</ChannelIcon>
              <ChannelName>{name}</ChannelName>
            </ChannelWrapper>
          ))}

        </ChannelsWrapper>
      </ContentWrapper>

      <FooterWrapper>
        <FooterIcon image="https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1606089600&Signature=RD7AQgmeGqh3WhQSIA6XR1r8OFRCbki6XXyemod7GmbeH7jaYBpv09-yAUphK9kNX4c4GucgC31Ym8peMBnQGq3oC9cwuguBU5mCCgFUpPa4Bg1nqQawjDPvDX2OFCobCtCuLhwVjZZTw4~KIOwlKsjffzLkTDWTPWgUg8GpSd5pQkcJELQqP4N8jFb4WOwCJ45VRwQVJhUbNzeaolaCBmML8CezM-uSvLYYEakDdlJzwOX94OY14I3m~q7KskpG4VQ4KLQxUIJ2OW097EoIE63Zo6fKw5-QqSSjngPqcIntaOmS2eK~a7WhuTlkDPOnpl-BKZoaO6GLFquvdgU18w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        <Footer>Xanthe Neal</Footer>
        <FooterDropdown><DownarrowSVG /></FooterDropdown>
      </FooterWrapper>
    </Container>
  );
};

Channels.propTypes = {};

export default Channels;
