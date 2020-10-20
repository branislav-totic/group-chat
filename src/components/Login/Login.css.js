import styled from 'styled-components/macro';
import { util, colors } from '../../style';

const { Button, Link, Input: OriginalInput } = util;
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

export const Input = styled(OriginalInput)`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 1.375rem;
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
