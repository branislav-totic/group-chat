import styled, { css } from 'styled-components/macro';
import { colors, sizing, util } from '../../style';
import { ReactComponent as PlusSVG } from '../../assets/images/plus.svg';
import { ReactComponent as DownArrowSVG } from '../../assets/images/down-arrow.svg';
import { ReactComponent as LogoutSVG } from '../../assets/images/exit.svg';
import { ReactComponent as UserSVG } from '../../assets/images/user.svg';

const { Input, ScrollBar } = util;
const { color } = colors;
const { font } = sizing;


export const PlusIcon = styled(PlusSVG)``;
export const DownArrowIcon = styled(DownArrowSVG)`
    border: 1px solid white;
    border-radius: 50%;
`;
export const LogoutIcon = styled(LogoutSVG)``;
export const DefaultUserIcon = styled(UserSVG)``;

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
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.9rem 1.875rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${({ isVisible }) => isVisible && css`
    visibility: visible;
    opacity: 1;
  `}
`;

export const ChannelHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  font-weight: bold;
  padding: 0.9rem 1.875rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  ${DownArrowIcon} {
    fill: ${color(`white`)};
    transform: rotate(90deg);
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }

  ${({ isVisible }) => isVisible && css`
    transform: translateX(0);
  `}
`;

export const AddNew = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color(`black-medium`)};
  margin-left: auto;
  font-size: 14px;
  z-index: 1;
  padding: 8.5px 9px;
  box-shadow: 0px 0px 0px 1px transparent;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  ${PlusIcon} {
    height: 14px;
    width: 14px;
    stroke-width: 2px;
    fill: ${color(`white`)};
    transition: transform 0.15s ease-in-out;

    path {
      stroke: ${color(`white`)};
    }
  }

  &:hover {
    background-color: ${color(`black-light`)};
    box-shadow: 0px 0px 0px 1px white;
    transform: scale(1.05);
  }

  ${({ isOpen }) => isOpen && css`
    ${PlusIcon} {
      transform: rotate(135deg);
    }
  `}
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
  top: 0.9rem;
  background-image: url('assets/images/search.svg');
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ${Search}:focus + ${SearchIcon} {
    visibility: hidden;
  }

  ${Search}:valid + ${SearchIcon} {
    visibility: hidden;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    visibility: visible;
  `}
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
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    visibility: visible;
  `}
`;

export const ChannelName = styled.span`
  display: flex;
  text-transform: uppercase;
  font-weight: bold;
`;

export const ChannelWrapper = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  align-items: center;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    ${ChannelName} {
      color: #747474;
    }
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

export const FooterDrawer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: max-content;
  top: 0.5rem;
  left: 3rem;
  transform: translate(-100%, -50%);
  background-color: ${color(`black-medium`)};
  padding: 1rem;
  border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const FoooterDrawerItem  = styled.div`
  display: flex;
  align-content: center;
  cursor: pointer;
  padding: 0.75rem;
  padding-right: 2.5rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${color(`black-light`)};
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.5rem;
  }

  ${({ isLogout })=> isLogout && css`
    color: #EB5757;

    svg {
      fill: #EB5757;
    }
  `}
`;

export const FooterDropdown = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
  height: 100%;
  width: 2rem;
  justify-content: flex-end;

  ${DownArrowIcon} {
    transition: transform 0.2s ease-in-out;
    fill: ${color(`white`)};
  }

  &:hover {
    ${DownArrowIcon} {
      transform: rotate(180deg);
    }

    ${FooterDrawer} {
      transform: translate(-100%, -105%);
      opacity: 1;
      visibility: visible;
    }
  }
`;

 export const Divider = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: ${color(`black-light`)};
  margin: 0.5rem 0;
 `;
