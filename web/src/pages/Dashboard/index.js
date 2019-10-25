import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatRelative, parseISO } from 'date-fns';
import history from '~/services/history';
import api from '~/services/api';

import {
  Container,
  TitleContainer,
  Title,
  Meetup,
  MeetupTitle,
  DateText,
} from './styles';
import Button from '~/components/Button';

export default function Dashboard() {
  const { id } = useSelector(state => state.user.profile);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function getMeetups() {
      try {
        const response = await api.get('meetups');

        const now = new Date();

        const userMeetups = response.data
          .filter(meetup => meetup.organizer_id === id)
          .map(meetup => ({
            ...meetup,
            parsedDate: formatRelative(parseISO(meetup.date_time), now, {
              addSuffix: true,
            }),
          }));

        setMeetups(userMeetups);
      } catch (err) {
        console.tron.log(err);
      }
    }

    getMeetups();
  }, [id]);

  return (
    <Container>
      <TitleContainer>
        <Title>My Meetups</Title>
        <Button onClick={() => history.push('editmeetup')}>New Meetup</Button>
      </TitleContainer>
      {meetups.map(meetup => (
        <Meetup
          key={String(meetup.id)}
          onClick={() => history.push('/description', { meetup })}
        >
          <MeetupTitle>{meetup.title}</MeetupTitle>
          <DateText>{meetup.parsedDate}</DateText>
        </Meetup>
      ))}
    </Container>
  );
}
