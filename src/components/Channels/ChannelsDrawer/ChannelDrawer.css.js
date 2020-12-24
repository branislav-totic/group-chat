import styled, { css } from 'styled-components/macro';

import { colors, sizing } from '../../../style';

const { color } = colors;
const { font } = sizing;

export const Container = styled.div`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  top: 1.25rem;
  left: 1.875rem;
  right: 1.875rem;
  bottom: 0.5rem;
  transition: all 0.3s ease-in-out;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    visibility: visible;
  `}
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