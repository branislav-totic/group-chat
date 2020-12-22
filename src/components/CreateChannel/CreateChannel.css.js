import styled, { css } from 'styled-components/macro';
import { colors, sizing, util } from '../../style';

const { Input, Button, ScrollBar } = util;
const { color } = colors;
const { font } = sizing;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-120%, -145%) scale(0.1);
  background-color: ${color(`black`)};
  border-radius: 1.5rem;
  padding: 2rem 2.5rem 1.5rem;
  z-index: 99;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 1600px) {
    transform: translate(-140%, -145%) scale(0.1);
  }

  ${({isVisible}) => isVisible && css`
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);

    @media (min-width: 1600px) {
      transform: translate(-50%, -50%) scale(1);
    }
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