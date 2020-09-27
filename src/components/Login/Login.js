import React from "react";
import PropTypes from 'prop-types'
import { AppContext } from "../App/App";
import {
  Container,
  Footer,
  Form,
  Header,
  // Icon,
  Input,
  FormWrapper,
  RegisterLink,
  Submit,
} from "./Login.css";

const Login = ({ setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(true);
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
