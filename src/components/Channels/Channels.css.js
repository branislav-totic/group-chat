import styled from 'styled-components/macro';
import { colors, sizing, util } from '../../style';

const { Input, ScrollBar } = util;
const { color } = colors;
const { font } = sizing;

export const Container = styled.aside`
  background: ${color(`black`)};
  width: 22.5%;
  height: 100%;
  font-size: 1.125rem;
  color: ${color(`white`)};
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 0.9rem 1.875rem;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const AddNew = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color(`black-medium`)};
  margin-left: auto;
  font-size: 14px;
  padding: 8.5px 9px;
  box-shadow: 0px 0px 0px 1px transparent;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  svg {
    height: 14px;
    width: 14px;
    stroke-width: 2px;
    fill: ${color(`white`)};
    path {
      stroke: ${color(`white`)};
    }
  }

  &:hover {
    background-color: ${color(`black-light`)};
    box-shadow: 0px 0px 0px 1px white;
    transform: scale(1.05);
  }
`;

export const Header = styled.div`
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  padding: 1.25rem 1.875rem 0 1.875rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Search = styled(Input)`
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
  position: absolute;
  overflow: auto;
  top: 6.25rem;
  left: 1.875rem;
  right: 0;
  bottom: 0.25rem;
  ${ScrollBar}
`;

export const ChannelWrapper = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  align-items: center;
  cursor: pointer;

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

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.875rem;
  background: ${color(`black-dark`)};
`;

export const Footer = styled.div``;

export const UserIcon = styled.span`
  border-radius: 8px;
  margin-right: 28px;
  height: 42px;
  width: 42px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FooterDropdown = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;

  svg {
    transition: transform 0.2s ease-in-out;
    fill: ${color(`white`)};
  }

  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const ChannelDescription = styled.div`
  font-size: ${font(3)};
  line-height: 1.35;
  letter-spacing: -0.3px;
  margin-top: 1.125rem;
  margin-bottom: 2.875rem;
`;

export const ChannelUsers = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: ${font(4)};
  line-height: 1.35;
  letter-spacing: -0.3px;
`;

export const ChannelTitle = styled.span`
 
  margin-bottom: 1.5rem;
`;

export const ChannelUser = styled.span`
  display: flex;
  color: ${color(`gray`)};
  align-items: center;
  margin-bottom: 2rem;
`;

export const UserName = styled.span``;
