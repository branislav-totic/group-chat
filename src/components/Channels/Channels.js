import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as PlusSVG } from '../../assets/images/plus.svg';
import { ReactComponent as DownArrowSVG } from '../../assets/images/down-arrow.svg';
import { AppContext } from '..';


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

//change with real data
import data from '../App/data.json';

const Channels = ({
  setIsModalOpen,
  isModalOpen,
  activeChannel,
  setActiveChannel,
}) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    setChannels(data.userChannels)
  }, [])

  const handleAddNew = () => {
    setIsModalOpen((prev) => !prev);
  };

  const renderHeader = () => {
    return (
      <HeaderWrapper>
        <Header>Channels</Header>
        <AddNew
          onClick={handleAddNew}
          isOpen={isModalOpen}
        >
          <PlusSVG/>
        </AddNew>
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

  const handleChanneChange = (name) => () => {
    setActiveChannel(name);
  };

  const renderChannelsInfo = () => {
    console.log(activeChannel)
    if (activeChannel !== "Global") {
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
      );
    } else {
      return (
        <ContentWrapper>
          <SearchWrapper>
            <Search type='search' placeholder='Search' required />
            <SearchIcon></SearchIcon>
          </SearchWrapper>
          <ChannelsWrapper>
  
            {channels.map(({name}, index) => {
              const nameSplit = name.split(" ");
              const icon = nameSplit.length > 1 ? `${nameSplit[0].charAt(0)}${nameSplit[1].charAt(0)}` : nameSplit[0].charAt(0);
              return (
              <ChannelWrapper
                key={`${name}-${index}`}
                onClick={handleChanneChange(name)}
              >
                <ChannelIcon>{icon.toUpperCase()}</ChannelIcon>
                <ChannelName>{name}</ChannelName>
              </ChannelWrapper>
            )})}
  
          </ChannelsWrapper>
        </ContentWrapper>
      );
    };
  };



  return (
    <Container>
      {renderHeader()}
      {renderChannelsInfo()}
      {renderFooter()}
    </Container>
  );
};

const ChannelsProvider = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return <Channels {...props} {...context} />;
      }}
    </AppContext.Consumer>
  );
};

Channels.propTypes = {
  setIsModalOpen: PropTypes.func,
  isModalOpen: PropTypes.bool,
  activeChannel: PropTypes.string,
  setActiveChannel: PropTypes.func,
};

export default ChannelsProvider;
