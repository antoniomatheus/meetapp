import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import EditMeetup from '../pages/EditMeetup';
import Description from '../pages/Description';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/editmeetup" component={EditMeetup} isPrivate />
      <Route path="/description" component={Description} isPrivate />
    </Switch>
  );
}
