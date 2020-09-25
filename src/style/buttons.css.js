import styled from 'styled-components/macro';
import { color } from './helpers/colors';

export const Button = styled.span`
  background-color: ${color(`blue`)};
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 10px;
  color: ${color(`white`)};

  &:hover {
    background-color: ${color(`blue-light`)};
  }
`;