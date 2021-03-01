import styled, { css } from 'styled-components/macro';
import { colors } from '../../style';

const { color } = colors;

export const Root = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  overflow: hidden;

  &::after {
    position: absolute;
    left: 0;
    top: 60px;
    right: 0;
    bottom: 0;
    background-color: ${color(`white`)};
    opacity: 0;

    ${({ modalOpen }) => modalOpen && css`
      content: "";
      transition: opacity 0.3s ease-in-out;
      opacity: 0.1;
    `}
  }
`;

export const ChannelsContainer = styled.div`
  background: ${color(`black`)};
  width: 22.5%;
  height: 100%;
`;

export const User = styled.div`
  background: ${color(`black`)};
`;

export const MassagesContainer = styled.div`
  background: ${color(`black-medium`)};
  width: 76.5%;
  height: 100%;
`;
