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
        <FooterIcon image="assets/images/3b9735f2ac6ac459b44dd6fa1b8a771b.png" />
        <Footer>Xanthe Neal</Footer>
        <FooterDropdown><DownarrowSVG /></FooterDropdown>
      </FooterWrapper>
    </Container>
  );
};

Channels.propTypes = {};

export default Channels;
