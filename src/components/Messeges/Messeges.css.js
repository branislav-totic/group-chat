import styled from "styled-components/macro";
import { colors } from "../../style";
const { color } = colors;

export const Container = styled.div`
  background: ${color(`black-medium`)};
  width: 76.5%;
  height: 100%;
  font-size: 1.125rem;
  color: ${color(`white`)};
`;

export const Header = styled.div`
  padding: 1.25rem 4.375rem 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;