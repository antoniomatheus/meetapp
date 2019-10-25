import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('The e-mail is required'),
  password: Yup.string()
    .min(6, 'The password should have at least 8 characters')
    .required('The password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">Sign Up</button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}
