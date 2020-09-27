import styled from "styled-components/macro";
import { util, colors } from "../../style";

const { Button, Link } = util;
const { color } = colors;

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 1.6875rem;
`;

export const FormWrapper = styled.div`
  border-radius: 24px;
  border: 1px solid ${color(`gray-light`)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 475px;
  padding: 3.75rem;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${color(`gray-light`)};
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.8125rem;

  &:last-of-type {
    margin-bottom: 1.375rem;
  }

  &::placeholder {
    color: ${color(`gray-light`)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px ${color(`gray`)};
  }
`;

export const Icon = styled.span``;

export const Submit = styled(Button)`
  margin-bottom: 2rem;
`;

export const Footer = styled.span`
  text-align: center;
`;

export const RegisterLink = styled(Link)``;
