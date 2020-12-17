import React, { useState } from 'react';
import { ReactComponent as PlusSVG } from '../../assets/images/plus.svg';
import { ReactComponent as DownArrowSVG } from '../../assets/images/down-arrow.svg';
import PropTypes from 'prop-types';
import {
  AddNew,
  ChannelDescription,
  ChannelIcon,
  ChannelName,
  ChannelTitle,
  ChannelUser,
  ChannelUsers,
  ChannelWrapper,
  ChannelsWrapper,
  Container,
  ContentWrapper,
  Footer,
  FooterDropdown,
  FooterWrapper,
  Header,
  HeaderWrapper,
  Search,
  SearchIcon,
  SearchWrapper,
  UserIcon,
  UserName,
} from './Channels.css';

const channelsData = [
  {
    icon: 'FD',
    name: 'Front-end developers',
    desc: 'Lorem ipsum dolor sit amet, sale pertinax per an, eum fabellas sensibus at, mutat scaevola platonem no est. Eius iudico.'
  },
  {
    icon: 'R',
    name: 'Front-end developers',
    desc: 'Lorem ipsum dolor sit amet, ei vidit vituperatoribus sed, ex nam illum explicari, deterruisset definitiones sit et. Facete apeirian assueverit.'
  },
  {
    icon: 'B',
    name: 'Back-end',
    desc: 'Lorem ipsum dolor sit amet, cum no utamur delicatissimi, mea viris eirmod eu. Iusto splendide te his, quo natum nostrum.'
  },
  {
    icon: 'CA',
    name: 'Cats and Dogs',
    desc: 'Lorem ipsum dolor sit amet, ex duo accusam consulatu, at pri habeo dolor sensibus. Has scaevola incorrupte no. Quis soluta.'
  },
  {
    icon: 'W',
    name: 'Wellcome',
    desc: 'Lorem ipsum dolor sit amet, ex mei ferri fabellas scribentur, qui veritus dolores at. Veri dictas ut cum, omittam qualisque.'
  },
  {
    icon: 'FD',
    name: 'Front-end developers',
    desc: 'Lorem ipsum dolor sit amet, sale pertinax per an, eum fabellas sensibus at, mutat scaevola platonem no est. Eius iudico.'
  },
  {
    icon: 'R',
    name: 'Front-end developers',
    desc: 'Lorem ipsum dolor sit amet, ei vidit vituperatoribus sed, ex nam illum explicari, deterruisset definitiones sit et. Facete apeirian assueverit.'
  },
  {
    icon: 'B',
    name: 'Back-end',
    desc: 'Lorem ipsum dolor sit amet, cum no utamur delicatissimi, mea viris eirmod eu. Iusto splendide te his, quo natum nostrum.'
  },
  {
    icon: 'CA',
    name: 'Cats and Dogs',
    desc: 'Lorem ipsum dolor sit amet, ex duo accusam consulatu, at pri habeo dolor sensibus. Has scaevola incorrupte no. Quis soluta.'
  },
  {
    icon: 'W',
    name: 'Wellcome',
    desc: 'Lorem ipsum dolor sit amet, ex mei ferri fabellas scribentur, qui veritus dolores at. Veri dictas ut cum, omittam qualisque.'
  },
  {
    icon: 'FD',
    name: 'Front-end developers',
    desc: 'Lorem ipsum dolor sit amet, sale pertinax per an, eum fabellas sensibus at, mutat scaevola platonem no est. Eius iudico.'
  },
  {
    icon: 'R',
    name: 'Front-end developers',
    desc: 'Lorem ipsum dolor sit amet, ei vidit vituperatoribus sed, ex nam illum explicari, deterruisset definitiones sit et. Facete apeirian assueverit.'
  },
  {
    icon: 'B',
    name: 'Back-end',
    desc: 'Lorem ipsum dolor sit amet, cum no utamur delicatissimi, mea viris eirmod eu. Iusto splendide te his, quo natum nostrum.'
  },
  {
    icon: 'CA',
    name: 'Cats and Dogs',
    desc: 'Lorem ipsum dolor sit amet, ex duo accusam consulatu, at pri habeo dolor sensibus. Has scaevola incorrupte no. Quis soluta.'
  },
  {
    icon: 'W',
    name: 'Wellcome',
    desc: 'Lorem ipsum dolor sit amet, ex mei ferri fabellas scribentur, qui veritus dolores at. Veri dictas ut cum, omittam qualisque.'
  },
]

const Channels = () => {
  const [channels, setChannels] = useState(channelsData);

  const renderHeader = () => {
    return (
      <HeaderWrapper>
        <Header>Channels</Header>
        <AddNew><PlusSVG /></AddNew>
      </HeaderWrapper>
    )
  };

  const renderFooter = () => {
    return (
      <FooterWrapper>
        <UserIcon image="assets/images/3b9735f2ac6ac459b44dd6fa1b8a771b.png" />
        <Footer>Xanthe Neal</Footer>
        <FooterDropdown><DownArrowSVG /></FooterDropdown>
      </FooterWrapper>
    )
  };

  const renderChannelsInfo = () => {
    return (
      <ContentWrapper>
        <ChannelName>{channels[0].name}</ChannelName>
        <ChannelDescription>{channels[0].desc}</ChannelDescription>
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
      </ContentWrapper>
    )

    return (
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
    )
  };



  return (
    <Container>
      {renderHeader()}
      {renderChannelsInfo()}
      {renderFooter()}
    </Container>
  );
};

Channels.propTypes = {};

export default Channels;
