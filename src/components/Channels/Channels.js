import React from 'react';
import PropTypes from 'prop-types';
import {
  ChannelIcon,
  ChannelName,
  ChannelWrapper,
  ChannelsWrapper,
  Container,
  ContentWrapper,
  Header,
  Search,
  SearchIcon,
  SearchWrapper,
  Footer,
} from './Channels.css';

const Channels = () => {
  return (
    <Container>
      <Header>Channels</Header>
      <ContentWrapper>
        <SearchWrapper>
          <Search type='search' placeholder='Search' required />
          <SearchIcon />
        </SearchWrapper>
        <ChannelsWrapper>

          <ChannelWrapper>
            <ChannelIcon>FD</ChannelIcon>
            <ChannelName>Front-end developers</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>R</ChannelIcon>
            <ChannelName>Random</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>B</ChannelIcon>
            <ChannelName>Back-end</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>CA</ChannelIcon>
            <ChannelName>Cats and Dogs</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>W</ChannelIcon>
            <ChannelName>Wellcome</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>FD</ChannelIcon>
            <ChannelName>Front-end developers</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>R</ChannelIcon>
            <ChannelName>Random</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>B</ChannelIcon>
            <ChannelName>Back-end</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>CA</ChannelIcon>
            <ChannelName>Cats and Dogs</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>W</ChannelIcon>
            <ChannelName>Wellcome</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>FD</ChannelIcon>
            <ChannelName>Front-end developers</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>R</ChannelIcon>
            <ChannelName>Random</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>B</ChannelIcon>
            <ChannelName>Back-end</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>CA</ChannelIcon>
            <ChannelName>Cats and Dogs</ChannelName>
          </ChannelWrapper>

          <ChannelWrapper>
            <ChannelIcon>W</ChannelIcon>
            <ChannelName>Wellcome</ChannelName>
          </ChannelWrapper>

        </ChannelsWrapper>
      </ContentWrapper>


      <Footer>Footer</Footer>
    </Container>
  );
};

Channels.propTypes = {};

export default Channels;
