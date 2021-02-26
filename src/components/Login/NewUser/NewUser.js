import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Footer,
  Form,
  Header,
  Input,
  FormWrapper,
  RegisterLink,
  Submit,
} from '../Login.css';

const NewUser = ({setUser, handleRegisterLinkClick}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;

    const formData = {
      userName: elements.username.value,
      email: elements.email.value,
      password: elements.password.value
    };

    console.log(formData)
    // setUser('data.user')
    // const response = login(formData);
    // console.log(response)
    // set user on login
    // setUser(data.user);
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
    <>
      <Header>Create user</Header>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="User name" name="username"></Input>
        <Input placeholder="Email" name="email"></Input>
        <Input placeholder="Password" type="password" name="password"></Input>
        <Submit type="submit">Create</Submit>
      </Form>

      <Footer>
        {`Return to `}
        <RegisterLink href={``} onClick={handleRegisterLinkClick}>Login</RegisterLink>
      </Footer>
    </>
  )
}

NewUser.propTypes = {

}

export default NewUser
