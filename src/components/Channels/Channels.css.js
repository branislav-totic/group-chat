import styled from 'styled-components/macro';
import { colors, util } from '../../style';

const { Input, scroll } = util;
const { color } = colors;

export const Container = styled.aside`
  background: ${color(`black`)};
  width: 22.5%;
  height: 100%;
  font-size: 1.125rem;
  color: ${color(`white`)};
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  background: ${color(`black`)};
`;

export const Header = styled.div`
  padding: 1.25rem 2rem 1rem 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ContentWrapper = styled.div`
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Search = styled(Input)`
  margin-bottom: 2rem;
  background: ${color(`black-light`)};
  border: none;
  position: relative;
  color: ${color(`white`)};

  &::placeholder {
    color: ${color(`gray`)};
    padding-left: 2rem;
  }

  &:focus {
    box-shadow: 0 0 2px 1px ${color(`white`)};

    &::placeholder {
      padding-left: 0;
    }
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    background-image: url('assets/images/close.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 12px;
    height: 12px;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  background-image: url('assets/images/search.svg');
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
`;

export const SearchWrapper = styled.div`
  position: relative;

  ${Search}:focus + ${SearchIcon} {
    visibility: hidden;
  }

  ${Search}:valid + ${SearchIcon} {
    visibility: hidden;
  }
`;

export const ChannelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
  height: 625px;
  ${scroll}
`;

export const ChannelWrapper = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ChannelIcon = styled.span`
  display: flex;
  box-sizing: border-box;
  padding: 0.75rem 0.375rem;
  max-width: 42px;
  width: 100%;
  background: ${color(`black-medium`)};
  border-radius: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.35;
  justify-content: center;
  font-weight: bold;
  margin-right: 0.75rem;
`;

export const ChannelName = styled.span`
  display: flex;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Footer = styled.div`
  height: 72px;
  background: ${color(`black-dark`)};
`;
