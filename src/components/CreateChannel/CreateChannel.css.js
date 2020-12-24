import styled, { css } from 'styled-components/macro';
import { colors, sizing, util } from '../../style';

const { Input, Button, ScrollBar } = util;
const { color } = colors;
const { font } = sizing;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 1.5rem;
  z-index: 99;
  visibility: hidden;
  backface-visibility: hidden;
  transform: translate(-50%, -50%);
  perspective: 1300px;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px white;
  }

  ${({ isVisible }) => isVisible && css`
    visibility: visible;
  `}
`;

export const Form = styled.form`
  padding: 2rem 2.5rem 1.5rem;
  transform-style: preserve-3d;
  transform: translateZ(600px) rotateX(20deg);
  opacity: 0;
  background-color: ${color(`black`)};
  border-radius: 1.5rem;

  ${({ isVisible }) => isVisible && css`
    transition: all 0.3s ease-in;
    transform: translateZ(0px) rotateX(0deg);
    opacity: 1;
  `}
`;

export const Title = styled.span`
  display: block;
  font-size: ${font(4)};
  font-weight: bold;
  line-height: 1.35;
  letter-spacing: -0.3px;
  color: ${color(`white`)};
  margin-bottom: 1.625rem;
`;

export const NameInput = styled(Input)`
  background: ${color(`black-light`)};
  border: none;
  position: relative;
  color: ${color(`white`)};
  margin-bottom: 1.625rem;

  &::placeholder {
    color: ${color(`gray`)};
  }

  &:focus {
    box-shadow: 0 0 2px 1px ${color(`white`)};
  }
`;

export const DescriptionInput = styled(Input)`
  ${ScrollBar}
  background: ${color(`black-light`)};
  border: none;
  position: relative;
  color: ${color(`white`)};
  margin-bottom: 1.375rem;
  resize: none;

  &::placeholder {
    color: ${color(`gray`)};
  }

  &:focus {
    box-shadow: 0 0 2px 1px ${color(`white`)};
  }
`;

export const CreateButton = styled(Button)`
  margin-left: auto;
  display: block;
`;
