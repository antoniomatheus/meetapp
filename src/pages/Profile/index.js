import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container, Image } from './styles';
import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('Insert a valid e-mail'),
  avatar_id: Yup.number(),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .min(6, 'The password needs at least 6 characters')
          .required('Insert your new password')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Insert your new password')
          .oneOf([password], "The passwords don't match")
      : field
  ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [file, setFile] = useState(profile.avatar && profile.avatar.id);
  const [preview, setPreview] = useState(profile.avatar && profile.avatar.url);

  async function handleSubmit({
    name,
    email,
    oldPassword,
    password,
    confirmPassword,
  }) {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
        avatar_id: file,
      })
    );
  }

  async function handleChange(e) {
    try {
      const data = new FormData();

      data.append('file', e.target.files[0]);

      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
        <Image>
          <label htmlFor="avatar">
            <img
              src={
                preview ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt=""
            />

            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
        </Image>

        <Input type="text" placeholder="Your complete name" name="name" />
        <Input type="email" placeholder="Your e-mail address" name="email" />

        <hr />

        <Input
          type="password"
          placeholder="You current password"
          name="oldPassword"
        />
        <Input type="password" placeholder="You new password" name="password" />
        <Input
          type="password"
          placeholder="Confirm your new password"
          name="confirmPassword"
        />

        <button type="submit">Update profile</button>
      </Form>
    </Container>
  );
}
