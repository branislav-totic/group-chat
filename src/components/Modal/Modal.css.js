import styled from 'styled-components';
import { colors, sizing, util } from '../../style';

const { Input, Button, ScrollBar } = util;
const { color } = colors;
const { font } = sizing;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${color(`black`)};
  border-radius: 1.5rem;
  padding: 2rem 2.5rem 1.5rem;
  z-index: 99;
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