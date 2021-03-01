import styled from 'styled-components/macro';
import { colors } from '../../../style';
const { color } = colors;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  background-color: ${color(`black-light`)};
  border-radius: 0.5rem;
  border: unset;
  color: ${color(`white`)};
  font-size: 0.875rem;
  margin-bottom: 2.5rem;
  padding: 1rem;
  width: 100%;
  outline: unset;

  &::placeholder {
    color: ${color(`gray`)};
  }
`

export const Send = styled.span`
  position: absolute;
  right: 8px;
  top: 8px;
  background: ${color(`blue-dark`)};
  height: 32px;
  width: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;
