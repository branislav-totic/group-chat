import styled from "styled-components/macro";
import { colors } from "../../style";
const { color } = colors;

export const Container = styled.div`
  background: ${color(`black-medium`)};
  color: ${color(`white`)};
  display:flex;
  flex-direction: column;
  font-size: 1.125rem;
  height: 100%;
  width: 77.5%;
`;

export const Header = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  padding: 1.25rem 4.375rem 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4.375rem;
`;
