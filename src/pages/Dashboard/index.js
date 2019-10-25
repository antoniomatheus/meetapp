import React, { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, addDays, subDays } from 'date-fns';
import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback, RefreshControl } from 'react-native';
import api from '~/services/api';

import { Container, DateText, List, Control } from './styles';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);

  const { id } = useSelector(state => state.user.profile);

  const selectedDate = useMemo(() => {
    return format(date, 'MMMM d');
  }, [date]);

  async function getMeetups() {
    try {
      const response = await api.get(`meetups?date=${date.toISOString()}`);

      const availableMeetups = response.data.filter(
        meetup => meetup.organizer_id !== id
      );

      setMeetups(availableMeetups);
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function onRefresh() {
    setRefreshing(true);

    await getMeetups();

    setRefreshing(false);
  }

  useEffect(() => {
    getMeetups();
  }, [date]);

  function handleDecreaseDate() {
    setDate(subDays(date, 1));
  }

  function handleIncreaseDate() {
    setDate(addDays(date, 1));
  }

  async function onSignUp(id) {
    try {
      await api.post(`meetups/registration/${id}`);

      setMeetups(meetups.filter(meetup => meetup.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Background>
      <Container>
        <Control>
          <TouchableWithoutFeedback onPress={handleDecreaseDate}>
            <Icon name="keyboard-arrow-left" size={30} color="#fff" />
          </TouchableWithoutFeedback>
          <DateText>{selectedDate}</DateText>
          <TouchableWithoutFeedback onPress={handleIncreaseDate}>
            <Icon name="keyboard-arrow-right" size={30} color="#fff" />
          </TouchableWithoutFeedback>
        </Control>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              onPress={() => onSignUp(item.id)}
              buttonText="Sign Up"
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event-note" size={20} color={tintColor} />
  ),
};
