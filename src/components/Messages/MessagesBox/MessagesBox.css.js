import styled from 'styled-components/macro';
import { colors, sizing, util } from '../../../style';

const { color } = colors;
const { font } = sizing;
const { ScrollBar } = util;

export const Container = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  ${ScrollBar}
`;

export const Breaker = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: ${font(1)};
  line-height: 1.3;
  letter-spacing: 0.3px;
  color: ${color(`gray`)};
  margin-bottom: 2.25rem;
  padding-right: 0.5rem;

  &::before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${color(`gray`)};
  }

  /* &::before {
   left: 0; 
  } */
  span {
    position: absolute;
    padding: 0 1.25rem;
    background-color: ${color(`black-medium`)};
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  margin-bottom: 2.25rem;
  padding-right: 0.5rem;
`;

export const IconWrapper = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 1.75rem;
`;

export const Icon = styled.img`
  width: 100%;
  position: relative;
  transform: translateY(-50%);
  top: 50%;
`;

export const MessageContent = styled.div`
  width: calc(100% - 2.625rem - 1.75rem);
`;

export const MessageInfo = styled.div`
  font-size: ${font(4)};
  letter-spacing: 0.3px;
  line-height: 1.3;
  color: ${color(`gray`)};
  font-weight: bold;
  margin-bottom: 0.75rem;

  span {
    font-size: ${font(2)};
    font-weight: normal;
    padding-left: 1.5rem;
  }
`;

export const Message = styled.div`
  font-size: ${font(4)};
  letter-spacing: 0.3px;
  line-height: 1.3;
  font-weight: normal;
  word-break: break-all;
`;