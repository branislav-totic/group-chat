import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { AppContext } from '..';
import NewUser from './NewUser/NewUser';
import {
  Container,
  Footer,
  Form,
  Header,
  Input,
  FormWrapper,
  RegisterLink,
  Submit,
  Wrapper,
} from './Login.css';

//change data with real content
import { login } from '../../api/login'

const Login = ({ setCurrentUser }) => {

  const [registerPageClosed, setRegisterPageClosed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const formData = {
      email: email.value,
      password: password.value
    };

    const user = await login(formData)
    setCurrentUser(user)
  };

  const handleRegisterLinkClick = (e) => {
    e.preventDefault()
    setRegisterPageClosed((prevState)=> !prevState)
  }

  return (
    <Container>
      <FormWrapper>
        <Wrapper isHidden={registerPageClosed}>
          <Header>Login</Header>
          <Form onSubmit={handleSubmit}>
            <Input placeholder="Email" name="email"></Input>
            <Input placeholder="Password" type="password" name="password"></Input>
            <Submit type="submit">Login</Submit>
          </Form>

          <Footer>
            {`Don’t have an account yet? `}
            <RegisterLink href={``} onClick={handleRegisterLinkClick}>Register</RegisterLink>
          </Footer>
        </Wrapper>
        <Wrapper isHidden={!registerPageClosed}>
          <NewUser
            setCurrentUser={setCurrentUser}
            handleRegisterLinkClick={handleRegisterLinkClick}
          />
        </Wrapper>
      </FormWrapper>
    </Container>
  );
};

const LoginProvider = () => {
  return (
    <AppContext.Consumer>
      {({setCurrentUser}) => {
        return <Login setCurrentUser={setCurrentUser} />;
      }}
    </AppContext.Consumer>
  );
};

Login.propTypes = {
	setCurrentUser: PropTypes.func,
};

export default LoginProvider;
