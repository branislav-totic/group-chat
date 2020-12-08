import styled, { css } from 'styled-components/macro';
import { color } from './helpers/colors';

export const Button = styled.button`
  background-color: ${color(`blue-dark`)};
  border: unset;
  border-radius: 10px;
  color: ${color(`white`)};
  font-size: 1rem;
  line-height: 1.4;
  padding: 0.5rem 2rem;
  text-align: center;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${color(`blue-light`)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px ${color(`gray`)};
  }
`;

export const Link = styled.a`
  padding: 2px;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px ${color(`gray`)};
    border-radius: 2px;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${color(`gray-light`)};
  font-size: 1rem;
  padding: 1rem 0.75rem;
  width: 100%;

  &::placeholder {
    color: ${color(`gray-light`)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${color(`gray`)};
  }
`;

export const ScrollBar = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 2px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${color(`gray`)};
    border-radius: 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${color(`black-light`)};
    border-radius: 4px;
  }
`;
