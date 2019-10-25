import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';

import 'react-datepicker/dist/react-datepicker.css';

import { Container, Image } from './styles';
import Button from '~/components/Button';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('A description is required'),
  location: Yup.string().required('A location is required'),
});

export default function EditMeetup({ history }) {
  const meetup = history.location.state && history.location.state.meetup;
  const editing = Boolean(history.location.state);

  const [file, setFile] = useState(meetup && meetup.image_id);
  const [preview, setPreview] = useState(meetup && meetup.image.url);
  const [date, setDate] = useState(meetup && parseISO(meetup.date_time));

  async function handleFileChange(e) {
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

  async function handleSubmit({ title, description, location }) {
    const body = {
      title,
      description,
      date_time: date,
      location,
      image_id: file,
    };

    if (editing) {
      try {
        await api.put(`meetups/${meetup.id}`, body);

        toast.success('The meetup was succesfully updated');
      } catch (err) {
        console.tron.log(err);
      }
    } else {
      try {
        await api.post('meetups', body);

        toast.success('The meetup was succesfully created');
      } catch (err) {
        console.tron.log(err);
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={meetup} schema={schema}>
        <Image>
          <label htmlFor="avatar">
            {preview ? (
              <img src={preview} alt="" />
            ) : (
              <span>Select an image</span>
            )}

            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </Image>

        <Input type="text" placeholder="Title" name="title" />
        <Input multiline placeholder="Description" name="description" />
        <DatePicker
          selected={date}
          onChange={newDate => setDate(newDate)}
          timeFormat="HH:mm"
          showTimeSelect
          timeIntervals={5}
          timeCaption="Time"
          dateFormat="d/MM/yyyy H:mm"
        />
        <Input type="text" placeholder="Location" name="location" />

        <Button type="submit">{editing ? 'Save' : 'Create'}</Button>
      </Form>
    </Container>
  );
}

EditMeetup.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        meetup: PropTypes.shape({
          title: PropTypes.string,
          image: PropTypes.shape({
            url: PropTypes.string,
          }),
          image_id: PropTypes.number,
          description: PropTypes.string,
          parsedDate: PropTypes.string,
          location: PropTypes.string,
        }),
      }),
    }),
    push: PropTypes.func,
  }).isRequired,
};
