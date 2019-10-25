import React from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  Container,
  TitleContainer,
  Title,
  Control,
  EditButton,
  Text,
  InfoContainer,
  Info,
} from './styles';
import Button from '~/components/Button';

export default function Description({ history }) {
  const { meetup } = history.location.state;

  function handleEdit() {
    history.push('editmeetup', { meetup, editing: true });
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${meetup.id}`);

      history.push('dashboard');
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <TitleContainer>
        <Title>{meetup.title}</Title>
        <Control>
          <EditButton onClick={handleEdit}>Edit</EditButton>
          <Button onClick={handleCancel}>Cancel</Button>
        </Control>
      </TitleContainer>

      <img src={meetup.image.url} alt="meetup banner" />

      <Text>{meetup.description}</Text>

      <InfoContainer>
        <Info>{meetup.parsedDate}</Info>
        <Info>{meetup.location}</Info>
      </InfoContainer>
    </Container>
  );
}

Description.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        meetup: PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          image: PropTypes.shape({
            url: PropTypes.string,
          }),
          description: PropTypes.string,
          parsedDate: PropTypes.string,
          location: PropTypes.string,
        }),
      }),
    }),
    push: PropTypes.func,
  }).isRequired,
};
