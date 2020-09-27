import styled from 'styled-components/macro';
import { colors } from '../../style';
const { color } = colors;

export const Root = styled.div`
  display: flex;

  height: 100%;
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
