import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Footer,
  Form,
  Header,
  Icon,
  Input,
  RegisterLink,
  Submit,
} from './Login.css'

const Login = () => {
  return (
    <Container>
      <Header>Login</Header>
      <Form>
        <Input></Input>
        <Input></Input>
        <Submit>Login</Submit>
      </Form>

      <Footer>Don’t have an account yet? <RegisterLink>Register</RegisterLink></Footer>
    </Container>
  )
}

Login.propTypes = {

}

export default Login;
