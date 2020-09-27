import styled from "styled-components/macro";
import { color } from "./helpers/colors";

export const Button = styled.button`
  background-color: ${color(`blue-dark`)};
  border: unset;
  border-radius: 10px;
  color: ${color(`white`)};
  font-size: 1rem;
  line-height: 1.4;
  padding: 0.5rem 2rem;
  text-align: center;
  transition: 0.2s ease-in-out;

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
