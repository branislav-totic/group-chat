import styled from 'styled-components/macro';
import { colors, util } from '../../../style';

const { color } = colors;
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
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.3px;
  color: ${color(`gray`)};

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 1px;
    width: 45%;
    background-color: ${color(`gray`)};
  }

  &::before {
   left: 0; 
  }

  &::after {
   right: 0; 
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  
`;

export const MessageContent = styled.div`
  
`;

export const MessageInfo = styled.div`
  font-size: 18px;
  letter-spacing: 0.3px;
  line-height: 1.3;
  color: ${color(`gray`)};
  font-weight: 700;

  span {
    font-size: 14px;
    font-weight: 500;
    padding-left: 25px;
  }
`;

export const Message = styled.div`
  font-size: 18px;
  letter-spacing: 0.3px;
  line-height: 1.3;
  font-weight: 700;
`;