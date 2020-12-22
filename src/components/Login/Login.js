import React from "react";
import PropTypes from 'prop-types'
import { AppContext } from "..";
import {
  Container,
  Footer,
  Form,
  Header,
  Input,
  FormWrapper,
  RegisterLink,
  Submit,
} from "./Login.css";

//change data with real content
import data from '../App/data.json'

const Login = ({ setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // set user on login
    setUser(data.user);
    // fetch("http://127.0.0.1:3001/user")
    //   .then((data) => data.json())
    //   .then(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  };

  return (
    <Container>
      <FormWrapper>
        <Header>Login</Header>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password" type="password"></Input>
          <Submit type="submit">Login</Submit>
        </Form>

        <Footer>
          {`Don’t have an account yet? `}
          <RegisterLink href="https://google.com">Register</RegisterLink>
        </Footer>
      </FormWrapper>
    </Container>
  );
};

const LoginProvider = () => {
  return (
    <AppContext.Consumer>
      {({setUser}) => {
        return <Login setUser={setUser} />;
      }}
    </AppContext.Consumer>
  );
};

Login.propTypes = {
	setUser: PropTypes.func,
};

export default LoginProvider;
